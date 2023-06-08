import { request } from "./axios";

export const getAll = (slug) => request.get(`${slug}`);
export const create = ({ slug, body }) => request.post(`${slug}`, body);
export const getById = (slug, id) => request.get(`${slug}/${id}`);
export const updateById = (slug, id, body) =>
  request.put(`${slug}/${id}`, body);
export const deleteById = ({ slug, id }) => request.delete(`${slug}/${id}`);
