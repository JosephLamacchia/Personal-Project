export class User {

    id: number;
    username: string;
    password: string;

constructor(id: number,username: string, password: string){
    this.username=username;
    this.password=password;
    this.id=id;
}
}