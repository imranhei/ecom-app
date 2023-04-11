<<<<<<< HEAD
import data from '/data.json'

export default async function getProductById(req, res) {
  const { pid } = req.query;

  const product = data.find(d => d.id === pid);

  res.status(200).json(product);
}
=======
import Product from '/data.json'

export default async (req, res) => {
    const {pid} = req.query;
    let product;
    
    Product.map((d) => {
        if(d.id==pid){
            product = d;
            return
        };
    })
    res.status(200).json(product)
}
>>>>>>> f4b29b7850f32e524a5844ac364971d33589be56
