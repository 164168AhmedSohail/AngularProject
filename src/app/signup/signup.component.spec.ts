import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignupComponent } from './signup.component';

describe('SignupComponent', () => {
  let component: SignupComponent;
  let fixture: ComponentFixture<SignupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SignupComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SignupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should create the signup component', () => {
    expect(component).toBeTruthy();
  });

  it('should create signup form with name, email, and password controls', () => {
    expect(component.signupForm.contains('name')).toBeTruthy();
    expect(component.signupForm.contains('email')).toBeTruthy();
    expect(component.signupForm.contains('password')).toBeTruthy();
  });

  it('should set name, email, and password controls to invalid initially', () => {
    const nameControl = component.signupForm.get('name');
    const emailControl = component.signupForm.get('email');
    const passwordControl = component.signupForm.get('password');

    expect(nameControl?.invalid).toBeTruthy();
    expect(emailControl?.invalid).toBeTruthy();
    expect(passwordControl?.invalid).toBeTruthy();
  });

  it('should set name control to valid on entering a name', () => {
    const nameControl = component.signupForm.get('name');
    nameControl?.setValue('John Doe');

    expect(nameControl?.valid).toBeTruthy();
  });

  it('should set name control to invalid with required error on empty name', () => {
    const nameControl = component.signupForm.get('name');
    nameControl?.setValue('');
    nameControl?.markAsTouched(); // Simulate user interaction
    fixture.detectChanges(); // Update UI

    const nameError = nameControl?.errors?.['required'];
    expect(nameError).toBeTruthy();
  });

  it('should set email control to valid on entering a valid email', () => {
    const emailControl = component.signupForm.get('email');
    emailControl?.setValue('test@example.com');

    expect(emailControl?.valid).toBeTruthy();
  });

  it('should set email control to invalid with required error on empty email', () => {
    const emailControl = component.signup?.get('email'); // Corrected typo
    emailControl.setValue('');
    emailControl.markAsTouched(); // Simulate user interaction
    fixture.detectChanges(); // Update UI

    const emailError = emailControl.errors.required;
    expect(emailError).toBeTruthy();
  });

  it('should set email control to invalid with email error on invalid email', () => {
    const emailControl = component.signupForm.get('email');
    emailControl?.setValue('invalid_email');
    emailControl?.markAsTouched(); // Simulate user interaction
    fixture.detectChanges(); // Update UI

    const emailError = emailControl?.errors?.['email'];
    expect(emailError).toBeTruthy();
  });

  it('should set password control to valid on entering a password with at least 6 characters', () => {
    const passwordControl = component.signupForm.get('password');
    passwordControl?.setValue('strong_password');

    expect(passwordControl?.valid).toBeTruthy();
  });

  it('should set password control to invalid with required error on empty password', () => {
    const passwordControl = component.signupForm.get('password');
    passwordControl?.setValue('');
    passwordControl?.markAsTouched(); // Simulate user interaction
    fixture.detectChanges(); // Update UI

    const passwordError = passwordControl?.errors?.['required'];
    expect(passwordError).toBeTruthy();
  });
});
