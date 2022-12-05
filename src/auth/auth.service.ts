import { Injectable } from "@nestjs/common";

@Injectable({})
export class AuthService {
  signup() {
    return ({
      message: "I'm am signup",
    });
  }
  
  signin() {
    return({
      message: "I'm am signin",
    });
  }
}