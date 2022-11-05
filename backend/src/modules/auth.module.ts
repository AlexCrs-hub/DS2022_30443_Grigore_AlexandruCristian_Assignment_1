import { Module } from "@nestjs/common";
import { UserModule } from "./user.module";
//import { PassportModule } from 'passport';
import { AuthService } from "src/services/auth/auth.service";
import { AuthController } from "src/controllers/auth.controller";
import { User } from "src/entities/user/user";
import { TypeOrmModule } from "@nestjs/typeorm";
@Module({
    imports: [
     UserModule
    ],
    providers: [AuthService],
    exports: [AuthService],
    controllers: [AuthController],
})

export class AuthnModule {}