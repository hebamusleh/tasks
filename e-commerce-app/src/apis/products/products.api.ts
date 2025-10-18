import axios from "axios";
import type { IProductsParams } from "../../models";
import { createQueryString, mapAxiosError } from "../../utils";

export const getProducts = async (body: IProductsParams) => {
  const params = createQueryString(body);
  try {
    const res = await axios.get(`/products?${params}`);
    return res.data.products;
  } catch (e) {
    throw mapAxiosError(e);
  }
};

export const getProductsDetails = async (id: number) => {
  try {
    const res = await axios.get(`/products/${id}`);
    return res.data;
  } catch (e) {
    throw mapAxiosError(e);
  }
};
