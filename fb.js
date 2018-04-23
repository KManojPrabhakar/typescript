var SocialProfile = /** @class */ (function () {
    function SocialProfile(currentCity, homeTown, email, birthDay, age) {
        var _this = this;
        this.currentCity = currentCity;
        this.homeTown = homeTown;
        this.email = email;
        this.birthDay = birthDay;
        this.age = age;
        this.getAge = function () {
            return _this.age;
        };
        this.getEmail = function () {
            return _this.email;
        };
        this.changeemail = function () {
            return _this.email = "manojprabhakar@gmail.com";
        };
        this.currentCity = currentCity;
        this.homeTown = homeTown;
        this.email = email;
        this.birthDay = birthDay;
        this.age = age;
    }
    return SocialProfile;
}());
var fb = new SocialProfile("Bangalore", "Nellore", "manoj@gmail.com", "june 7th", 21);
console.log("Social Profile Data");
console.log("Birtday:", fb.birthDay);
console.log("Age:", fb.getAge());
console.log("Email:", fb.getEmail());
console.log("Email Updated:", fb.changeemail());
