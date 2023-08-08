import { Component, OnInit } from '@angular/core';
import { EzoHttpService } from 'src/app/common-service/http.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ProductListComponent implements OnInit {

  productList: any[] = [];

  constructor(private http: EzoHttpService) { }

  // get all records
  getAllProductList() {
    this.http.httpRequest('get', 'kappa/image/task', null).subscribe((res: any) => {
      this.productList = res.items
    })
  }

  ngOnInit(): void {
    this.getAllProductList()
  }

}
