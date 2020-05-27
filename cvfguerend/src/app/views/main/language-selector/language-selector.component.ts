import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import * as Data from '../../../../assets/sysData.json';

@Component({
  selector: 'app-language-selector',
  templateUrl: './language-selector.component.html',
  styleUrls: ['./language-selector.component.css']
})
export class LanguageSelectorComponent implements OnInit {
  @Output() selectedLang: EventEmitter<any> = new EventEmitter<any>();
  
  constructor() { 
  }

  languageList:string[];

  ngOnInit(): void {
    this.languageList = Data["language-selector"];
  }

  onClickChangeLanguage(event){
    var target = event.target || event.srcElement || event.currentTarget;
    var idAttr = target.attributes;
    var value = idAttr.alt.value;
    this.sendValue(value);
  }

  public sendValue(value: any): void{
    this.selectedLang.emit(value);
    
  }

  imgURLBuilder(prop){
    return "./../../../assets/ico/"+prop+"Ico.jpg"
  }
}
