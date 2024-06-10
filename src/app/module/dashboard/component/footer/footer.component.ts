import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subject, Subscription, switchMap } from 'rxjs';
import { DashboardService } from '../../service/dashboard.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent implements OnInit, OnDestroy {
  form: FormGroup = new FormGroup({});
  isSubmitted: boolean = false;
  signUpStream$: Subject<Event> = new Subject<Event>();
  signUpSubscription: Subscription = new Subscription();
  constructor(private formBuilder: FormBuilder, private dashboardService: DashboardService) {
  }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      fullName: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.pattern('^[^@]+@[^@]+\.[^@]+$')]],
    });
    this.signUpSubscription = this.signUpStream$.pipe(
      switchMap((event) => {
        const queryDetails  = this.form.value;
        console.log(event);
        return this.dashboardService.signupService(queryDetails)
      }),
    ).subscribe((data)=>{
      console.log(data);
    })
  }
  ngOnDestroy(): void {
    this.signUpSubscription.unsubscribe();
  }
  checkForValidity(formControlName: string) {
    return (this.form.controls[formControlName].dirty || this.form.controls[formControlName].touched) && this.form.controls[formControlName].errors
  }

  onSubmit(event:Event) {
    if (this.form.valid) {
      this.isSubmitted = true;
      this.signUpStream$.next(event);
    } else {
      this.form.controls['fullName'].markAsTouched();
      this.form.controls['email'].markAsTouched();
      this.form.updateValueAndValidity()
    }
  }

  resetForm() {
    this.isSubmitted = false;
    this.form.reset({ fullName: '', email: '' });
  }
}
