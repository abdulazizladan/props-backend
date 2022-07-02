import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { SigninUserDTO } from 'src/user/dto/signindto';
import { User } from 'src/user/entities/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UserService {
    
    constructor( @InjectRepository(User) private userRepository: Repository<User>) {

    }

    signin(user: SigninUserDTO) {

    }

    signup() {

    }

    getAll() {
        const users = this.userRepository.find()
        return users;
    }
}
