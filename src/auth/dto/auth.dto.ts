import { IsEmail } from "class-validator";
import { IsNotEmpty } from "class-validator/types/decorator/decorators";

export class AuthDto {
  @IsEmail()
  email: string;
  @IsNotEmpty()
  password: string;
}