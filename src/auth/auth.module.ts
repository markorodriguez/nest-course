import { Module } from "@nestjs/common";
import { AuthController } from "./auth.controller";
import { AuthService } from "./auth.service";

@Module({
  controllers: [AuthController],
  imports: [AuthModule],
  providers: [AuthService],
})
export class AuthModule {
  
}