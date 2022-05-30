import { BaseDto } from "./base-dto";

export class User extends BaseDto {
    constructor(){
        super();
    }
    username!:string;
    password!:string;
    age!:string;

}
