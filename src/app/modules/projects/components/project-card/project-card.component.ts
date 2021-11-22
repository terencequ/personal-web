import { Component, Input, OnInit } from '@angular/core';
import Card from '../../models/card';

@Component({
  selector: 'app-project-card',
  templateUrl: './project-card.component.html',
  styleUrls: ['./project-card.component.scss']
})
export class ProjectCardComponent implements OnInit {

  @Input()
  card: Card;
  constructor() { }

  ngOnInit(): void {
  }

}
