import { Component, OnInit, Input, SimpleChanges } from '@angular/core';
import * as cvData from '../../../../assets/cvData.json';
import * as sysData from '../../../../assets/sysData.json';
import * as Utils from '../../../Utils';


@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.css']
})
export class JobsComponent implements OnInit {
  @Input() selectedLang;

  jobList:{
    since: string,
    until: string,
    enterprise: string,
    summary: string,
    description: string
  }[] = []

  jobTitleLable:string;
  sinceLable: string;
  untilLable: string;
  enterpriseLable: string;
  summaryLable: string;
  descriptionLable: string;

  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges) {
    this.getJobsSysData();
    this.getJobsCvData();
  }

  getJobsSysData(){
    this.jobTitleLable = Utils.getTranslation(this.selectedLang,sysData.jobs.title);
    this.sinceLable = Utils.getTranslation(this.selectedLang,sysData.jobs.sinceLable);
    this.untilLable = Utils.getTranslation(this.selectedLang,sysData.jobs.untilLable);
    this.enterpriseLable = Utils.getTranslation(this.selectedLang,sysData.jobs.enterpriseLable);
    this.summaryLable = Utils.getTranslation(this.selectedLang,sysData.jobs.summaryLable);
    this.descriptionLable = Utils.getTranslation(this.selectedLang,sysData.jobs.descriptionLable);
  }

  getJobsCvData(){
    this.jobList = [];
    cvData.resume.jobs.forEach(job => {
      this.jobList.push({
        since: Utils.getTranslation(this.selectedLang,job.since),
        until: Utils.getTranslation(this.selectedLang,job.until),
        enterprise: Utils.getTranslation(this.selectedLang, job.enterprise),
        summary: Utils.getTranslation(this.selectedLang, job.summary),
        description: Utils.getTranslation(this.selectedLang, job.description)
      })
    });
  }
}

