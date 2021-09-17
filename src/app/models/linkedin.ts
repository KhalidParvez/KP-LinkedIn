export class LinkedInList{
    public id:number | undefined;
    public inputText:string ="";
    public createdOn:Date =new Date();
    public linkedInComments:LinkedInComments | undefined;
    public linkedInLikes:LinkedInLike | undefined;
    public highlightTrue:boolean =false;
}
export class LinkedinPost {
    public inputText:string ="";
}
export class LinkedInComments {
    public id:number | undefined;
    public postId:number | undefined;
    public comments:string ="";
    public createdOn:Date =new Date();
}

export class LinkedInLike{
    public liked :boolean =false;
}