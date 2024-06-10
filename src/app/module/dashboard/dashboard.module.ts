import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { HavenHeaderComponent } from './component/haven-header/haven-header.component';
import { NewsBlogComponent } from './component/news-blog/news-blog.component';
import { MainAdviserComponent } from './component/main-adviser/main-adviser.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ContactUsComponent } from './component/contact-us/contact-us.component';
import { FooterComponent } from './component/footer/footer.component';
import { FaIconLibrary, FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faFacebookF } from '@fortawesome/free-brands-svg-icons';
import { faComments, faEnvelope, faHouse, faLocationPin, faPhone } from '@fortawesome/free-solid-svg-icons';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    DashboardComponent,
    HavenHeaderComponent,
    NewsBlogComponent,
    MainAdviserComponent,
    ContactUsComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    NgbModule,
    FontAwesomeModule,
    ReactiveFormsModule
  ]
})
export class DashboardModule {
  constructor(library: FaIconLibrary) {
    library.addIcons(faFacebookF, faLocationPin,faComments, faHouse,faPhone, faEnvelope,);
  }
}
