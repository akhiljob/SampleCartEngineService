import { Type } from "class-transformer";
import { IsDefined, IsNumber, IsOptional, IsString, ValidateNested } from "class-validator";

export class CreateTierPriceRuleDto {
    @IsString()
    public name: string;

    @IsString()
    public description: string;

    @IsOptional()
    @ValidateNested({ each: true })
    @Type(() => TierPriceRuleDto)
    public tier_price_rule : TierPriceRuleDto;




}

export class CreateCartPromotionRuleDto {
    @IsString()
    public name: string;

    @IsString()
    public description: string;

    @IsOptional()
    @ValidateNested({ each: true })
    @Type(() => CartPromotionRuleDto)
    public cart_promotion_rule : CartPromotionRuleDto;




}



export class TierPriceRuleDto{

    @IsNumber()
    @IsOptional()
    public promotion_id: number;

    @IsNumber()
    @IsDefined()
    public tier_promotion_quantity : number;

    @IsNumber()
    @IsOptional()
    public tier_product_id: number;

    @IsNumber()
    @IsDefined()
    public tier_promotion_amount: number;
}


export class CartPromotionRuleDto{

    @IsNumber()
    @IsOptional()
    public cart_discount_amount: number;

    @IsNumber()
    @IsDefined()
    public cart_min_amount : number;

}