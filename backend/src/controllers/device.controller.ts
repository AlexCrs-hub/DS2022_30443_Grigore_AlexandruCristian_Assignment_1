import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { Device } from "src/entities/device/device";
import { DeviceDTO } from "src/entities/device/dto/devicedto";
import { DevicesService } from "src/services/device/device.service";
import { v4 as uuidv4 } from 'uuid';

@Controller('devices')
export class DeviceController {
    constructor(
        private deviceService: DevicesService,
    ) {}

    @Get()
    async findAll(): Promise<Device[]>{
        return await this.deviceService.findAll();
    }

    @Get(':id')
    async findById(@Param('id') id: uuidv4): Promise<Device[]>{
        return await this.deviceService.findById(id);
    }

    @Post()
    async create(@Body() device: DeviceDTO): Promise<Device> {
        return await this.deviceService.create(device);
    }

    @Delete(":id")
    async remove(@Param('id') id: uuidv4): Promise<void> {
        return await this.deviceService.remove(id);
    }

    @Put(":id")
    async update(@Param('id') id: uuidv4, @Body() device: Partial<DeviceDTO>){
        return await this.deviceService.update(id, device);
    }
}