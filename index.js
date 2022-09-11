const express = require("express");
const app = express();

app.listen(3000, () => {
    console.log("Server on");
  });

  app.get("/", async (req,res) => {
    try {
        const products = await getProducts()
        res.send ({
            productos: products
        })
    } catch(err) {
        return res.status(404).send({
            message: "error",
            status: "error",
        })
    }
  })