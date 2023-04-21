import { Router } from 'express';

const router = Router();
const products = []

router.get('/',(req,res)=>{
    res.send({products})
})

router.post('/',(req,res)=>{
    const product = req.body;
    products.push(product);
    console.log(products);
    res.send({status:"success"})
})

export default router;