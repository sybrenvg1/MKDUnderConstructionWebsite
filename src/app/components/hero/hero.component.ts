import { Component } from '@angular/core';
import { DiscordService } from 'src/app/services/discord.service';
import { Clipboard } from '@angular/cdk/clipboard';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent {
  amountPlayers: number = 0;
  amountUsers: number = 0;
  serverIp: string = "play.majestumkingdom.nl";
  discordUrl: string = "discord.gg/majestum";

  constructor(
    private discordService: DiscordService,
    private clipboard: Clipboard,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.discordService.getPlayerCount().subscribe(result => {
      this.amountUsers = result.presence_count;
    })
  }

  copy(value: string): void {
    this.clipboard.copy(value);
    this.snackBar.open("Succesvol gekopieerd naar klembord", "", {
      duration: 1000,
      panelClass: ["success-snackbar"],
      verticalPosition: "bottom",
      horizontalPosition: "right"
    });
  }
}
