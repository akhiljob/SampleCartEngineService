import { CreateCartPromotionRuleDto, CreateTierPriceRuleDto } from '../dto/CreatePromotionDto';

export interface PromotionService {
    createTierPriceRule(promotionDetails: CreateTierPriceRuleDto): Promise<any>;
    createCartPromotionRule(promotionDetails: CreateCartPromotionRuleDto): Promise<any>;
}