import {Component, Input, SimpleChanges} from '@angular/core';
import {FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';
import * as Data from '../../../../assets/sysData.json';
import * as Utils from '../../../Utils';
import {EmailSenderService} from '../../../email-sender.service';

const SYSCONFIG = Data.mailForm;

/** Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

/** @title Input with a custom ErrorStateMatcher */
@Component({
  selector: 'app-mail-form',
  templateUrl: './mail-form.component.html',
  styleUrls: ['./mail-form.component.css']
})
export class MailFormComponent {
  @Input() selectedLang;

  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);

  summaryFormControl = new FormControl('', [
    Validators.required,
  ]);

  messageFormControl = new FormControl('', [
    Validators.required,
  ]);


  matcher = new MyErrorStateMatcher();

  lblContactTitle:string;
  lblEmail: string;
  placeHolderEmail: string;
  tooltipEmail1: string;
  tooltipEmail2: string;
  errEmail: string;

  lblSummary: string;
  placeHolderSummary: string;

  lblMessage: string;
  placeHolderMessage: string;

  btnSubmit: string;

  response = '';

  mailInput = '';
  summaryInput = '';
  massageTextArea = '';

  constructor(private emailService: EmailSenderService){

  }

  // tslint:disable-next-line: use-lifecycle-interface
  ngOnInit(): void {
    this.hideSubmit();
  }

  // tslint:disable-next-line: use-lifecycle-interface
  ngOnChanges(changes: SimpleChanges) {
    this.lblContactTitle = Utils.getTranslation(this.selectedLang,SYSCONFIG.lblContactTitle);
    this.lblEmail = Utils.getTranslation(this.selectedLang, SYSCONFIG.lblEmail);
    this.placeHolderEmail = Utils.getTranslation(this.selectedLang, SYSCONFIG.placeHolderEmail);
    this.tooltipEmail1 = Utils.getTranslation(this.selectedLang, SYSCONFIG.tooltipEmail1);
    this.tooltipEmail2 = Utils.getTranslation(this.selectedLang, SYSCONFIG.tooltipEmail2);
    this.errEmail = Utils.getTranslation(this.selectedLang, SYSCONFIG.errEmail);

    this.lblSummary = Utils.getTranslation(this.selectedLang, SYSCONFIG.lblSummary);
    this.placeHolderSummary = Utils.getTranslation(this.selectedLang, SYSCONFIG.placeHolderSummary);

    this.lblMessage = Utils.getTranslation(this.selectedLang, SYSCONFIG.lblMessage);
    this.placeHolderMessage = Utils.getTranslation(this.selectedLang, SYSCONFIG.placeHolderMessage);

    this.btnSubmit = Utils.getTranslation(this.selectedLang, SYSCONFIG.btnSubmit);
  }

  hideSubmit(): boolean{
    if (
      this.mailInput === ''
      || this.summaryInput === ''
      || this.massageTextArea === ''
      ){
        return false;
      }else{
        return true;
      }
  }

  submitForm(){
    const mailServiceBody = {
      subject: this.summaryFormControl.value,
      body: this.messageFormControl.value,
      email: this.emailFormControl.value
    };
    this.emailService.sendMessage(mailServiceBody).subscribe(data => {
      this.response = data.toString();
    });
  }

}
