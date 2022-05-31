import { Message } from "../dtos/message";
import { Crud } from "../libs/crud";
import { IRepository } from "../types/IRepository";

export class MessageRepository<T extends IRepository<Message>> {
    private repository;
    constructor(_repository:T){
        this.repository=new Crud<Message,T>('',_repository)
    }
    getRepository(){
        return this.repository;
    }
}

