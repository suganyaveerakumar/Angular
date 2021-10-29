import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CharacterItems } from '../model/character-items.model';
import { DropdownService } from '../service/dropdown.service';
import { HpdataService } from '../service/hpdata.service';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit {

  items: CharacterItems[] = [];
  items1: CharacterItems[] = [];
  houses: any = {};
  index: any;

  public selectedHouse: string = '';

  constructor(
    private hpDataService: HpdataService, private router: Router, private dropDownService: DropdownService
  ) { }

  ngOnInit() {
    this.hpDataService.viewAllCharacter().subscribe(
      response => {
        this.items = response;
        this.items1 = response;
      }
    )
    this.houses = this.dropDownService.houses;
  }

  filterHouse(filterVal: any) {
    if (filterVal != 0) {
      this.items = this.items1.filter((item) => item.house === this.selectedHouse);
    }
    else
      this.selectedHouse == "All Houses";
  }

  viewDetails(index: number) {
    this.index = console.log(index);
    console.log(this.items[index].name);
    let routeUrl = '../characters/' + index;
    this.router.navigate([routeUrl], { queryParams: { index: this.index } });

  }

}
