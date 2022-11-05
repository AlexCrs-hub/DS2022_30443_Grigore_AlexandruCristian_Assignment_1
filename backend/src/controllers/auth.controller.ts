import { Body, Controller, Get, Post } from "@nestjs/common";
import { AuthService } from "src/services/auth/auth.service";


@Controller('auth')
export class AuthController{
    constructor(private authService: AuthService) {}
    @Post('login')
    async login(@Body() req) {
        return this.authService.login(req.name, req.password);
    }
}