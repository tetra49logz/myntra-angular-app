import { Component, OnInit, Input } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Router } from "@angular/router";
import { NavComponent } from "src/app/nav/nav.component";

@Component({
  selector: "app-product-list",
  templateUrl: "./product-list.component.html",
  styleUrls: ["./product-list.component.css"]
})
export class ProductListComponent implements OnInit {
  @Input() search: string;
  menItems;
  kidsItems;
  womenItems;
  id;
  image;
  constructor(
    private http: HttpClient,
    private router: Router // private nav: NavComponent
  ) {}
  ngOnInit(): void {
    const menItemsJson = this.http.get("/assets/json/menProducts.json");
    const woMenItemsJson = this.http.get("/assets/json/womenProducts.json");
    const kidsItemsJson = this.http.get("/assets/json/kidsProducts.json");

    menItemsJson.subscribe(response => {
      this.menItems = response["items"];
      console.log(this.menItems);
    });
    woMenItemsJson.subscribe(response => {
      this.womenItems = response["items"];
      console.log(this.womenItems);
    });
    kidsItemsJson.subscribe(response => {
      this.kidsItems = response["items"];
      console.log(this.kidsItems);
    });
  }

  clickTrigger(product) {
    this.router.navigate(["product-info"], {
      queryParams: {
        id: product.id,
        image: product.image,
        brand: product.brand,
        type: product.type,
        price: product.price
      }
    });
  }
}
