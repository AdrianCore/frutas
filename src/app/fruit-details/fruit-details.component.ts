import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Fruit } from '../fruit';
import { FruitService } from '../fruit.service';

@Component({
  selector: 'app-fruit-details',
  templateUrl: './fruit-details.component.html',
  styleUrls: ['./fruit-details.component.css']
})
export class FruitDetailsComponent implements OnInit {

  id!: number;
  fruit!: Fruit;

  constructor(private route:ActivatedRoute, private fruitService:FruitService) { }

  ngOnInit(): void {

    this.id = this.route.snapshot.params['id'];
    this.fruit = new Fruit();
    this.fruitService.findById(this.id).subscribe(data => {
      this.fruit = data;
    })

  }

}
