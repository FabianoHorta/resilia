const express = require("express");
const router = express.Router();

const indexProdutosController = require("../controllers/indexProdutosController");
const addProdutosController = require("../controllers/addProdutosController");
const editProdutosController = require("../controllers/editProdutosController");




router.get("/", indexProdutosController.listarProdutos);

router.post("/addproduto", addProdutosController.addProduto);

router.put("/editproduto/:id", editProdutosController.editProduto);



module.exports = router;