import { Entity, BaseEntity, Generated, PrimaryColumn, Column } from "typeorm";

@Entity()
export class Product extends BaseEntity {
    @PrimaryColumn()
    @Generated("increment")
    public id: number;

    @Column()
    public name: string;

    @Column()
    public description : string;

    @Column({type: "float"})
    public unit_price: number;

}