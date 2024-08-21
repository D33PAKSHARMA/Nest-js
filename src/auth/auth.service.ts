import { HttpException, HttpStatus, Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User } from './schema/UserSchema';
import { Model } from 'mongoose';
import { SignUpDto } from './dtos/User.dto'
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
    constructor(@InjectModel(User.name) private userModel: Model<User>, private jwtService: JwtService){}


    async signUp(body: SignUpDto): Promise<User>{
        const data = body;

        const user = await this.userModel.findOne({ email: data.email });

        if(user) throw new HttpException("User already exists", HttpStatus.CONFLICT);
        
        const newuser = await this.userModel.create(data);

        return newuser;
    }

    async SignIn(body: {email: string, password: string}): Promise<{user: User , token: string}> {
            const {email, password} = body;

            const user = await this.userModel.findOne({email});
            
            if(!user) throw new UnauthorizedException("User not found");

            const token = this.jwtService.sign({id: user._id})

            return {user, token};
    }   
}
