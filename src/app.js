import express from 'express';
import productsRouter from './routes/products.router.js';
// import cartRouter from './routes/cart.router.js';

// //fix for __dirname
import __dirname from './utils.js';

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:true}))
app.use(express.static(`${__dirname}/public`))

app.use('/api/products',productsRouter);
// app.use('/api/cart',cartRouter);

const server = app.listen(8080,()=>console.log('Listening on 8080'));
