import data from '/data.json'

export default async function getProductById(req, res) {
  const { pid } = req.query;

  const product = data.find(d => d.id === pid);

  res.status(200).json(product);
}
