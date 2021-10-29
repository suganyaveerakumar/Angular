import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CharacterItems } from '../model/character-items.model';
import { HpdataService } from '../service/hpdata.service';

@Component({
  selector: 'app-view-character',
  templateUrl: './view-character.component.html',
  styleUrls: ['./view-character.component.css']
})
export class ViewCharacterComponent implements OnInit {

  name: string = '';
  alive: string = '';
  ancestry: string = '';
  gender: string = '';
  house: string = '';
  dateOfBirth: string = '';
  eyeColor: string = '';
  hairColor: string = '';
  patronus: string = '';
  hogwartsStudent: string = '';
  hogwartsStaff: string = '';
  actor: string = '';
  image: string = '';
  
  retrieveItems: CharacterItems[] = [];
  id: any;

  constructor(
    private hpDataService: HpdataService, private _activatedRoute: ActivatedRoute, private router: Router
  ) { }

  ngOnInit() {
    this._activatedRoute.paramMap.subscribe(params => {
      this.id = params.get('id');
      console.log(this.id);
    });
    this.hpDataService.retrieveSpecificCharacters(this.id).subscribe(
      response => {
        this.retrieveItems = response;
        let i = this.id;
        this.name = this.retrieveItems[i].name;
        this.alive = this.retrieveItems[i].alive;
        if (this.retrieveItems[i].alive) {
          this.alive = "Yes";
        }
        else {
          this.alive = " No";
        }
        this.ancestry = this.retrieveItems[i].ancestry;
        this.gender = this.retrieveItems[i].gender;
        this.house = this.retrieveItems[i].house;
        this.dateOfBirth = this.retrieveItems[i].dateOfBirth;
        this.eyeColor = this.retrieveItems[i].eyeColour;
        this.hairColor = this.retrieveItems[i].hairColour;
        this.patronus = this.retrieveItems[i].patronus;
        this.hogwartsStaff = this.retrieveItems[i].hogwartsStaff;
        if (this.retrieveItems[i].hogwartsStaff) {
          this.hogwartsStaff = "Yes";
        }
        else {
          this.hogwartsStaff = " No";
        }
        this.hogwartsStudent = this.retrieveItems[i].hogwartsStudent;
        if (this.retrieveItems[i].hogwartsStudent) {
          this.hogwartsStudent = "Yes";
        }
        else {
          this.hogwartsStudent = " No";
        }
        this.actor = this.retrieveItems[i].actor;
        this.image = this.retrieveItems[i].image;
      }
    )
  }

  previousPage() {
    this.router.navigate(['../characters']);
  }

}
