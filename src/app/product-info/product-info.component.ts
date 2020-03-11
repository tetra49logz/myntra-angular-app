import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-product-info",
  templateUrl: "./product-info.component.html",
  styleUrls: ["./product-info.component.css"]
})
export class ProductInfoComponent implements OnInit {
  id;
  image;
  brand;
  type;
  price;
  constructor(private activate: ActivatedRoute) {
    this.activate.queryParams.subscribe(data => {
      console.log(data);
      this.id = data.id;
      this.image = data.image;
      this.brand = data.brand;
      this.type = data.type;
      this.price = data.price;
    });
  }

  ngOnInit(): void {}
}
