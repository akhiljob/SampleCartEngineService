import { NextFunction, Response } from "express";
import { ProductService } from "../service/ProductService";
import { ProductServiceImpl } from "../service/ProductServiceImpl";
import { AbstractController } from "../util/rest/controller";
import RequestWithUser from "../util/rest/request";

class ProductController extends AbstractController {
private productService : ProductServiceImpl;
    constructor(productService: ProductServiceImpl) {
      super("/products");
      this.productService = productService;
      this.initializeRoutes();
    }
  
    protected initializeRoutes = () => {
      this.router.get(`${this.path}`, this.asyncRouteHandler(this.getAllProducts));
      this.router.post(`${this.path}`, this.asyncRouteHandler(this.createProduct));
      this.router.put(`${this.path}`, this.asyncRouteHandler(this.updateProduct));

    }
  
    private getAllProducts = async (request: RequestWithUser, response: Response, next: NextFunction) => {
  
        // TODO retirieve list of  products available
  
    }

    private createProduct = async (request: RequestWithUser, response: Response, next: NextFunction) => {
  
            const productDetails = request.body;

            const result = await this.productService.createProduct(productDetails);

            response.send(this.fmt.formatResponse(result, Date.now() - request.startTime, "OK"));
          
            }


    private updateProduct = async (request: RequestWithUser, response: Response, next: NextFunction) => {
  
            // TODO updateProduct to update products
          
            }

  }
  
  export default ProductController;
  