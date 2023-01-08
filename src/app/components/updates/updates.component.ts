import { Component } from '@angular/core';
import { IUpdate } from 'src/app/services/interfaces/update';
import { UpdateService } from 'src/app/services/update.service';

@Component({
  selector: 'app-updates',
  templateUrl: './updates.component.html',
  styleUrls: ['./updates.component.scss']
})
export class UpdatesComponent {
  items: IUpdate[] = [];
  amount: number = 3;
  max: number = 0;

  constructor(private updateService: UpdateService) { }

  ngOnInit(): void {
    this.max = this.updateService.originalList.length;
    this.loadUpdates();
  }

  loadUpdates(): void {
    this.items = this.updateService.getLatestUpdates(this.amount);
  }

  more(): void {
    this.amount += 3;
    this.loadUpdates();
  }

  open(url: string): void {
    window.open(url, "_blank");
  }
}
