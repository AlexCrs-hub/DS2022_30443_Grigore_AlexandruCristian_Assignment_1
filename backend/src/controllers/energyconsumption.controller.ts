import { Controller, Get, Param } from "@nestjs/common";
import { EnergyConsumption } from "src/entities/EnergyConsumption/energyconsumption";
import { EnergyConsumptionService } from "src/services/energy/energy.consumption.service";
import { v4 as uuidv4 } from 'uuid';

@Controller("energy")
export class EnergyConsumptionController {
    constructor(
        private energyService: EnergyConsumptionService
    ) {}

    @Get(":id")
    async findAllById(@Param('id') id: uuidv4): Promise<EnergyConsumption[]> {
        return await this.energyService.findAllById(id);
    }
}