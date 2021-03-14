/**
 * Wraps Controllers for easy import from other modules
 */
import { ProductServiceImpl } from "../service/ProductServiceImpl";
import { PromotionRuleServiceImpl } from "../service/PromotionRuleServiceImpl";
import HealthController from "./HealthController";
import ProductController from "./ProductController";
import PromotionRuleController from "./PromotionRuleController";

const productService = new ProductServiceImpl();
const promotionRuleService= new PromotionRuleServiceImpl();
export default [
  new HealthController(),
  new ProductController(productService),
  new PromotionRuleController(promotionRuleService)
];
