import { Component, OnInit, Input, SimpleChanges } from '@angular/core';
import * as cvData from '../../../../assets/cvData.json';
import * as sysData from '../../../../assets/sysData.json';
import * as Utils from '../../../Utils';

@Component({
  selector: 'app-knowledge',
  templateUrl: './knowledge.component.html',
  styleUrls: ['./knowledge.component.css']
})
export class KnowledgeComponent implements OnInit {
  @Input() selectedLang;

  knowledgeTitleLable: string;

  courseLables:{
    title: string,
    placeLable: string,
    nameLable: string,
    descriptionLable: string
  };

  languagesLables:{
    title: string,
    languageLable: string,
    oralLable: string,
    listenedLable: string,
    readLable: string,
    writtenLable: string
  };

  technologiesLable:{
    title: string
  };


  coursesList:{
      place: string,
      name: string,
      Description: string
    }[];

  languagesList:{
    language: string,
    oral: string,
    listened: string,
    read: string,
    written: string
  }[];

  technologiesList: string[];
  

  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges) {
    this.getKnowledgeSysData();
    this.getCoursesCvData();
    this.getLanguagesCvData();
    this.getTechnologiesCvData();
  }

  getKnowledgeSysData(){
    this.knowledgeTitleLable = Utils.getTranslation(this.selectedLang,sysData.knowledge.title);

    this.courseLables = {
      title: Utils.getTranslation(this.selectedLang,sysData.knowledge.course.title),
      placeLable: Utils.getTranslation(this.selectedLang,sysData.knowledge.course.placeLable),
      nameLable: Utils.getTranslation(this.selectedLang,sysData.knowledge.course.nameLable),
      descriptionLable: Utils.getTranslation(this.selectedLang,sysData.knowledge.course.descriptionLable)
    }
    this.languagesLables = {
      title: Utils.getTranslation(this.selectedLang,sysData.knowledge.languages.title),
      languageLable: Utils.getTranslation(this.selectedLang,sysData.knowledge.languages.languageLable),
      oralLable: Utils.getTranslation(this.selectedLang,sysData.knowledge.languages.oralLable),
      listenedLable: Utils.getTranslation(this.selectedLang,sysData.knowledge.languages.listenedLable),
      readLable: Utils.getTranslation(this.selectedLang,sysData.knowledge.languages.readLable),
      writtenLable: Utils.getTranslation(this.selectedLang,sysData.knowledge.languages.writtenLable)
    }
    this.technologiesLable = {
      title: Utils.getTranslation(this.selectedLang,sysData.knowledge.technologiesLable.title)
    }
  }

  getCoursesCvData(){
    this.coursesList = [];
    cvData.resume.knowledge.courses.forEach(cur => {
      this.coursesList.push({
        place: Utils.getTranslation(this.selectedLang, cur.place),
        name: Utils.getTranslation(this.selectedLang, cur.name),
        Description: Utils.getTranslation(this.selectedLang, cur.Description),
      })
    });
  }

  getLanguagesCvData(){
    this.languagesList = [];
    cvData.resume.knowledge.languages.forEach(lang => {
      this.languagesList.push({
        language: Utils.getTranslation(this.selectedLang, lang.language),
        oral: Utils.getTranslation(this.selectedLang, lang.oral),
        listened: Utils.getTranslation(this.selectedLang, lang.listened),
        read: Utils.getTranslation(this.selectedLang, lang.read),
        written: Utils.getTranslation(this.selectedLang, lang.written)
      })
    });
  }

  getTechnologiesCvData(){
    this.technologiesList = [];
    cvData.resume.knowledge.technologies.forEach(tec => {
      this.technologiesList.push(tec);
      })
    };

}


/*

*/
