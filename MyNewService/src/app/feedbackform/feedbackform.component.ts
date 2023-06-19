import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-feedbackform',
  templateUrl: './feedbackform.component.html',
  styleUrls: ['./feedbackform.component.css']
})
export class FeedbackformComponent {
  

constructor(private rf:FormBuilder){}
  UserRegistrationForm =this.rf.group({
    Name:['',Validators.required],
     Gender:['',Validators.required],
    Email:['',Validators.required],
    Mobile_No:['',Validators.required],
      rating:['',Validators.required],
    


   });
onSubmit(){
  console.warn(this.UserRegistrationForm.value);
  alert("registration Successful ")
}
showAlert(){
  alert('Registration Successful')
}

}
