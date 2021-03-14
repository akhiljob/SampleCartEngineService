import { Entity, BaseEntity, Generated, PrimaryColumn, Column } from "typeorm";

@Entity()
export class TierPriceRule extends BaseEntity {
    @PrimaryColumn()
    @Generated("increment")
    public id: number;

    @Column()
    public promotion_id: number;

    @Column()
    public tier_promotion_quantity : number;

    @Column()
    public tier_product_id: number;


    @Column({type: "float"})
    public tier_promotion_amount: number;

}