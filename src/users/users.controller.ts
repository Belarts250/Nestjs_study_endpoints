import { Body, Controller, Delete, Get, Patch,Param, Post, Query } from '@nestjs/common';
import { UsersService } from './users.service';

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

   @Get() // GET /users
   findAll(){
    return this.usersService.findAll()
   }

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
   findOne(@Param('id') id: string){
    return this.usersService.findOne(+id)
   }

   // POST
   @Post()
   create(@Body() user: { name: string, email:string, role: 'INTERN' | 'ENGINEER' | 'ADMIN'}) {
    return this.usersService.create(user)
   }

   // UPDATE
    @Patch(':id') // PATCH /users/:id
   update(@Param('id') id: string, @Body() updateUser: { name?: string, email?: string, role?: 'INTERN' | 'ENGINEER' | 'ADMIN'}){
    return this.usersService.update(+id, updateUser) }

   // DELETE
   @Delete(':id')
   delete(@Param('id') id :string){
    return  this.usersService.delete(+id)
   }

}
