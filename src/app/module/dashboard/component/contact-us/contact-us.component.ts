import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ValidatorFn, Validators } from '@angular/forms';
import { faFacebookF } from '@fortawesome/free-brands-svg-icons';
import { faComments, faEnvelope, faHouse, faLocationPin, faPhone } from '@fortawesome/free-solid-svg-icons';
import { Subject, Subscription, switchMap } from 'rxjs';
import { DashboardService } from '../../service/dashboard.service';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrl: './contact-us.component.scss'
})
export class ContactUsComponent implements OnInit, OnDestroy {
  public facebookIcon = faFacebookF;
  public locationIcon = faLocationPin;
  public commentIcon = faComments;
  public houseIcon = faHouse;
  public phoneIcon = faPhone;
  public emailIcon = faEnvelope;
  form: FormGroup = new FormGroup({});
  dayPlaceholder: string = 'Preferred Day';
  timePlaceholder: string = 'Preferred Time';
  isSubmitted: boolean = false;
  submitStream$ = new Subject<Event>();
  submitStreamSubscription:Subscription = new Subscription();
  constructor(private formBuilder: FormBuilder, private dashboardService: DashboardService) {

  }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      fullName: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.pattern('^[^@]+@[^@]+\.[^@]+$')]],
      contactNo: ['', [Validators.pattern('^[\\d +]+$')]],
      bookMeeting: ['', [Validators.required]],
      daySelect: ['', []],
      timeSelect: ['', []],
      message: ['', []],
    });
    this.submitStreamSubscription = this.submitStream$.pipe(
      switchMap((event) => {
        const queryDetails  = this.form.value;
        console.log(event);
        return this.dashboardService.contactService(queryDetails)
      }),
    ).subscribe((data)=>{
      console.log(data);
    })
  }
  
  ngOnDestroy(): void {
    this.submitStreamSubscription.unsubscribe();
  }

  checkForValidity(formControlName: string) {
    return (this.form.controls[formControlName].dirty || this.form.controls[formControlName].touched) && this.form.controls[formControlName].errors
  }

  checkBooking() {
    if (this.form.controls['bookMeeting'].value === 'yes') {
      this.addValidatorsAndUpdate('daySelect', Validators.required);
      this.addValidatorsAndUpdate('timeSelect', Validators.required);
      this.dayPlaceholder += '*';
      this.timePlaceholder += '*';
    } else {
      this.removeValidatorsAndUpdate('daySelect', Validators.required);
      this.removeValidatorsAndUpdate('timeSelect', Validators.required);
      this.dayPlaceholder = 'Preferred Day';
      this.timePlaceholder = 'Preferred Time';
    }
  }

  addValidatorsAndUpdate(control: string, validator: ValidatorFn) {
    this.form.controls[control].setValidators(validator);
    this.form.controls[control].markAsTouched();
    this.form.controls[control].updateValueAndValidity();
  }
  removeValidatorsAndUpdate(control: string, validator: ValidatorFn) {
    this.form.controls[control].removeValidators(validator);
    this.form.controls[control].markAsUntouched();
    this.form.controls[control].updateValueAndValidity();
  }

  onSubmit(event:Event) {
    if (this.form.valid) {
      this.isSubmitted = true;
      this.submitStream$.next(event);
    } else {
      this.form.controls['fullName'].markAsTouched();
      this.form.controls['email'].markAsTouched();
      this.form.controls['contactNo'].markAsTouched();
      this.form.controls['bookMeeting'].markAsTouched();
      this.form.updateValueAndValidity();
    }
  }

  resetForm() {
    this.form.reset({
      fullName: '',
      email: '',
      contactNo: '',
      bookMeeting: '',
      daySelect: '',
      timeSelect: '',
      message: '',
    });
    this.isSubmitted = false;
  }
}
