import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { DeviceController } from "src/controllers/device.controller";
import { Device } from "src/entities/device/device";
import { DevicesService } from "src/services/device/device.service";
import { UserModule } from "./user.module";

@Module({
    imports: [TypeOrmModule.forFeature([Device]), UserModule],
    providers: [DevicesService],
    controllers: [DeviceController],
    exports: [TypeOrmModule]
})

export class DeviceModule {}