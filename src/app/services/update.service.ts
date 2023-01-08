import { Injectable } from '@angular/core';
import { IUpdate } from './interfaces/update';
import updates from "../../assets/updates/updates.json";

@Injectable({
  providedIn: 'root'
})
export class UpdateService {
  originalList: IUpdate[] = [];

  constructor() {
    this.originalList = updates.reverse();
   }

  getLatestUpdates(amount: number): IUpdate[] {
    var latestUpdates = [...this.originalList];

    if(this.originalList.length > amount) {
      latestUpdates = latestUpdates.slice(0, amount);
    }

    latestUpdates.map((u: IUpdate) => {
      return u = {
        ...u,
        date: new Date(u.date)
      }
    });

    return latestUpdates;
  }

}
