import { Pipe, PipeTransform } from "@angular/core";
import { Products } from "./products";

@Pipe({
  name: "filter"
})
export class FilterPipe implements PipeTransform {
  transform(products: Products[], search: string): Products[] {
    if (search) {
      return products.filter(product => {
        return product.brand.toLowerCase().includes(search.toLowerCase());
      });
    } else {
      return products;
    }
  }
}
