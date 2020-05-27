import { Component, OnInit, Input, SimpleChanges } from '@angular/core';
import * as Data from '../../../../assets/cvData.json';

@Component({
  selector: 'app-owner-contact',
  templateUrl: './owner-contact.component.html',
  styleUrls: ['./owner-contact.component.css']
})
export class OwnerContactComponent implements OnInit {
  @Input() selectedLang;

  phoneIcon: string;
  phoneNumber: string;
  phoneMask: string;

  emailIcon: string;
  emailAddress: string;
  emailMask: string;

  links: {
    icon: string,
    site: string,
    url: string,
  }[] = [];


  constructor() { }

  ngOnInit(): void {
    this.getPhoneData();
    this.getEmailData();
    this.getLinksData();
  }

  getPhoneData(){
    this.phoneIcon = "../../assets/ico/" + Data.owner.contact.phone.icon;
    this.phoneNumber = 'tel:' + Data.owner.contact.phone.number;
    this.phoneMask = Data.owner.contact.phone.mask;
  }

  getEmailData(){
    this.emailIcon = "../../assets/ico/" + Data.owner.contact.email.icon;
    this.emailAddress = 'mailto:' + Data.owner.contact.email.address;
    this.emailMask = Data.owner.contact.email.address;
  }
  getLinksData(){
    Data.owner.contact.links.forEach(link => {
      this.links.push(
        {
          icon: "../../assets/ico/" + link.icon,
          site: link.site,
          url: link.url,
        }
        );
    });
  }



}


