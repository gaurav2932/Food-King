import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }
}

export interface Post {
  id: number,
  title: string, 
  body: string
}