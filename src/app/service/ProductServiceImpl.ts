import { CreateProductDto } from "../dto/CreateProductDto";
import productDao from "../repository/ProductDao";
import { ProductService } from "./ProductService";

export class ProductServiceImpl implements ProductService {
    async createProduct(productDetails: CreateProductDto): Promise<any> {
        await productDao.create(productDetails);
    }

}