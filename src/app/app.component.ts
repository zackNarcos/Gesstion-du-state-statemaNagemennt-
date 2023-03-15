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
  webSocketData = '';

  constructor(private store: Store) {
    // Créer une connexion WebSocket
    const ws = webSocket('ws://localhost:4200');

    // TODO:: Debug this methode
    // Écouter les événements de la connexion WebSocket
    ws.subscribe(
        // Mise à jour de l'état de l'application NGXS
        (data: any) => this.store.dispatch(new UpdateWebSocketData(data)),
        // Gérer les erreurs de la connexion WebSocket
        (error: any) => console.error(error),
        // Fermer la connexion WebSocket
        () => console.log('WebSocket connection closed')
    );
  }
}
