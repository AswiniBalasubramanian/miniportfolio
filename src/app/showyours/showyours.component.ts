import { Component, OnInit } from '@angular/core';
import { FormGroup ,FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-showyours',
  templateUrl: './showyours.component.html',
  styleUrls: ['./showyours.component.css']
})
export class ShowyoursComponent implements OnInit {
  submitted:boolean=false;
  
  constructor() { }
  registerform:any;
  get f(){return this.registerform.controls}

  ngOnInit(): void {
    this.registerform=new  FormGroup({
      "username":new FormControl(null,[Validators.required,Validators.pattern('[a-zA-Z]*')]),
      "phone":new FormControl(null,[Validators.required,Validators.pattern('[0-9]*')]),
      "email":new FormControl(null,[Validators.required,Validators.email]),
      "password":new FormControl(null,[Validators.required,Validators.pattern('[a-zA-Z0-9]*')])

      

    });
  }

  submitdata()

{

  
  console.log(this.registerform.value);

  if(this.registerform.value.username=='ishu' && this.registerform.value.phone=='321' && this.registerform.value.email=='a@g.com' && this.registerform.value.password=='ishu'){
    alert( `Thank You ${this.registerform.value.username} you registered successful and your photography is Awesome`);
    this .registerform.reset();
  }
else{
  alert(`invalid credentials`);
}

  



}



 get username(){return this.registerform.get('username');}
 get phone(){return this.registerform.get('phone');} 
 get email(){return this.registerform.get('email');} 
 get password(){return this.registerform.get('password');}
}

