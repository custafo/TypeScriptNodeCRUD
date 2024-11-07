import { Customer } from "../Customer";

export interface CostumerRepository {
    save(customer: Customer): Promise<void>
    
}