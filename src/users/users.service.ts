import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { NotFoundException } from '@nestjs/common';


@Injectable()
export class UsersService {
    private users = [
  {
    "id": 1,
    "name": "Belarts123",
    "email": "igihozo@belise.com",
    "role": "ADMIN"
  },
  {
    "id": 2,
    "name": "Belarts",
    "email": "igihozo@belisee.com",
    "role": "ENGINEER"
  },
  {
    "id": 3,
    "name": "Diane",
    "email": "diane@example.com",
    "role": "ENGINEER"
  },
  {
    "id": 4,
    "name": "Alex",
    "email": "alex@example.com",
    "role": "INTERN"
  },
  {
    "id": 5,
    "name": "Grace",
    "email": "grace@example.com",
    "role": "INTERN"
  },
  {
    "id": 6,
    "name": "Samuel",
    "email": "samuel@example.com",
    "role": "ADMIN"
  },
  {
    "id": 7,
    "name": "Joy",
    "email": "joy@example.com",
    "role": "ENGINEER"
  }
]

    findAll(role?: 'INTERN' | 'ENGINEER' | 'ADMIN'){
      if(role){
         const Arrayrole = this.users.filter(user => user.role === role)
         if(Arrayrole.length === 0) throw new NotFoundException('User role not found')
          return Arrayrole
      }
      return this.users
    }
    findOne(id: number){
      const user = this.users.find(user => user.id === id)
      if(!user) throw new NotFoundException('User not found')
      return user
    }
    create(createUserDto: CreateUserDto){
      const usersByHighestId = [...this.users].sort((a,b) => b.id - a.id)
      const newUser = {
        id: usersByHighestId[0].id + 1,
        ...createUserDto
      }
      this.users.push(newUser)
      return newUser
    }
    update(id: number, updateUserDto: UpdateUserDto){
      this.users = this.users.map(user => {
        if(user.id === id){
          return { ...user, ...updateUserDto }
        }
         return user
      })
      return this.findOne(id)
    }

    delete(id: number){
        const removedUser = this.findOne(id)
        this.users = this.users.filter(user => user.id !== id)
        return removedUser
    }
}
