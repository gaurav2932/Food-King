import { Injectable } from '@angular/core';
import { Food } from 'src/app/shared/models/Food';
import { Tag } from 'src/app/shared/models/Tag';
@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor() { }
  getFoodById(id:number): Food{
    return this.getAll().find(food=> food.id==id)!;
  }

  getAllFoodsBySearchTerm(searchTerm:string):Food[]{
    return this.getAll().filter(food =>
      food.name.toLowerCase().includes(searchTerm.toLowerCase()));
  }
  getAllTags():Tag[]{
    return [
      { name: 'All', count: 14 },
      { name: 'FastFood', count: 4 },
      { name: 'Pizza', count: 2 },
      { name: 'Lunch', count: 3 },
      { name: 'SlowFood', count: 2 },
      { name: 'Hamburger', count: 1 },
      { name: 'Fry', count: 1 },
      { name: 'Soup', count: 1 },
    ];
  }

  getAllFoodsByTag(tag:string):Food[]{
    return tag == "All"?
    this.getAll():
    this.getAll().filter(food => food.tag?.includes(tag));
  }

  getAll():Food[]{
    return [
      {
        id:1,
        name:'badam',
        price:10,
        cookTime:'20-30',
        favorite:false,
        origins:['itly'],
        stars: 4.5,
        imageUrl:'/assets/images/foods/badam.jpg',
        tag:['badam', 'Lunch','peanuts', 'dryfruits'],
      },
      {
        id:2,
        name:'burger',
        price:30,
        cookTime:'20-30',
        favorite:false,
        origins:['itly'],
        stars: 4.5,
        imageUrl:'/assets/images/foods/burg.jpg',
        tag:['Hamburger', 'FastFood','fat', 'crespi'],
      },
      {
        id:3,
        name:'eggs',
        price:20,
        cookTime:'2-7',
        favorite:false,
        origins:['american'],
        stars: 5,
        imageUrl:'/assets/images/foods/eggs.jpg',
        tag:['hen', 'Lunch','Fry', 'eggs'],
      },
      {
        id:4,
        name:'fruits',
        price:50,
        cookTime:'2-6',
        favorite:false,
        origins:['indian'],
        stars: 5,
        imageUrl:'/assets/images/foods/fruit.jfif',
        tag:['mango', 'apple', 'fruits'],
      },
      {
        id:5,
        name:'FastFood',
        price:30,
        cookTime:'5-10',
        favorite:false,
        origins:['indian'],
        stars: 5,
        imageUrl:'/assets/images/foods/hdog.jfif',
        tag:['hotdog', 'FastFood', 'fried'],
      },
      {
        id:6,
        name:'strobery',
        price:0,
        cookTime:'5-10',
        favorite:false,
        origins:['indian'],
        stars: 5,
        imageUrl:'/assets/images/foods/stobery.jfif',
        tag:['stobrery', 'SlowFood', 'fruit'],
      },
      {
        id:7,
        name:'Pizza',
        price:0,
        cookTime:'5-10',
        favorite:false,
        origins:['indian'],
        stars: 5,
        imageUrl:'/assets/images/foods/piza.jpg',
        tag:['Pizza', 'FastFood', 'Fry'],
      },
      {
        id:8,
        name:'Pizza',
        price:0,
        cookTime:'5-10',
        favorite:false,
        origins:['indian'],
        stars: 5,
        imageUrl:'/assets/images/foods/p.jpg',
        tag:['Pizza', 'FastFood', 'fry'],
      },
      {
        id:9,
        name:'Soup',
        price:0,
        cookTime:'5-10',
        favorite:false,
        origins:['indian'],
        stars: 5,
        imageUrl:'/assets/images/foods/p.jpg',
        tag:['Soup'],
      },
      
      // '/assets/images/foods/eggs.jpg',
      // '/assets/images/foods/fruit.jfif',
      // '/assets/images/foods/hdog.jfif',
      // '/assets/images/foods/stobery.jfif',
    ]
  }
}
