export class Post {
    id: number | undefined
    title: string
    content: string
    date: Date
    username: string
    constructor(title:string, content:string, username:string){
        this.title = title
        this.content = content
        this.date = new Date()
        this.username = username
    }
}
