export class Redis {
    private storeName:string;
    constructor(_storeName:string){
        this.storeName=_storeName;
    }
    getStoreName(){
        return this.storeName;
    }
    createStore(){
        
    }
}
