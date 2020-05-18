//MODULES
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

//COMPONENT
import { AppComponent } from './app.component';
import { OwnerNameComponent } from './views/main/owner-name/owner-name.component';
import { OwnerTitleComponent } from './views/main/owner-title/owner-title.component';
import { MailFormComponent } from './views/contact/mail-form/mail-form.component'
import {
  MatInputModule
} from '@angular/material/input';

//SERVICE
import {EmailSenderService} from './email-sender.service'


@NgModule({
  declarations: [
    AppComponent,
    OwnerNameComponent,
    OwnerTitleComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatInputModule,
    MailFormComponent,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [EmailSenderService],
  bootstrap: [AppComponent]
})
export class AppModule { }
