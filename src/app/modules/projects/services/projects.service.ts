import { Injectable } from '@angular/core';
import Card from '../models/card';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  private cards: Card[] = [
    {
      title: "Oat Milk",
      description: "DnD All Purpose Web App",
      technologies: "Angular, .NET 5, Docker",
      href: "https://oatmilk.terencequ.com/"
    }
  ]

  constructor() { }

  getCards(){
    return this.cards;
  }
}
