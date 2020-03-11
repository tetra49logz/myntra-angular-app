import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { NavComponent } from "./nav/nav.component";
import { CarouselComponent } from "./overview/carousel/carousel.component";
import { LoginComponent } from "./login/login.component";
import { SignupComponent } from "./signup/signup.component";
import { ProductListComponent } from "./overview/product-list/product-list.component";
import { OverviewComponent } from "./overview/overview.component";
import { ProductInfoComponent } from "./product-info/product-info.component";
import { AppRoutingModule } from "./app-routing.module";
import { FilterPipe } from './filter.pipe';

let routes: Routes = [
  {
    path: "login",
    component: LoginComponent,
    children: [{ path: "signup", component: SignupComponent }]
  },
  {
    path: "signup",
    component: SignupComponent,
    children: [{ path: "login", component: LoginComponent }]
  },
  {
    path: "overview",
    component: OverviewComponent,
    children: [
      {
        path: "product-list",
        component: ProductListComponent
      },
      { path: "carousel", component: CarouselComponent }
    ]
  },
  { path: "product-info", component: ProductInfoComponent },
  { path: "**", redirectTo: "overview" } // to define the landing page
];

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    CarouselComponent,
    LoginComponent,
    SignupComponent,
    ProductListComponent,
    OverviewComponent,
    ProductInfoComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
