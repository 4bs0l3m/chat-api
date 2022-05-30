import { BaseDto } from "./base-dto";
import { User } from "./user";

export class Channel extends BaseDto{
    constructor(){
        super();
    }
    users?:User[];
}
