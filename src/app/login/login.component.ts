import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  title = 'Contract';
  subtitle = 'Portal';
	welcome = 'Welcome back';

	 registerForm: FormGroup;
    submitted = false;

	constructor(private formBuilder: FormBuilder, private router: Router) { }
 
    ngOnInit() {
        this.registerForm = this.formBuilder.group({
            email: ['', [Validators.required, Validators.email]],
            password: ['', [Validators.required, Validators.minLength(6)]]
        });
    }
 
    onSubmit() {
        this.submitted = true;
 
        // stop the process here if form is invalid
        if (this.registerForm.invalid) {
            return;
        }
 	
 		this.router.navigate(['/dashboard']); 
    }

}
