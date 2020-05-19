import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-knowledge',
  templateUrl: './knowledge.component.html',
  styleUrls: ['./knowledge.component.css']
})
export class KnowledgeComponent implements OnInit {
  @Input() selectedLang;

  constructor() { }

  ngOnInit(): void {
  }

}
