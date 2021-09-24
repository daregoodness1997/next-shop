export async function getProductsData(URL) {
  const res = await fetch(URL);
  return res.json();
}
