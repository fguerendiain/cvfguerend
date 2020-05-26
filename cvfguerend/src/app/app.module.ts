// MODULES
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

// COMPONENT
import { AppComponent } from './app.component';
import { OwnerNameComponent } from './views/main/owner-name/owner-name.component';
import { OwnerTitleComponent } from './views/main/owner-title/owner-title.component';
import { MailFormComponent } from './views/contact/mail-form/mail-form.component';

// ANGULAR MATERIA
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

// SERVICE
import {EmailSenderService} from './email-sender.service';
import { OwnerBioComponent } from './views/main/owner-bio/owner-bio.component';
import { OwnerContactComponent } from './views/main/owner-contact/owner-contact.component';
import { EducationComponent } from './views/resume/education/education.component';
import { JobsComponent } from './views/resume/jobs/jobs.component';
import { KnowledgeComponent } from './views/resume/knowledge/knowledge.component';
import { OwnerAvatarComponent } from './views/main/owner-avatar/owner-avatar.component';


@NgModule({
  declarations: [
    AppComponent,
    OwnerNameComponent,
    OwnerTitleComponent,
    MailFormComponent,
    OwnerBioComponent,
    OwnerContactComponent,
    EducationComponent,
    JobsComponent,
    KnowledgeComponent,
    OwnerAvatarComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,

    MatInputModule,
    MatButtonModule,

    FormsModule,
    ReactiveFormsModule
  ],
  providers: [EmailSenderService],
  bootstrap: [AppComponent]
})
export class AppModule { }
