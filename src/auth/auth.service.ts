import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";
import { AuthDto } from "./dto";
import * as argon from "argon2"

@Injectable()
export class AuthService {
  constructor(private prisma: PrismaService){
    
  }
  async signup(dto: AuthDto) {
    const { email, password } = dto;
    // Hash password
    const hashedPassword = await argon.hash(password);
    // Save new user to database
    const user = await this.prisma.user.create({
      data: {
        email,
        hash: hashedPassword,
      }
    });
    // Return user
    delete user.hash;
    return user;
  }
  
  signin() {
    return({
      message: "I'm am signin",
    });
  }
}