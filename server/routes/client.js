import express from "express";
import {
  getProducts,
  getCustomers,
  getTransactions,
  addProduct,
//   getGeography,
} from "../controllers/client.js";
import { getUser } from "../controllers/general.js";

const router = express.Router();

router.get("/products", getProducts);
router.post("products",addProduct)
router.get("/customers", getCustomers);
 router.get("/transactions", getTransactions);
 router.post('/all',getUser);
// router.get("/geography", getGeography);


export default router;