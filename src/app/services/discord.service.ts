import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DiscordService {
  url: string = "https://discord.com/api/guilds/1033821151614468146/widget.json";

  constructor(
    private httpClient: HttpClient
  ) { }

  getPlayerCount(): Observable<any> {
    return this.httpClient.get(this.url);
  }

}
