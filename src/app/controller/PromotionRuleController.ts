import { NextFunction, Response } from "express";
import { PromotionRuleServiceImpl } from "../service/PromotionRuleServiceImpl";
import { AbstractController } from "../util/rest/controller";
import RequestWithUser from "../util/rest/request";
import HealthController from "./HealthController";

class PromotionRuleController extends AbstractController {
private promotionRuleService: PromotionRuleServiceImpl;
    constructor(promotionRuleService: PromotionRuleServiceImpl) {

      super("/promotion_rules");
      this.promotionRuleService = promotionRuleService;
      this.initializeRoutes();
    }
  
    protected initializeRoutes = () => {
      this.router.get(`${this.path}`, this.asyncRouteHandler(this.getAllPromotions));
      this.router.post(`${this.path}/tier_price_rule`, this.asyncRouteHandler(this.createTierPriceRule));
      this.router.post(`${this.path}/cart_discount_rule`, this.asyncRouteHandler(this.createCartDiscountRule));
    }
  
    private getAllPromotions = async (request: RequestWithUser, response: Response, next: NextFunction) => {
  
        // TODO retrieve list of  promotions available
  
    }

    private createTierPriceRule = async (request: RequestWithUser, response: Response, next: NextFunction) => {
  
            const tierPriceInfo = request.body;
            const result = this.promotionRuleService.createTierPriceRule(tierPriceInfo);
            response.send(this.fmt.formatResponse(result, Date.now() - request.startTime, "OK"));
            }


    private createCartDiscountRule = async (request: RequestWithUser, response: Response, next: NextFunction) => {
  
            const cartPromotionalRuleInfo = request.body;
            const result = this.promotionRuleService.createCartPromotionRule(cartPromotionalRuleInfo);
            response.send(this.fmt.formatResponse(result, Date.now() - request.startTime, "OK"));
          
            }

  }
  
  export default PromotionRuleController;
  