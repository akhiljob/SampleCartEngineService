import { Entity, BaseEntity, Generated, PrimaryColumn, Column } from "typeorm";

@Entity()
export class PromotionRule extends BaseEntity {
    @PrimaryColumn()
    @Generated("increment")
    public id: number;

    @Column()
    public name: string;


    @Column()
    public description: string;


    @Column()
    public type: string;


}