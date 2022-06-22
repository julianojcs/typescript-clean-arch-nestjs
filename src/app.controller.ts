import { Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';

//@Controller('prefixo') - http://localhost:3000/prefixo/
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('home')
  getHome(): string {
    return this.appService.getHome();
  }
  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
