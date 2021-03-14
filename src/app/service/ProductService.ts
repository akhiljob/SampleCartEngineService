import { CreateProductDto } from "../dto/CreateProductDto";

export interface ProductService {
    createProduct(productDetails: CreateProductDto): Promise<any>;
}