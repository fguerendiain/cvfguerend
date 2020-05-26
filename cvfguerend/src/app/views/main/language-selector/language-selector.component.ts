import { Component, OnInit, Output, SimpleChanges } from '@angular/core';
import * as Data from '../../../../assets/cvData.json';
import * as Utils from '../../../Utils';

@Component({
  selector: 'app-language-selector',
  templateUrl: './language-selector.component.html',
  styleUrls: ['./language-selector.component.css']
})
export class LanguageSelectorComponent implements OnInit {
  @Output() selectedLang;

  constructor() { 
  }



  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges){
  }

  onClickChangeLanguage(){
    if (this.selectedLang === 'en'){
      this.selectedLang = 'es';
    }else{
      this.selectedLang = 'en';
    }
    console.log(this.selectedLang)
  }
}
