import {Component, Input, SimpleChanges} from '@angular/core';
import {FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';
import * as Data from '../../../../assets/sysData.json';
import * as Utils from '../../../Utils';
import {EmailSenderService} from '../../../email-sender.service';
import { empty } from 'rxjs';
import { isNullOrUndefined } from 'util';

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

  lblEmailLoadingTitle: string;
  btnAceptMessage: string;
  lblEmailProcessMsgOk:string;
  lblEmailProcessMsgErr:string;
  showEmailSendFail:boolean;

  lblSummary: string;
  placeHolderSummary: string;

  lblMessage: string;
  placeHolderMessage: string;

  btnSubmit: string;

  emailSendResp: boolean;
  emailSendRespErr:boolean;
  showEmailAlert:boolean;
  showEmailForm:boolean;
  showLoadingSpinner:boolean;

  response = '';

  mailInput = '';
  summaryInput = '';
  massageTextArea = '';

  constructor(private emailService: EmailSenderService){

  }

  // tslint:disable-next-line: use-lifecycle-interface
  ngOnInit(): void {
    this.showLoadingSpinner = false;
    this.showEmailAlert = false;
    this.showEmailForm = true;
    this.emailSendResp = null;
    this.emailSendRespErr = null;
    this.hideSubmit();
    this.showFormOrResponse();
  }

  // tslint:disable-next-line: use-lifecycle-interface
  ngOnChanges(changes: SimpleChanges) {
    this.lblContactTitle = Utils.getTranslation(this.selectedLang,SYSCONFIG.lblContactTitle);
    this.lblEmail = Utils.getTranslation(this.selectedLang, SYSCONFIG.lblEmail);
    this.placeHolderEmail = Utils.getTranslation(this.selectedLang, SYSCONFIG.placeHolderEmail);
    this.tooltipEmail1 = Utils.getTranslation(this.selectedLang, SYSCONFIG.tooltipEmail1);
    this.tooltipEmail2 = Utils.getTranslation(this.selectedLang, SYSCONFIG.tooltipEmail2);
    this.errEmail = Utils.getTranslation(this.selectedLang, SYSCONFIG.errEmail);

    this.lblEmailLoadingTitle = Utils.getTranslation(this.selectedLang, SYSCONFIG.lblEmailLoadingTitle);

    this.lblEmailProcessMsgOk = Utils.getTranslation(this.selectedLang, SYSCONFIG.lblEmailProcessMsgOk);
    this.lblEmailProcessMsgErr = Utils.getTranslation(this.selectedLang, SYSCONFIG.lblEmailProcessMsgErr);
    this.btnAceptMessage = Utils.getTranslation(this.selectedLang, SYSCONFIG.btnAceptMessage);

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

  submitForm():void{
    this.emailSendResp = null;
    this.emailSendRespErr = null;
    const mailServiceBody = {
      subject: this.summaryFormControl.value,
      body: this.messageFormControl.value,
      email: this.emailFormControl.value
    };
    this.clearForm();
    this.showLoadingSpinnerToggle(true);    
    this.emailService.sendMessage(mailServiceBody).subscribe(data => {
      console.log(data.emailSend);
        this.emailSendResp = data.emailSend;
        this.showLoadingSpinnerToggle(false);
      },
    error =>{
      console.log(error)
      this.emailSendRespErr = true;
      this.showLoadingSpinnerToggle(false);
    });
    }

    showLoadingSpinnerToggle(on:boolean):void{
      if(on){
        this.showLoadingSpinner = true;
        this.showEmailForm = false;
        this.showEmailAlert = false;
      }else{
        setTimeout(()=>{
          this.showLoadingSpinner = false;
          this.showFormOrResponse();
        }
        ,3000);
      }
    }

    showFormOrResponse():void{
      if(isNullOrUndefined(this.emailSendRespErr) || !this.emailSendRespErr){
        if(isNullOrUndefined(this.emailSendResp)){
          this.showEmailForm = true;
          this.showEmailAlert = false;
        }else{
          if(this.emailSendResp){
            this.showEmailForm = false;
            this.showEmailAlert = true;
            this.showEmailSendFail = false;
          }else{
            this.showEmailForm = false;
            this.showEmailAlert = true;
            this.showEmailSendFail = true;
          }
        }
      }else{
        this.showEmailForm = false;
        this.showEmailAlert = true;
        this.showEmailSendFail = true;
      }
    }


    aceptMessage():void{
      this.showEmailSendFail = false;
      this.emailSendResp = null;
      this.emailSendRespErr = null;
      this.showFormOrResponse();
    }

    clearForm():void{
      this.summaryFormControl.reset();
      this.messageFormControl.reset();
      this.emailFormControl.reset();
      this.mailInput = '';
      this.summaryInput ='';
      this.massageTextArea ='';
      this.hideSubmit();
    }


  }
