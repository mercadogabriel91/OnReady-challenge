//Car array
let carArr = [
    {
        marca: 'Peugeot',
        modelo: '206',
        puertas: 4,
        precio: 200000
    },
    {
        marca: 'Peugeot',
        modelo: '208',
        puertas: 5,
        precio: 250000
    },
]

//Bike array
let bikeArr = [
    {
        marca: 'Honda',
        modelo: 'Titan',
        cilindrada: '125cc',
        precio: 60000
    },
    {
        marca: 'Yamaha',
        modelo: 'YBR',
        cilindrada: '160cc',
        precio: 80500
    }
]

console.log(carArr)
console.log(bikeArr)

console.log(`=================================================================`)

// Function to find the most expensive car
const mostExp = (arg) => {
    let priceArr;
    let highPrice;
    let index

    priceArr = arg.map((item) => {
        return item.precio
    })

    highPrice = Math.max(...priceArr)

    index = arg.findIndex(item => item.precio === highPrice)

    console.log(`Vehículo más caro: ${arg[index].marca} ${arg[index].modelo}`)
}
mostExp(carArr)

//Function to find the cheapest bike
const cheapBike = (arg) => {
    let priceArr;
    let lowPrice;
    let index

    priceArr = arg.map((item) => {
        return item.precio
    })

    lowPrice = Math.min(...priceArr)

    index = arg.findIndex(item => item.precio === lowPrice)

    console.log(`Vehículo más barato: ${arg[index].marca} ${arg[index].modelo}`)
}
cheapBike(bikeArr)

//Function to find a given string character
const findOne = (string, array) => {
    let obj = array.find(item => item.modelo.includes(string))
    console.log(`Vehículo que contiene en el modelo la letra '${string}' ${obj.marca} ${obj.modelo} $${obj.precio}`)
}
findOne('Y', bikeArr)

console.log(`=================================================================`)

console.log(`Vehículos ordenados por precio de mayor a menor:`)

//Function to sort cars by price. 
const carSort = (array) => {
    let sortedItems;

    sortedItems = array.sort((a, b) => (a.precio > b.precio) ? 1 : -1).reverse()

    sortedItems.map((item) => {
        console.log(`${item.marca} ${item.modelo}`)
    })
}
carSort(carArr)
carSort(bikeArr)