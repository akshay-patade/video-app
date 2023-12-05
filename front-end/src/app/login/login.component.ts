import { Component, OnInit } from '@angular/core';
import { CommonModule } from "@angular/common";
import {FormGroup, FormControl, Validators, ReactiveFormsModule} from '@angular/forms';
import { VerifyCodeService } from './verify-code.service';

@Component({
  standalone: true,
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  imports: [ReactiveFormsModule, CommonModule]
})
export class LoginComponent{

  constructor(private verification: VerifyCodeService){}
  userEmail = new FormGroup({
    emailId: new FormControl('',[
      Validators.required,
      Validators.pattern("^[a-z0-9._%+-]+@[a-z]+\\.[a-z]{2,3}(\\.[a-z]{2,2})?$")
    ])
  });

  onSubmit(): void{
    if(this.userEmail.valid) {
      console.log("Form submiteed successfully");
      this.verification.setVerificationCode();
    }
    
}
}