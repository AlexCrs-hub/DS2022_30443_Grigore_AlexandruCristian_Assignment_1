import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { EnergyConsumptionController } from "src/controllers/energyconsumption.controller";
import { EnergyConsumption } from "src/entities/EnergyConsumption/energyconsumption";
import { EnergyConsumptionService } from "src/services/energy/energy.consumption.service";

@Module({
    imports: [TypeOrmModule.forFeature([EnergyConsumption])],
    providers: [EnergyConsumptionService],
    controllers: [EnergyConsumptionController],
    exports: [TypeOrmModule]
})

export class EnergyConsumptionModule {}