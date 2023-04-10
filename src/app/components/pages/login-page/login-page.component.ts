import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit{

  constructor(private formBuilder: FormBuilder){}
loginForm!: FormGroup;
isSubmitted = false;

ngOnInit(): void {
  this.loginForm = this.formBuilder.group({
    email: ['', [Validators.required, Validators.email]],
    passWord: ['', Validators.required]
  });
  
}
get fc(){
  return this.loginForm.controls;
}

submit(){
  this.isSubmitted == true;
  if(this.loginForm.invalid) return;
  alert (` email: ${this.fc.email.value},
  passWord: ${this.fc.passWord.value}`)
}
}
