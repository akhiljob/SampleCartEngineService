import { NextFunction, Response } from "express";
import { AbstractController } from "../util/rest/controller";
import RequestWithUser from "../util/rest/request";
import HealthController from "./HealthController";

class PromotionRuleController extends AbstractController {

    constructor() {
      super("/promotion_rules");
      this.initializeRoutes();
    }
  
    protected initializeRoutes = () => {
      this.router.get(`${this.path}`, this.asyncRouteHandler(this.getAllPromotions));
      this.router.post(`${this.path}/tier_price_rule`, this.asyncRouteHandler(this.createTierPriceRule));
      this.router.post(`${this.path}/cart_discount_rule`, this.asyncRouteHandler(this.createCartDiscountRule));
    }
  
    private getAllPromotions = async (request: RequestWithUser, response: Response, next: NextFunction) => {
  
        // TODO retirieve list of  promotions available
  
    }

    private createTierPriceRule = async (request: RequestWithUser, response: Response, next: NextFunction) => {
  
            // TODO createTierPriceRule to create tier prices for products
          
            }


    private createCartDiscountRule = async (request: RequestWithUser, response: Response, next: NextFunction) => {
  
            // TODO createOrderDiscountRule to create order level/cart level discounts for products
          
            }

  }
  
  export default PromotionRuleController;
  