import axios from "axios";
import type { IAddCartBody, IUpdateCart } from "../../models";
import { mapAxiosError } from "../../utils";

export const getCarts = async () => {
  try {
    const res = await axios.get("/carts");
    return res.data;
  } catch (e) {
    throw mapAxiosError(e);
  }
};

export const addToCart = async (body: IAddCartBody) => {
  try {
    const res = await axios.post("/carts/add", body);
    return res.data;
  } catch (e) {
    throw mapAxiosError(e);
  }
};

export const updateCart = async ({
  id,
  body,
}: {
  id: number;
  body: IUpdateCart;
}) => {
  try {
    const res = await axios.put(`/carts/${id}`, body);
    return res.data;
  } catch (e) {
    throw mapAxiosError(e);
  }
};

export const removeFromCart = async (id: number) => {
  try {
    const res = await axios.delete(`/carts/${id}`);
    return res.data;
  } catch (e) {
    throw mapAxiosError(e);
  }
};
