/* eslint-disable @typescript-eslint/no-explicit-any */

import { BadRequestError, ConflictError, ForbiddenError, NetworkError, NotFoundError, UnAuthenticatedError, UnProcessableEntityError } from "../types";




export function mapAxiosError(error: any) {
  if (!error.response) {
    return new NetworkError();
  } else {
    const status = error.response.status;
    const causeError = error.response.data.error;
    switch (status) {
      case 401:
        return new UnAuthenticatedError(causeError.details);
      case 403:
        return new ForbiddenError(causeError?.details);
      case 400:
        return new BadRequestError(
          causeError?.details || (causeError?.message && causeError.message[0]?.message) || "Bad Request", 
          causeError?.message && causeError.message[0]?.param, 
          causeError?.message && causeError.message[0]
        );
      case 422:
        return new UnProcessableEntityError(causeError?.message[0]?.description || causeError?.message[0]?.message);
      case 404:
        return new NotFoundError(causeError.details);
      case 409:
        return new ConflictError(causeError?.details);
      //    case 500:
      //        return new InternalServerError(JSON.stringify(error.response.data)) ;
      default:
        return error;
    }
  }
}