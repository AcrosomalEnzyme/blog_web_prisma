import { Body, Controller, Post } from '@nestjs/common';
import { UsersService } from './users.service';


@Controller('users')
export class UsersController {

    constructor(private readonly userService: UsersService){}

    // 增加用户
    // @Post()
    // async addUser(
    //     @Body('')
    // )

}
