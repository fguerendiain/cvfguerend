import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import * as Data from '../../../../assets/cvData.json';
import * as Utils from '../../../Utils';

@Component({
  selector: 'app-owner-title',
  templateUrl: './owner-title.component.html',
  styleUrls: ['./owner-title.component.css']
})
export class OwnerTitleComponent implements OnChanges {

  @Input() selectedLang;

  title: string;

  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges) {
    this.title = Utils.getTranslation(this.selectedLang, Data.owner.title);
  }
}
