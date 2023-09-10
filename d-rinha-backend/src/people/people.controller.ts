import { Body, Controller, Delete, Get, Param, Post, Query } from '@nestjs/common';
import { PeopleService } from './people.service';
import { Person } from './person.model';
import { CreatePersonDto } from './dto/create-person.dto';
import { GetPeopleFilterDto } from './dto/get-person-filter.dto';
import { ApiBody, ApiResponse, ApiTags } from '@nestjs/swagger';


@Controller('people')
@ApiTags('People')
export class PeopleController {
    constructor(private peopleService: PeopleService){}

    @Get()
    @ApiResponse({status: 200, description: 'Get peoples using queries, and when queries not provided, return a list with all peoples.'})
    async getPeople(@Query() filterDto: GetPeopleFilterDto): Promise<Person[]> {
        if (Object.keys(filterDto).length) {
            return this.peopleService.getPersonWithFilters(filterDto);
        }

        return this.peopleService.getAllPeople();
    }

    @Get('/:id')
    @ApiResponse({status: 200, description: "Get a specific person, searching by his id"})
    getPersonById(@Param('id') id: string): Person {
        return this.peopleService.getPersonById(id);
    }

    @Post()
    @ApiResponse({status: 200, description: "Create a new Person object"})
    @ApiBody({type: CreatePersonDto})
    /*
    createPerson(@Body() body){
        console.log('body', body);
    }
    */
    createPerson(@Body() createPersonDto: CreatePersonDto): Person {
        return this.peopleService.createPerson(createPersonDto);
    }

    @Delete(':id')
    @ApiResponse({status: 200, description: "Deletes a user passing an id as a parameter"})
    deletePerson(@Param('id') id: string): void {
        return this.peopleService.deletePerson(id);
    }
}

@Controller('counting-people')
@ApiTags('Counter')
export class CountingController{
    constructor(private peopleService: PeopleService){}

    @Get()
    @ApiResponse({status: 200, description: "This rout counts how many people's object are created"})
    getCountOfPeople(){
        return this.peopleService.getCountOfPeople();
    }
    
}
