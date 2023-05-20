import { PassportSerializer } from '@nestjs/passport';
import { User } from 'src/users/entities/user.entity';
import { Injectable } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';

@Injectable()
export class SessionSerializer extends PassportSerializer {
  constructor(private readonly userService: UsersService) {
    super();
  }

  serializeUser(user: User, done: Function) {
    console.log("Serialize")
    done(null, user);
  }

  async deserializeUser(payload: any, done: Function) {
    console.log('DeSerialize');
    const user = await this.userService.findUser({ id: payload.id });
    return user ? done(null, user) : done(null, null);
  }

  
}
