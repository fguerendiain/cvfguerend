import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'cvfguerend';

  selectedLang: string = 'en';

  onClickCambiarIdioma(){
    if(this.selectedLang == 'en'){
      this.selectedLang = 'es';
    }else if(this.selectedLang == 'es'){
      this.selectedLang = 'ch';
    }else{
      this.selectedLang = 'en';
    }
  }


}
