import { Component, OnInit, Input, SimpleChanges } from '@angular/core';
import * as cvData from '../../../../assets/cvData.json';
import * as sysData from '../../../../assets/sysData.json';
import * as Utils from '../../../Utils';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {

  @Input() selectedLang;

  educationList:{
    since: string,
    until: string,
    establishment: string,
    degree: string
  }[] = []

  educationTitleLable:string;
  sinceLable: string;
  untilLable: string;
  establishmentLable: string;
  degreeLable: string;


  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges) {
    this.getEducationCvData();
    this.getEducationSysData();
  }

  getEducationSysData(){
    this.educationTitleLable = Utils.getTranslation(this.selectedLang,sysData.education.title);
    this.sinceLable = Utils.getTranslation(this.selectedLang,sysData.education.sinceLable);
    this.untilLable = Utils.getTranslation(this.selectedLang,sysData.education.untilLable);
    this.establishmentLable = Utils.getTranslation(this.selectedLang,sysData.education.establishmentLable);
    this.degreeLable = Utils.getTranslation(this.selectedLang,sysData.education.degreeLable);
  }

  getEducationCvData(){
    this.educationList = [];
    cvData.resume.education.forEach(edu => {
      this.educationList.push({
        since: Utils.getTranslation(this.selectedLang,edu.since),
        until: Utils.getTranslation(this.selectedLang,edu.until),
        establishment: Utils.getTranslation(this.selectedLang, edu.establishment),
        degree: Utils.getTranslation(this.selectedLang, edu.degree)
      })
    });
  }
}
