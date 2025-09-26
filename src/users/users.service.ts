import { Injectable } from '@nestjs/common';

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
        return this.users.filter(user => user.role === role)
      }
      return this.users
    }
    findOne(id: number){
      const user = this.users.find(user => user.id === id)
      return user
    }
    create(user: { name: string, email: string, role: 'INTERN' | 'ENGINEER' | 'ADMIN' }){
      const usersByHighestId = [...this.users].sort((a,b) => b.id - a.id)
      const newUser = {
        id: usersByHighestId[0].id + 1,
        ...user
      }
      this.users.push(newUser)
      return newUser
    }
    update(id: number, updateUser: { name?: string, email?: string, role?: 'INTERN' | 'ENGINEER' | 'ADMIN'}){
      this.users = this.users.map(user => {
        if(user.id === id){
          return { ...user, ...updateUser }
        }
         return user
      })
      return this.findOne
    }

    delete(id: number){
        const removedUser = this.findOne(id)
        this.users = this.users.filter(user => user.id !== id)
        return removedUser
    }
}
