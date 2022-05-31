import { Message } from "../dtos/message";
import { Crud } from "../libs/crud";
import { Redis } from "../libs/redis";
import { MessageRepository } from "../repository/message-repository";
import { IRepository } from "../types/IRepository";

export class MessageBussiness<R extends IRepository<any>>{
    private repository:MessageRepository<R>;
    constructor(_repository:R){
        this.repository=new MessageRepository<R>(_repository);
    }
    

}
function test(){
    let _redis=new Redis<Message>('message','chat');
    let aa=new MessageBussiness<Redis<Message>>(_redis);
    
    
}