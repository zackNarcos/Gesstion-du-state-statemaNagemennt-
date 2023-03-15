import { NgModule } from '@angular/core';
import { NgxsWebsocketPluginModule } from '@ngxs/websocket-plugin';

@NgModule({
  imports: [
    NgxsWebsocketPluginModule.forRoot({
      url: 'ws://localhost:4200'
    })
  ]
})
export class WebSocketModule {}
