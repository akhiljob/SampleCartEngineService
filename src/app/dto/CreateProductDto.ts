import { IsString } from "class-validator";

export class CreateProductDto {
    @IsString()
    public name: string;

    @IsString()
    public description: string;

    @IsString()
    public unit_price: number;
}
