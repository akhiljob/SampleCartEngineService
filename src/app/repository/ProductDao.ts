import { Product } from "../entity/Product";


class ProductDao {
    public getAll(searchParam: any, limit: number, offset: number): Promise<any> {
        throw new Error("Method not implemented.");
    }
    /**
     * Get Product by Product Name
     */
    public async getByName(name: string): Promise<any> {
        throw new Error("Method not implemented.");
    }
   
    public create(data: any): Promise<any> {
        return Product.save(data);
    }

    public update(id: any, data: any): Promise<any> {
        throw new Error("Method not implemented.");
    }
   
}

const productDao = new ProductDao();
export default productDao;
