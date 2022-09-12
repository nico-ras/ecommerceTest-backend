const express = require("express");
const app = express();
const { getAllProducts, getAllCategories, getProducts } = require("./consultas.js")

app.listen(3000, () => {
    console.log("Server on");
  });

  app.get("/", async (req,res) => {
    try {
        const products = await getAllProducts()
        res.send ({
            productos: products
        })
    } catch(err) {
        return res.status(404).send({
            message: "error",
            status: "error",
            res: err,
        })
    }
  })

  app.get("/categories", async (req,res) => {
    try {
        const products = await getAllCategories()
        res.send ({
            productos: products
        })
    } catch(err) {
        return res.status(404).send({
            message: "error",
            status: "error",
            res: err,
        })
    }
  })

  app.get("/energeticas", async (req,res) => {
    try {
        const products = await getProducts(1)
        res.send ({
            productos: products
        })
    } catch(err) {
        return res.status(404).send({
            message: "error",
            status: "error",
            res: err,
        })
    }
  })

  app.get("/pisco", async (req,res) => {
    try {
        const products = await getProducts(2)
        res.send ({
            productos: products
        })
    } catch(err) {
        return res.status(404).send({
            message: "error",
            status: "error",
            res: err,
        })
    }
  })

  // "productos": [
//     {
//         "id": 1,
//         "name": "bebida energetica"
//     },
//     {
//         "id": 2,
//         "name": "pisco"
//     },
//     {
//         "id": 3,
//         "name": "ron"
//     },
//     {
//         "id": 4,
//         "name": "bebida"
//     },
//     {
//         "id": 5,
//         "name": "snack"
//     },
//     {
//         "id": 6,
//         "name": "cerveza"
//     },
//     {
//         "id": 7,
//         "name": "vodka"
//     }
// ]
  