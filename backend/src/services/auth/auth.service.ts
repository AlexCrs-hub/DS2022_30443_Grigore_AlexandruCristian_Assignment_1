import { Injectable } from "@nestjs/common";
import { UsersService } from "../user/user.service";

@Injectable()
export class AuthService {
    constructor(private userService: UsersService) {}

    async validateUser(name: string, password: string): Promise<any> {
      const user = await this.userService.findByName(name);
      let isMatching = false;

      if(password === user.password){
        isMatching = true;
      }
      
      if (user && isMatching) {
        const { ...result } = user;
        return result;
      }
      
      return null;
    }
    async login(name: string, password: string) {
      const user = await this.validateUser(name,password);
      //const id= await this.userService.findIdByName(email);
      //const payload = { name:user.name,isAdmin:user.isAdmin,id: id};
      return user;
    }
}