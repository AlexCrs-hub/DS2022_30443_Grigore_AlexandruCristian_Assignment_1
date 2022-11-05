import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { UserDTO } from "src/entities/user/dto/userdto";
import { User } from "src/entities/user/user";
import { UsersService } from "src/services/user/user.service";
import { v4 as uuidv4 } from 'uuid';

@Controller('users')
export class UsersController {
    constructor (
        private userService: UsersService
    ) {}

    @Get()
    async findAll(): Promise<User[]>{
        return await this.userService.findAll();
    }

    @Post()
    async create(@Body() createUserDto: UserDTO){
        return await this.userService.create(createUserDto);
    }
    
    @Delete(':id')
    async delete(@Param('id') id: uuidv4){
        await this.userService.remove(id);
    }

    @Put(":id")
    async update(@Param('id') id : uuidv4, @Body() userDTO: Partial<UserDTO>){
        return await this.userService.update(id,userDTO);
    }

}   