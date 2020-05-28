import { Component, OnInit, SimpleChanges, Input, ElementRef } from '@angular/core';
import * as Data from '../../../assets/sysData.json';
import * as Utils from '../../Utils';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  @Input() selectedLang;


  navBarItemsList:{}[];

  constructor() {

   }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges){
    this.buildNavBarItemsArray();
  }

  buildNavBarItemsArray(): void{
    this.navBarItemsList = [];
    Object.keys(Data.navbar).forEach(prop =>{
      this.navBarItemsList.push(
        {
          item: prop,
          value: Utils.getTranslation(this.selectedLang,(Data.navbar)[prop])
        }
      )
    });
  }
}
