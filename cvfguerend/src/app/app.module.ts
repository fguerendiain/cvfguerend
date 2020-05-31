// MODULES
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// COMPONENT
import { AppComponent } from './app.component';
import { OwnerNameComponent } from './views/main/owner-name/owner-name.component';
import { OwnerTitleComponent } from './views/main/owner-title/owner-title.component';
import { MailFormComponent } from './views/contact/mail-form/mail-form.component';
import { OwnerBioComponent } from './views/main/owner-bio/owner-bio.component';
import { OwnerContactComponent } from './views/main/owner-contact/owner-contact.component';
import { EducationComponent } from './views/resume/education/education.component';
import { JobsComponent } from './views/resume/jobs/jobs.component';
import { KnowledgeComponent } from './views/resume/knowledge/knowledge.component';
import { OwnerAvatarComponent } from './views/main/owner-avatar/owner-avatar.component';
import { LanguageSelectorComponent } from './views/main/language-selector/language-selector.component';
import { NavbarComponent } from './views/navbar/navbar.component';

// ANGULAR MATERIAL
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';


// SERVICE
import { EmailSenderService } from './email-sender.service';


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
    OwnerAvatarComponent,
    LanguageSelectorComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,

    MatInputModule,
    MatButtonModule,
    MatProgressSpinnerModule,

    FormsModule,
    ReactiveFormsModule
  ],
  providers: [EmailSenderService],
  bootstrap: [AppComponent]
})
export class AppModule { }
