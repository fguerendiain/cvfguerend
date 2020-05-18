import { Component, OnInit } from '@angular/core';
import * as data from '../../../../assets/cvData.json';

@Component({
  selector: 'app-owner-name',
  templateUrl: './owner-name.component.html',
  styleUrls: ['./owner-name.component.css']
})
export class OwnerNameComponent implements OnInit {

  firstName: string;
  lastName: string;

  constructor() { }

  ngOnInit(): void {
    this.firstName = data.owner.firstName;
    this.lastName = data.owner.lastName;

  }

}
