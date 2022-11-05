import { InjectRepository } from "@nestjs/typeorm";
import { EnergyConsumption } from "src/entities/EnergyConsumption/energyconsumption";
import { Repository } from "typeorm";
import { v4 as uuidv4 } from 'uuid';


export class EnergyConsumptionService {
    constructor(
        @InjectRepository(EnergyConsumption)
        private enertgyConsumptionRepository: Repository<EnergyConsumption>
    ) {}

    async findAllById(id: uuidv4): Promise<EnergyConsumption[]> {
        return await this.enertgyConsumptionRepository.findBy({id: id});
    }
}   