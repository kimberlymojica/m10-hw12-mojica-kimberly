// YOUR CODE HERE
class Car {
    constructor(make,model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }
 
}

let mySweetRide = new Car ("Pontiac", "Fiero", 1988);

const honk = {
    car() {
        return 'beep beep!'
    }
};
 console.log(honk.car());

 setTimeout(() => {console.log("maintenance complete")}, 3000);





