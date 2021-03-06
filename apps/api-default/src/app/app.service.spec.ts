import { Test } from '@nestjs/testing';

import { AppService } from './app.service';

describe('AppService', () => {
  let service: AppService;

  beforeAll(async () => {
    const app = await Test.createTestingModule({
      providers: [AppService],
    }).compile();

    service = app.get<AppService>(AppService);
  });

  describe('getData', () => {
    it('should return "Welcome to api-default!"', () => {
      expect(service.getData()).toEqual([{title: 'Todo 1 changed haha'}, {title: 'Todo 2'}]);
    });
  });
});
