import { Component, OnInit, SimpleChange, SimpleChanges, Input } from '@angular/core';
import * as Data from '../../../../assets/cvData.json';
import * as Utils from '../../../Utils';

@Component({
  selector: 'app-owner-avatar',
  templateUrl: './owner-avatar.component.html',
  styleUrls: ['./owner-avatar.component.css']
})
export class OwnerAvatarComponent implements OnInit {

  ownerName: string;

  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges){
    this.ownerName = Data.owner.firstName + ' ' + Data.owner.lastName;    
  }
}
