import { Body, Controller, Delete, Get, Param, Post, Query } from '@nestjs/common';
import { PeopleService } from './people.service';
import { Person } from './person.model';
import { CreatePersonDto } from './dto/create-person.dto';
import { GetPeopleFilterDto } from './dto/get-person-filter.dto';


@Controller('people')
export class PeopleController {
    constructor(private peopleService: PeopleService){}

    @Get()
    async getPeople(@Query() filterDto: GetPeopleFilterDto): Promise<Person[]> {
        if (Object.keys(filterDto).length) {
            return this.peopleService.getPersonWithFilters(filterDto);
        }

        return this.peopleService.getAllPeople();
    }

    @Get('/:id')
    getPersonById(@Param('id') id: string): Person {
        return this.peopleService.getPersonById(id);
    }

    @Post()
    /*
    createPerson(@Body() body){
        console.log('body', body);
    }
    */
    createPerson(@Body() createPersonDto: CreatePersonDto): Person {
        return this.peopleService.createPerson(createPersonDto);
    }

    @Delete(':id')
    deletePerson(@Param('id') id: string): void {
        return this.peopleService.deletePerson(id);
    }
}

@Controller('counting-people')
export class CountingController{
    constructor(private peopleService: PeopleService){}

    @Get()
    getCountOfPeople(){
        return this.peopleService.getCountOfPeople();
    }
    
}
