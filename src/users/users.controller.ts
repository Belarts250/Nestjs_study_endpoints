import { Body, Controller, Delete, Get, Patch,Param, ParseIntPipe, Post, Query ,ValidationPipe} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Controller('users')// handles /users
export class UsersController {
    constructor(private readonly usersService: UsersService) {}
    /*
    GET /users
    GET /users/:id
    POST /users
    PATCH /users/:id
    DELETE /users/:id
    */

    // GET

    // GET /users
//    @Get() 
//    findAll(){
//     return this.usersService.findAll()
//    }

    @Get() // GET /users
   findSpecific(@Query('role')role?: 'INTERN' | 'ADMIN' | 'ENGINEER'){
    return this.usersService.findAll(role)
   }
    // @Get('interns') // GET /users/interns
//    findAllInterns(){ // if you have other routes rather than /id put them
    //before id or else they'll be treated as id also 
    // return this.usersService.findAll(role)
//    }

   @Get(':id') // GET /users/:id
   findOne(@Param('id', ParseIntPipe) id: number){
    return this.usersService.findOne(id)
   }

   // POST
   @Post()
   create(@Body(ValidationPipe) createUserDto: CreateUserDto) {
    return this.usersService.create(createUserDto)
   }

   // UPDATE
    @Patch(':id') // PATCH /users/:id
   update(@Param('id',ParseIntPipe) id: number, @Body(ValidationPipe) updateUserDto: UpdateUserDto){
    return this.usersService.update(id, updateUserDto) }

   // DELETE
   @Delete(':id')
   delete(@Param('id', ParseIntPipe) id :number){
    return  this.usersService.delete(id)
   }

}
