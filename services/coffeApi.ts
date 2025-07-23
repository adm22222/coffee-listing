import apis from "./apis";

export const getAllCoffees = async () => {
  const res = await apis.get("/simple-coffee-listing-data.json");
  return res.data;
};
