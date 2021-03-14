import { CreateTierPriceRuleDto, CreateCartPromotionRuleDto } from "../dto/CreatePromotionDto";
import { PromotionService } from "./PromotionRuleService";
import tierPriceRuleDao from '../repository/TierPriceRuleDao';
import cartPromotionRuleDao from "../repository/CartPromotionRuleDao";
import { plainToClass } from "class-transformer";
import { PromotionRule } from "../entity/PromotionRule";
import promotionRuleDao from "../repository/PromotionRuleDao";
import { TierPriceRule } from "../entity/TierPriceRule";
import { PROMOTION_TYPES } from "../constants";
import { CartPromotionRule } from "../entity/CartPromotionRule";

export class PromotionRuleServiceImpl implements PromotionService{
    async createTierPriceRule(promotionDetails: CreateTierPriceRuleDto): Promise<any> {

        const promotionObject = await this.buildPromotionObjectFromTierRuleInfo(promotionDetails);
        const savePromotionDetails = await promotionRuleDao.create(promotionObject);
        const tierPriceObject = await this.buildTierPriceObject(promotionDetails.tier_price_rule, savePromotionDetails.id);
        return await tierPriceRuleDao.create(tierPriceObject);
    }
    async createCartPromotionRule(promotionDetails: CreateCartPromotionRuleDto): Promise<any> {

        const promotionObject = await this.buildPromotionObjectFromCartPromotionInfo(promotionDetails);
        const savePromotionDetails = await promotionRuleDao.create(promotionObject);
        const cartPromotionRules = await this.buildCartPromotionRule(promotionDetails, savePromotionDetails.id);
        return await cartPromotionRuleDao.create(promotionDetails);
        
    }

 async buildPromotionObjectFromTierRuleInfo(promotionDetails: CreateTierPriceRuleDto){

    return plainToClass(PromotionRule,{
        name: promotionDetails.name,
        description: promotionDetails.description,
        type: PROMOTION_TYPES.TIER_PRICE_RULE
    });
 }

 async buildPromotionObjectFromCartPromotionInfo(promotionDetails:CreateCartPromotionRuleDto){

    return plainToClass(PromotionRule,{
        name: promotionDetails.name,
        description: promotionDetails.description,
        type: PROMOTION_TYPES.CART_PROMOTION_RULE
    });
 }

 async buildTierPriceObject(tierPriceDetails: any, promotion_id: number){

    return plainToClass(TierPriceRule,{
        promotion_id,
        tier_promotion_quantity: tierPriceDetails.tier_promotion_quantity,
        tier_product_id: tierPriceDetails.tier_product_id,
        tier_promotion_amount: tierPriceDetails.tier_promotion_amount,
    })
 }

 async buildCartPromotionRule(cartPromotionDetails: any , promotion_id : number){

    return plainToClass(CartPromotionRule,{
        promotion_id,
        cart_discount_amount: cartPromotionDetails.cart_discount_amount,
        cart_min_amount: cartPromotionDetails.cart_min_amount,
    });
 }
}