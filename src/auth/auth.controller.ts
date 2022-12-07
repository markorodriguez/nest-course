import { Controller } from "@nestjs/common";
import { Post, Req, Res } from "@nestjs/common/decorators";
import { Request, Response } from "express";
import { AuthService } from "./auth.service";

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}
    
    @Post('signup')
    signup(@Req() req: Request, @Res() res: Response) {
      return this.authService.signup();
    }

    @Post('signin')
    signin() {
      return this.authService.signin();
    }
  
}
