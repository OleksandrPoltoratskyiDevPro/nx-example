import { Controller, Get, Post } from '@nestjs/common';

import { AppService } from './app.service';
import {SomeSharedClass} from "@wp-default/data";

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('todos')
  getData() {
    const sharedClassInstance = new SomeSharedClass('I`m a BE shared instance');
    console.log('shared class BE only here', sharedClassInstance);

    return this.appService.getData();
  }

  @Post('addTodo')
  addTodo() {
    return this.appService.addTodo();
  }
}
