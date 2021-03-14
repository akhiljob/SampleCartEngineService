import { TierPriceRule } from "../entity/TierPriceRule";


class TierPriceRuleDao {
    public getAll(searchParam: any, limit: number, offset: number): Promise<any> {
        throw new Error("Method not implemented.");
    }

    public async getByName(name: string): Promise<any> {
        throw new Error("Method not implemented.");
    }
   
    public create(data: any): Promise<any> {
        return TierPriceRule.save(data);
    }

    public update(id: any, data: any): Promise<any> {
        throw new Error("Method not implemented.");
    }
   
}
const tierPriceRuleDao = new TierPriceRuleDao();
export default tierPriceRuleDao;
