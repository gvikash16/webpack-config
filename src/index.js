const car = {
    "brand":"maruti",
    "model":"swift",
    "version":"zxi"
}

const anotherCar = {
    ...car,
    "color": "white",
    "fuel": "petrol/cng"
}
console.log(car);
console.log(anotherCar)