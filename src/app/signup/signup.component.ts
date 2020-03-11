import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-signup",
  templateUrl: "./signup.component.html",
  styleUrls: ["./signup.component.css"]
})
export class SignupComponent implements OnInit {
  email_Id;
  password;
  mobile;

  constructor() {}

  ngOnInit(): void {
    console.log(this.email_Id);
  }
}
