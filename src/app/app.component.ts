import { Component } from '@angular/core';
import {ServersService} from './servers/servers.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private serversService: ServersService) { }
}
