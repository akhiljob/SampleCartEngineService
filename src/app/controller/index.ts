/**
 * Wraps Controllers for easy import from other modules
 */
import { ProductServiceImpl } from "../service/ProductServiceImpl";
import HealthController from "./HealthController";
import ProductController from "./ProductController";

const productService = new ProductServiceImpl();
export default [
  new HealthController(),
  new ProductController(productService)
];
