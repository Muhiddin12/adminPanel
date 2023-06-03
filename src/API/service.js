import { request } from "./axios";

export const getAll = (slug) => request.get(`${slug}`);
export const deleteById = (slug, id) => request.delete(`${slug}/${id}`);
