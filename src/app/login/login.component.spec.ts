import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginComponent } from './login.component';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LoginComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should create login form with email and password controls', () => {
    expect(component.loginForm.contains('email')).toBeTruthy();
    expect(component.loginForm.contains('password')).toBeTruthy();
  });

  it('should set email and password controls to invalid initially', () => {
    const emailControl = component.loginForm.get('email');
    const passwordControl = component.loginForm.get('password');

    expect(emailControl?.invalid).toBeTruthy();
    expect(passwordControl?.invalid).toBeTruthy();
  });

  it('should set email control to valid on entering a valid email', () => {
    const emailControl = component.loginForm.get('email');
    emailControl?.setValue('test@example.com');

    expect(emailControl?.valid).toBeTruthy();
  });
  it('should set email control to invalid with required error on empty email', () => {
    const emailControl = component.loginForm.get('email');
    emailControl?.setValue('');
    emailControl?.markAsTouched(); 
    fixture.detectChanges(); 

    const emailError = emailControl?.errors?.['required'];
    expect(emailError).toBeTruthy();
  });
  it('should set email control to invalid with email error on invalid email', () => {
    const emailControl = component.loginForm.get('email');
    emailControl?.setValue('invalid_email');
    emailControl?.markAsTouched(); // Simulate user interaction
    fixture.detectChanges(); // Update UI

    const emailError = emailControl?.errors?.['email'];
    expect(emailError).toBeTruthy();
  });

  it('should set password control to valid on entering a password with at least 6 characters', () => {
    const passwordControl = component.loginForm.get('password');
    passwordControl?.setValue('strong_password');

    expect(passwordControl?.valid).toBeTruthy();
  });

  it('should set password control to invalid with required error on empty password', () => {
    const passwordControl = component.loginForm.get('password');
    passwordControl?.setValue('');
    passwordControl?.markAsTouched(); // Simulate user interaction
    fixture.detectChanges(); // Update UI

    const passwordError = passwordControl?.errors?['required'];
    expect(passwordError).toBeTruthy();
  });

  it('should set password control to invalid with minlength error on password less than 6 characters', () => {
    const passwordControl = component.loginForm.get('password');
    passwordControl?.setValue('weak');
    passwordControl?.markAsTouched(); // Simulate user interaction
    fixture.detectChanges(); // Update UI

    const passwordError = passwordControl?.errors?.['minlength'];
    expect(passwordError).toBeTruthy();
  });

  
});
