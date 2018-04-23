class SocialProfile {
    constructor(private currentCity:string,private homeTown:string,private email:string,public birthDay?:string,private age?:number) {
        this.currentCity = currentCity;
        this.homeTown = homeTown;
        this.email = email;
        this.birthDay = birthDay;
        this.age = age;
    }
    getAge = () => {
        return this.age;
    }
    
    getEmail = ():string => {
        return this.email;
    }
    changeemail = ():string => {
       return  this.email = "manojprabhakar@gmail.com";
    }
}

let fb = new SocialProfile("Bangalore","Nellore","manoj@gmail.com","june 7th",21);
console.log("Social Profile Data");
console.log("Birtday:",fb.birthDay);
console.log("Age:",fb.getAge())
console.log("Email:",fb.getEmail());
console.log("Email Updated:",fb.changeemail());


