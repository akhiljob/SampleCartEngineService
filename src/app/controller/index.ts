/**
 * Wraps Controllers for easy import from other modules
 */
import { CartServiceImpl } from "../service/CartServiceImpl";
import { ProductServiceImpl } from "../service/ProductServiceImpl";
import { PromotionRuleServiceImpl } from "../service/PromotionRuleServiceImpl";
import CartController from "./CartController";
import HealthController from "./HealthController";
import ProductController from "./ProductController";
import PromotionRuleController from "./PromotionRuleController";

const productService = new ProductServiceImpl();
const promotionRuleService= new PromotionRuleServiceImpl();
const cartService = new CartServiceImpl();
export default [
  new HealthController(),
  new ProductController(productService),
  new PromotionRuleController(promotionRuleService),
  new CartController(cartService)
];
