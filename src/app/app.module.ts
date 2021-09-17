import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PersonDataEntryComponent } from './person-data-entry/person-data-entry.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PersonDataDisplayComponent } from './person-data-display/person-data-display.component';
import { StudentEntryComponent } from './student-entry/student-entry.component';
import { StudentListingComponent } from './student-listing/student-listing.component';
import { StudentServiceService } from './student-service.service';
import {HttpClientModule} from '@angular/common/http';
import { ProperNamePipe } from './proper-name.pipe';
import { HighlightDirective } from './highlight.directive';
import { UnlessDirective } from './unless.directive';
import { DelayRenderingDirective } from './delay-rendering.directive';
import { MinilinkedinComponent } from './minilinkedin/minilinkedin.component';
import { MinilinkedinListComponent } from './minilinkedin-list/minilinkedin-list.component'
import { LinkedinServiceService } from './linkedin-service.service';
import { LinkedinProfileComponent } from './linkedin-profile/linkedin-profile.component';
import { ForbiddenNameValidatorDirective } from './forbidden-name-validator.directive';

@NgModule({
  declarations: [
    AppComponent,
    PersonDataEntryComponent,
    PersonDataDisplayComponent,
    StudentEntryComponent,
    StudentListingComponent,
    ProperNamePipe,
    HighlightDirective,
    UnlessDirective,
    DelayRenderingDirective,
    MinilinkedinComponent,
    MinilinkedinListComponent,
    LinkedinProfileComponent,
    ForbiddenNameValidatorDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [
    StudentServiceService,
    LinkedinServiceService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
