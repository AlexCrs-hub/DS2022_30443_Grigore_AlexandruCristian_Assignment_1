import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { EnergyConsumptionController } from "src/controllers/energyconsumption.controller";
import { Device } from "src/entities/device/device";
import { EnergyConsumption } from "src/entities/EnergyConsumption/energyconsumption";
import { EnergyConsumptionService } from "src/services/energy/energy.consumption.service";

@Module({
    imports: [TypeOrmModule.forFeature([EnergyConsumption]), TypeOrmModule.forFeature([Device])],
    providers: [EnergyConsumptionService],
    controllers: [EnergyConsumptionController],
    exports: [TypeOrmModule]
})

export class EnergyConsumptionModule {}