import { Module } from '@nestjs/common';
import { PeopleService } from './people.service';
import { PeopleController, CountingController } from './people.controller';

@Module({
  controllers: [PeopleController, CountingController],
  providers: [PeopleService]
})
export class PeopleModule {}
