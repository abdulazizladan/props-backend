import { Inject, Injectable, UnauthorizedException } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { InjectRepository } from "@nestjs/typeorm";
import { ExtractJwt } from "passport-jwt";
import { Strategy } from "passport-local";
import { Repository } from "typeorm";
import { User } from "../user/entities/user.entity";
import { JwtPayload } from "./jwt-payload.interface";

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
    constructor( @InjectRepository(User) private userRepository: Repository<User> ) {
        super({
            JwtStrategy: ExtractJwt.fromAuthHeaderAsBearerToken(),
            secretOrKey: 'secret',
        })
    }

    async validate( payload: JwtPayload ): Promise<User> {
        // const { email } = payload
        // const user = await this.userRepository.findOne({ email })
        // if(!user) {
        //     throw new UnauthorizedException()
        // }else {
        //     return user;
        // }
        return
    }
}