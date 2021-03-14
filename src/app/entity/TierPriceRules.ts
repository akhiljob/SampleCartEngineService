import { Entity, BaseEntity, Generated, PrimaryColumn, Column } from "typeorm";

@Entity()
class TierPriceRule extends BaseEntity {
    @PrimaryColumn()
    @Generated("increment")
    public id: number;

    @Column()
    public promotion_id: number;

    @Column()
    public tier_promotion_quantity : string;

    @Column()
    public tier_product_id: string;


    @Column()
    public tier_promotion_amount: string;

}