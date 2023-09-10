import { Injectable } from '@nestjs/common';
import { Person } from './person.model';
import { CreatePersonDto } from './dto/create-person.dto';
import { v4 as uuid} from 'uuid';
import { GetPeopleFilterDto } from './dto/get-person-filter.dto';

@Injectable()
export class PeopleService {
    private people : Person[] = [];

    getAllPeople(): Person[]{
        return this.people;
    }

    getCountOfPeople(): number{
        const people: Person[] = this.getAllPeople();
        const countPeople: number = people.length;
        return countPeople;
    }

    getPersonById(id: string): Person{
        return this.people.find((person) => person.id === id);
    }

    getPersonWithFilters(filterDto: GetPeopleFilterDto): Person[]{
        const { search, birth_date, stack} = filterDto;

        let people = this.getAllPeople();

        if (search){
            people = people.filter((person) =>
            {
               if (person.surname.toLowerCase().includes(search) || person.name.toLowerCase().includes(search)){
                    return true;
               }

               return false;
            });
        }

        /*
        if(name){
            people = people.filter((person) => person.name.toLocaleLowerCase() === name.toLocaleLowerCase());
        }

        if(surname){
            people = people.filter((person) => person.surname.toLocaleLowerCase() === surname.toLocaleLowerCase());
        }
        */

        if(birth_date){
            people = people.filter((person) => person.birth_date === birth_date);
        }
        
        if(stack){
            people = people.filter((person) => person.stack.includes(stack));
        }

        return people;
    }

    createPerson(createPersonDto: CreatePersonDto): Person{
        const { id, surname, name, birth_date, stack } = createPersonDto;
        const person: Person = {
            id: uuid(),
            surname,
            name,
            birth_date,
            stack,
        };

        this.people.push(person);
        return person;
    }

    deletePerson(id: string): void{
        this.people = this.people.filter((person) => person.id !== id);
    }
    
}
