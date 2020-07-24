const Shape = require("./vehicle");

class Car extends Vehicle {
    constructor (carColor, passengers, useHorn, checkPassengers){
        const carColor = color;
        const passengers = passengers;
        const useHorn = useHorn;

        checkPassengers();
            const checkPassengers = numPassengers(() => {
              if (this.passengers > 4) {
                console.log("Finished cooking all orders!");
              }
            }
              
        super(carColor, passengers, useHorn, checkPassengers);

        this.carColor = color;
        this.passengers = passengers;
        this.useHorn = useHorn;
        this.checkPassengers = numPassengers; 
        this.useHorn = useHorn;

    }
}


const car = new Car ("red", 5, "beep beep")
car.printInfo();
console.log(car);