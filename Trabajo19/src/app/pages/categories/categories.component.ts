import { Component, OnInit } from '@angular/core';
import { CategoriesService } from 'src/app/services/categories.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {
  categories: any = []
  
  constructor(
    private categoriesService : CategoriesService
  ){ }

  ngOnInit(): void {
    this.categoriesService.getAllCategories()
    .subscribe((data) => 
    this.categories = data)
  }
}
