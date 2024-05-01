import { Controller, Get } from '@nestjs/common';

@Controller('message')
export class MessageController {
  @Get()
  sayHi(): string {
    return 'Hi from the backend!';
  }
}
