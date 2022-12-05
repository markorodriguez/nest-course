import { Controller } from "@nestjs/common";
import { Post } from "@nestjs/common/decorators";
import { AuthService } from "./auth.service";

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}
    
    @Post('signup')
    signup() {
      return this.authService.signup();
    }

    @Post('signin')
    signin() {
      return this.authService.signin();
    }
  
}

// TODO: https://youtu.be/GHTA143_b-s?t=1561