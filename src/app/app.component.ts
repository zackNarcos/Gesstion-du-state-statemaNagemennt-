import {Component, OnInit} from '@angular/core';
import {webSocket} from "rxjs/webSocket";
import {Store} from "@ngxs/store";
import {CartAction} from "./store/actions/cart.action";
import UpdateWebSocketData = CartAction.UpdateWebSocketData;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent{
  title = 'test-competence';
}
