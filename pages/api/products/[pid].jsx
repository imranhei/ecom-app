import Product from '/data.json'

export default Pid = async (req, res) => {
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
