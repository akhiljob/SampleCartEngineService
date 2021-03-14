import { PromotionRule } from "../entity/PromotionRule";


class PromotionRuleDao {
    public getAll(searchParam: any, limit: number, offset: number): Promise<any> {
        throw new Error("Method not implemented.");
    }
    /**
     * Get Promotion by Promotion Name
     */
    public async getByName(name: string): Promise<any> {
        throw new Error("Method not implemented.");
    }
   
    public create(data: PromotionRule): Promise<any> {
        throw new Error("Method not implemented.");
    }

    public update(id: any, data: PromotionRule): Promise<any> {
        throw new Error("Method not implemented.");
    }
   
}

export default PromotionRuleDao;
