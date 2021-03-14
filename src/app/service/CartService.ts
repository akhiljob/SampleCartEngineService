export interface CartService {
    createCart(cartDetails: any): Promise<any>;
    addToCart(itemDetails: any): Promise<any>;
    removeFromCart(itemDetails: any): Promise<any>;
    getCartTotals(cartDetails: any): Promise<any>;
}