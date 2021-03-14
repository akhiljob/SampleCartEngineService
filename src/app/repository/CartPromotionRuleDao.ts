import { CartPromotionRule } from "../entity/CartPromotionRule";
import { PromotionRule } from "../entity/PromotionRule";


class CartPromotionRuleDao {
    public getAll(searchParam: any, limit: number, offset: number): Promise<any> {
        throw new Error("Method not implemented.");
    }

    public async getByName(name: string): Promise<any> {
        throw new Error("Method not implemented.");
    }
   
    public create(data: any): Promise<any> {
        return CartPromotionRule.save(data);
    }

    public update(id: any, data: any): Promise<any> {
        throw new Error("Method not implemented.");
    }
   
}
const cartPromotionRuleDao = new CartPromotionRuleDao();

export default cartPromotionRuleDao;
