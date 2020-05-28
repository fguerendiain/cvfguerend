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
  selectedLang:string = 'en';
  navBarOffSetTop:number;
  sections:any;
  navBarComp:any;
  navBarLinks:any;

  constructor(@Inject(DOCUMENT) document){
  }

  ngOnInit(){
    this.navBarOffSetTop =  document.getElementById('navBar').offsetTop;
  }

  ngAfterViewInit(){
    this.setDomValues();
  }

  ngAfterViewChecked(){
    this.setDomValues();
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

  @HostListener('window:scroll',['$event'])
  onWindowScroll(e){
    if(window.pageYOffset >= this.navBarOffSetTop){
      let element = document.getElementById('navBar');
      element.classList.add('sticky');
    }else{
      let element = document.getElementById('navBar');
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


