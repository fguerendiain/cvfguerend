import { Component, Inject, HostListener, ViewChild, SimpleChanges } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { NavbarComponent } from './views/navbar/navbar.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  @ViewChild(NavbarComponent) navBar: NavbarComponent;

  title = 'cvfguerend';
  selectedLang: string;
  navBarOffSetTop: number;
  sections: any;
  navBarComp: any;
  navBarLinks: any;
  languageOnNavBar = false;
  languageOnNavBarNot = false;

  constructor(@Inject(DOCUMENT) document){
  }

  ngOnInit(){
    this.getBrowserLang();
    this.navBarOffSetTop =  document.getElementById('navBar').offsetTop;
  }

  ngAfterViewInit(){
    this.setDomValues();
  }

  ngAfterViewChecked(){
    this.setDomValues();
  }

  getBrowserLang():void{
    if(navigator.language == "es-ES"){
      this.selectedLang = 'es';
    }else{
      this.selectedLang = 'en';
    }
  }

  onResize(event) {
    event.target.innerWidth;
  }

  setDomValues(){
    let index = 0;
    this.sections = document.querySelectorAll('section')
    this.navBarComp = document.querySelectorAll(".navBar")
    this.sections.forEach(section => {
      this.navBarComp[index].querySelector(".navBar-link").href = '#'+section.id;
      index++;
    });
  }

  @HostListener('window:scroll', ['$event'])
  onWindowScroll(e){
    let element: Element;
    if(window.pageYOffset >= this.navBarOffSetTop){
      this.languageOnNavBar = true;
      this.languageOnNavBarNot = false;
      element = document.getElementById('navBar');
      element.classList.add('sticky');
    }else{
      this.languageOnNavBarNot = true;
      this.languageOnNavBar = false;
      element = document.getElementById('navBar');
      element.classList.remove('sticky');
    }
    this.sections.forEach((section, i) => {
      if(window.pageYOffset >= section.offsetTop -10){
        this.navBarComp.forEach(navBarLink => {
          navBarLink.classList.remove('change')
        });
        this.navBarComp[i].classList.add('change')
      }
    });
  }

  setLanguage(lang){
    this.selectedLang = lang;
  }

}


