import { Component } from '@angular/core';
import { FormGroup, Validators, FormArray, NonNullableFormBuilder } from '@angular/forms';

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
    confirmPassword: ['', [Validators.required, Validators.minLength(6)]],
    interests: this.nonNullableForm.array([])
  });

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

  get isUsernameTouchedOrInvalid() {
    return this.registrationForm.get('username')?.invalid && this.registrationForm.get('username')?.touched
  }

  get isEmailTouchedOrInvalid() {
    return this.registrationForm.get('email')?.invalid && this.registrationForm.get('email')?.touched
  }

  get isPasswordTouchedOrInvalid() {
    return this.registrationForm.get('password')?.invalid && this.registrationForm.get('password')?.touched
  }

  get isConfirmPasswordTouchedOrInvalid() {
    return this.registrationForm.get('confirmPassword')?.invalid && this.registrationForm.get('confirmPassword')?.touched
  }

  constructor(private readonly nonNullableForm: NonNullableFormBuilder) {}

  addInterest(): void {
    this.interests.push(this.nonNullableForm.control('', Validators.required));
  }

  removeInterest(index: number): void {
    this.interests.removeAt(index);
  }

  onSubmit(): void {
    if (!this.registrationForm.valid) return
    if(this.registrationForm.controls['password'].value !== this.registrationForm.controls['confirmPassword'].value) {
      return alert("le password inserite non corrispondono")
    }
    console.log('form ->', this.registrationForm.getRawValue())
  }
}
