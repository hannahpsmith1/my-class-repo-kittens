var cats = {
    raining: true,
    noise: "Woof!",
    var makeNoise: function(){
       if (cats.raining === true)
        return console.log(this.noise)
    }
}

var dogs = {
    raining: false,
    noise: "Meow!",
    var makeNoise: function(){
        if (dogs.raining === true)
        return console.log(this.noise)
    }
}

