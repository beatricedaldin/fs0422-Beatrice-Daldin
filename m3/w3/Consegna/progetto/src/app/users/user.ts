export class User {
    id:number | undefined
    email: string
    password: string
    username: string
    role: string
    constructor ( email:string, password: string, username: string){
        this.email = email
        this.password = password
        this.username = username
        this.role = 'user'
    }
}
