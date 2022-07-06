import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Fruit } from '../fruit';
import { FruitService } from '../fruit.service';

@Component({
  selector: 'app-fruit-list',
  templateUrl: './fruit-list.component.html',
  styleUrls: ['./fruit-list.component.css'],
})
export class FruitListComponent implements OnInit {

 
  constructor(private fruitService:FruitService, private router:Router) {
    
  }

  fruits!: Fruit[];
  fruitSelected!: Number;

  ngOnInit() {
    this.fruitService.getAllFruits().subscribe((data: any) => {
      console.log('Res', data);
      this.fruits = data;
    });
  }

  showFruit(id:number) {
    this.router.navigate(["fruit", id]);
  }

  getKeys(obj: any): Array<any> {
    return Object.keys(obj);
  }

}
