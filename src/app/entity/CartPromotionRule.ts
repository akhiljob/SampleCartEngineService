import { Entity, BaseEntity, Generated, PrimaryColumn, Column } from "typeorm";

@Entity()
export class CartPromotionRule extends BaseEntity {
    @PrimaryColumn()
    @Generated("increment")
    public id: number;

    @Column()
    public promotion_id: number;


    @Column({type: "float"})
    public cart_discount_amount : number;

    @Column({type: "float"})
    public cart_min_amount : number;
  

}