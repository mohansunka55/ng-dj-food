import {Component, OnInit} from '@angular/core';
import {ProductService} from "../apiservices/product.service";
import {Product} from "../Product";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products: any[] = [];
  totalCount: number = 0;
  pageSize: number = 1; // Default page size
  currentPage: number = 1;
  searchTerm: string = '';

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts(): void {
    const offset = (this.currentPage - 1) * this.pageSize;
    this.productService.getProducts(this.pageSize, offset, this.searchTerm)
      .subscribe((response:any) => {
        this.products = response.results;
        this.totalCount = response.count;
      });
  }

  nextPage(): void {
    if ((this.currentPage * this.pageSize) < this.totalCount) {
      this.currentPage++;
      this.getProducts();
    }
  }

  previousPage(): void {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.getProducts();
    }
  }

  // onSearch(searchTerm: string): void {
  //   this.searchTerm = searchTerm;
  //   this.currentPage = 1; // reset to the first page
  //   this.getProducts();
  // }

  getTotalPages(): number {
    return Math.ceil(this.totalCount / this.pageSize);
  }



}
