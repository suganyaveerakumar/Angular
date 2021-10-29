import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DropdownService {

  constructor() { }
  houses = ['Gryffindor', 'Hufflepuff', 'Ravenclaw', 'Slytherin'];
}
