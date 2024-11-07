import { Customer } from "../../../model/Customer"
import { CostumerRepository } from "../../../model/repository/CostumerRepository"

export class CustomerRepositoryInMemory implements CostumerRepository {

    private customerCollection: Array<Customer> = []

    async save(customer: Customer): Promise<void> {
        this.customerCollection.push(customer)
    }
}