import { NextFunction, Response } from "express";
import { CartServiceImpl } from "../service/CartServiceImpl";
import { AbstractController } from "../util/rest/controller";
import RequestWithUser from "../util/rest/request";

class CartController extends AbstractController {
private cartService : CartServiceImpl;
    constructor(cartService: CartServiceImpl) {
      super("/carts");
      this.cartService = cartService;
      this.initializeRoutes();
    }
  
    protected initializeRoutes = () => {
      this.router.post(`${this.path}`, this.asyncRouteHandler(this.getCart));
      this.router.put(`${this.path}/:id/item`, this.asyncRouteHandler(this.addProduct));
      this.router.delete(`${this.path}/:id/item`, this.asyncRouteHandler(this.removeProduct));
      this.router.get(`${this.path}/:id/totals`, this.asyncRouteHandler(this.getTotals));

    }
  
    private getCart = async (request: RequestWithUser, response: Response, next: NextFunction) => {
  
        // TODO create an entry for cart in db and return a ref to it
  
    }

    private addProduct = async (request: RequestWithUser, response: Response, next: NextFunction) => {
   
        // TODO to add an item to cart
          
            }

    private removeProduct = async (request: RequestWithUser, response: Response, next: NextFunction) => {
   
        // TODO to remove an item from cart
                  
    }


    private getTotals = async (request: RequestWithUser, response: Response, next: NextFunction) => {
  
         // TODO get the total information regarding cart
          
    }

  }
  
  export default CartController;
  