const APP_CONSTANTS = {
    apiPrefix: "/v1",
    params: "params",
    query: "query",
    body: "body",

    // Add the short name of the service below
    service: "cart-svc"
};

export enum PROMOTION_TYPES {
    TIER_PRICE_RULE= 'TIER_PRICE_RULE',
    CART_PROMOTION_RULE = 'CART_PROMOTION_RULE'
}

export default APP_CONSTANTS;
