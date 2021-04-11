import { Component, OnInit } from '@angular/core';
import Card from '../../models/card';
import { ProjectsService } from '../../services/projects.service';

@Component({
  selector: 'app-projects-page',
  templateUrl: './projects-page.component.html',
  styleUrls: ['./projects-page.component.scss']
})
export class ProjectsPageComponent implements OnInit {

  cards: Card[];

  constructor(private projectsService: ProjectsService) {}

  ngOnInit(): void {
    this.cards = this.projectsService.getCards()
  }

}
