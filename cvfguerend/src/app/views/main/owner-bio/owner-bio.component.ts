import { Component, OnInit, Input, SimpleChanges } from '@angular/core';
import * as Data from '../../../../assets/cvData.json';
import * as Utils from '../../../Utils';

@Component({
  selector: 'app-owner-bio',
  templateUrl: './owner-bio.component.html',
  styleUrls: ['./owner-bio.component.css']
})
export class OwnerBioComponent implements OnInit {

  @Input() selectedLang;

  bioTitle: string;
  bioText: string;

  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges) {
    this.bioTitle = Utils.getTranslation(this.selectedLang, Data.owner.bio.title);
    this.bioText = Utils.getTranslation(this.selectedLang, Data.owner.bio.text);
  }

}
