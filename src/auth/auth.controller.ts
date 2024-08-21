import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { SignUpDto } from './dtos/User.dto';

@Controller('auth')
export class AuthController {
    constructor(private userService: AuthService){}


    @Post('/sign-up')
    signUp(@Body() body: SignUpDto) {
        return this.userService.signUp(body);
    }

    @Post('/sign-in')
    signIn(@Body() body: {email: string, password: string}) {
        return this.userService.SignIn(body);
    }
}
