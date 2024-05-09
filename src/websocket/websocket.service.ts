import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import * as Pusher from 'pusher';

@Injectable()
export class WebsocketService {
  private client: Pusher;

  constructor(private readonly configService: ConfigService) {
    this.client = new Pusher({
      appId: this.configService.get('PUSHER_APP_ID'),
      key: this.configService.get('PUSHER_KEY'),
      secret: this.configService.get('PUSHER_SECRET'),
      cluster: this.configService.get('PUSHER_CLUSTER'),
      useTLS: true,
    });
  }

  publish(message: string, channel: string, event: string) {
    this.client.trigger(channel, event, message);
  }
}
