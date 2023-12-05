import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class VerifyCodeService {

  //Verification code used to verify the user
  private veriCode = "";
  private pattern = "ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890";

  constructor() { }

  setVerificationCode(): void{

    let code: string = "";
    for(let i = 1; i <= 6; i++) {

      let randomNumber = Math.floor(Math.random() * this.pattern.length);
      code += this.pattern[randomNumber];
      
      this.veriCode = code;
    }
  }

  getVerificationCode(): string{
    return this.veriCode;
  }
}
