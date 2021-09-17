
export class person {
    public Name: string;
    public Age : string;
    public Email:string ="";
    public WorkHistory:Array<WorkHistory>=[];
    public Skills:Array<Skill>=[];
    public Address:Address|undefined = undefined;
    constructor(name:string,age:string){
        this.Name = name;
        this.Age = age;
    }
 
}

export class WorkHistory {
        public ComponyName:string="";
        public StartDate:Date =new Date();
        public EndDate:Date |undefined = undefined;
        public Description:string ="";
        public Skills: string ="";
}

export class Skill{
    public SkillName:string ="";
}
export class Address{
    public street1:string ="";
    public street2:string="";
    public city:string ="";
    public pinCode:number=0;
}