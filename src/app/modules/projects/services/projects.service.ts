import { Injectable } from '@angular/core';
import Card from '../models/card';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  private cards: Card[] = [
    {
      title: "DnD Character Creator",
      description: "React, MongoDB, Express",
      href: "https://charactercreator.terencequ.com"
    },
    {
      title: "Chicken Voyage",
      description: "Angular, SQL, .NET",
      href: "https://chickenvoyage.terencequ.com"
    }
  ]

  constructor() { }

  getCards(){
    return this.cards;
  }
}
