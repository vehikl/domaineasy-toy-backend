import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MessageController } from './message/message.controller';
import { ConfigModule } from '@nestjs/config';
import { WebsocketService } from './websocket/websocket.service';

@Module({
  imports: [ConfigModule.forRoot()],
  controllers: [AppController, MessageController],
  providers: [AppService, WebsocketService],
})
export class AppModule {}
