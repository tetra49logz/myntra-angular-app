import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class StorageService {
  public searchString: string;

  constructor() {}

  public getScope(): string {
    return this.searchString;
  }

  public setScope(searchString: any): void {
    this.searchString = searchString;
  }
}
