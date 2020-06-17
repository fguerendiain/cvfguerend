import { Component, OnInit, Output, EventEmitter, Input, SimpleChanges } from '@angular/core';
import * as Data from '../../../../assets/sysData.json';

@Component({
  selector: 'app-language-selector',
  templateUrl: './language-selector.component.html',
  styleUrls: ['./language-selector.component.css']
})
export class LanguageSelectorComponent implements OnInit {
  @Input() attachToNavBar: boolean;
  @Output() selectedLang: EventEmitter<any> = new EventEmitter<any>();

  constructor() {
  }

  languageList: string[];

  ngOnInit(): void {
    this.languageList = Data["language-selector"];
  }

  ngOnChanges(changes: SimpleChanges) {
    this.checkAttachedOnNavBar();
  }

  ngAfterViewChecked(){
    this.checkAttachedOnNavBar();
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

  imgURLBuilder(prop): string{
    return "./../../../assets/ico/"+prop+"Ico.jpg"
  }

  checkAttachedOnNavBar(): void{
    let element: Element;
    let buttons: NodeListOf<HTMLElement>;
    console.log(this.attachToNavBar);
    if (this.attachToNavBar){
      buttons = document.getElementsByName('btnImg');
      buttons.forEach((btn) => {
        btn.classList.remove('btnLanguage');
        btn.classList.add('stickBtnLanguage');
        });
      element = document.getElementById('contentDiv');
      element.classList.remove('selectorContentDiv');
      element.classList.add('stickSelectorContentDiv');

    }else{
      buttons = document.getElementsByName('btnImg');
      buttons.forEach((btn) => {
        btn.classList.add('btnLanguage');
        btn.classList.remove('stickBtnLanguage');
        });
      element = document.getElementById('contentDiv');
      element.classList.add('selectorContentDiv');
      element.classList.remove('stickSelectorContentDiv');

    }
  }


}
