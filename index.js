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

  app.get("/ron", async (req,res) => {
    try {
        const products = await getProducts(3)
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

  app.get("/bebida", async (req,res) => {
    try {
        const products = await getProducts(4)
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

  app.get("/snack", async (req,res) => {
    try {
        const products = await getProducts(5)
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

  app.get("/cerveza", async (req,res) => {
    try {
        const products = await getProducts(6)
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

  app.get("/vodka", async (req,res) => {
    try {
        const products = await getProducts(7)
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

