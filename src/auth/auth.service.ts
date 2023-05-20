import { Injectable } from '@nestjs/common';
import { UserDetails } from './types';
import { UsersService } from 'src/users/users.service';

@Injectable()
export class AuthService {
  constructor(private readonly userService: UsersService) {}
  async validateUser(details: UserDetails) {
    console.log('AuthService');
    console.log('User Details:: ', details);
    const user = await this.userService.findUser({ email: details.email });
    if (user) {
      return user;
    }
    console.log('User not found. Creating...');
    return this.userService.createUser(details);
  }
}
