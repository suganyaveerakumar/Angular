import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CharacterItems } from '../model/character-items.model';

@Injectable({
  providedIn: 'root'
})
export class HpdataService {

  constructor(
    private http: HttpClient
  ) { }

  viewAllCharacter() {
    return this.http.get<CharacterItems[]>('http://hp-api.herokuapp.com/api/characters');
  }
  
  retrieveSpecificCharacters(index: any) {
    return this.http.get<CharacterItems[]>('http://hp-api.herokuapp.com/api/characters');
  }
}
