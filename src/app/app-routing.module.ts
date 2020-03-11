import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { Routes, RouterModule } from "@angular/router";
import { FormsModule } from "@angular/forms";
import { OverviewComponent } from "./overview/overview.component";
import { ProductListComponent } from "./overview/product-list/product-list.component";
import { ProductInfoComponent } from "./product-info/product-info.component";

const routes: Routes = [
  {
    path: "overview",
    component: OverviewComponent,
    children: [
      {
        path: "product-list",
        component: ProductListComponent
      }
    ]
  },
  { path: "product-info", component: ProductInfoComponent }
];
@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forRoot(routes), FormsModule],
  exports: [RouterModule]
})
export class AppRoutingModule {}
