import { Controller, Get } from '@nestjs/common';
import { WebsocketService } from '../websocket/websocket.service';

@Controller('message')
export class MessageController {
  constructor(private readonly websocketService: WebsocketService) {}

  @Get()
  sayHi(): string {
    this.websocketService.publish('Hi there', 'foobar', 'buzzfizz');

    return 'Hi from the backend!';
  }
}
