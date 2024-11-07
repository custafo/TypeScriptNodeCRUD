import { Request, Response, Router } from 'express'
import { CustomerCreate } from './controller/CustomerCreate'
import { CustomerRepositoryInMemory } from './infra/repository/memory/CustomerRepositoryInMemory'

const router = Router()

const repository = new CustomerRepositoryInMemory()
const CustomerCreate = new CustomerCreate(repository)

router.post('/customer', (request: Request, response: Response) => {
    response.status(201).send()
})