import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray, NonNullableFormBuilder } from '@angular/forms';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent {

  registrationForm: FormGroup = this.nonNullableForm.group({
    username: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]],
    confirmPassword: ['', Validators.required],
    interests: this.formBuilder.array([])
  });;

  get interests() {
    return this.registrationForm.get('interests') as FormArray;
  }

  get usernameErrors() {
    return this.registrationForm.get('username')?.errors
  }

  get emailErrors() {
    return this.registrationForm.get('email')?.errors
  }

  get passwordErrors() {
    return this.registrationForm.get('email')?.errors
  }

  get confirmPasswordErrors() {
    return this.registrationForm.get('confirmPassword')?.errors
  }

  constructor(private formBuilder: FormBuilder, private nonNullableForm: NonNullableFormBuilder) { }

  addInterest() {
    this.interests.push(this.formBuilder.control('', Validators.required));
  }

  removeInterest(index: number) {
    this.interests.removeAt(index);
  }

  onSubmit() {
    if (this.registrationForm.valid) {
      console.log(this.registrationForm.value);
      // Invia i dati al backend per la registrazione dell'utente
    }
  }
}
