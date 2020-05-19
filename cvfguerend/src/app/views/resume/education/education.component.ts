import { Component, OnInit, Input, SimpleChanges } from '@angular/core';
import * as Data from '../../../../assets/cvData.json';
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


  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges) {
    this.getEducationData();
  }

  getEducationData(){
    this.educationList = [];
    Data.resume.education.forEach(edu => {
      this.educationList.push({
        since:edu.since,
        until:edu.until,
        establishment: Utils.getTranslation(this.selectedLang, edu.establishment),
        degree: Utils.getTranslation(this.selectedLang, edu.degree)
      })
    });
  }


}


/*
   "resume":{
      "education":[{
        "since":"02.2016",
        "until":"12.2018",
        "establishment":[
          {"en":"Universidad Tecnológica Nacional. Facultad Regional Avellaneda."},
          {"es":"Universidad Tecnológica Nacional. Facultad Regional Avellaneda."}
        ],
        "degree":[
          {"en":"Senior technician in programing"},
          {"es":"Tecnicatura Superior en programacion"}
        ]*/