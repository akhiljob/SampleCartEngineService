import { Entity, BaseEntity, Generated, PrimaryColumn, Column } from "typeorm";

@Entity()
export class CartPromotionRule extends BaseEntity {
    @PrimaryColumn()
    @Generated("increment")
    public id: number;

    @Column()
    public promotion_id: number;

    @Column()
    public cart_discount_amount : string;

    @Column()
    public cart_discount_percentage : string;

  

}