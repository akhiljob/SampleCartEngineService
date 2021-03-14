import { Entity, BaseEntity, Generated, PrimaryColumn, Column } from "typeorm";

@Entity()
class PromotionRule extends BaseEntity {
    @PrimaryColumn()
    @Generated("increment")
    public id: number;

    @Column()
    public promotion_name: string;

    @Column()
    public promotion_coupon: string;

    @Column()
    public promotion_description: string;


    @Column()
    public promotion_type: string;

    @Column()
    public promotion_definition_id: number

    @Column()
    public cart_promotion_amount: string;






}