/* [id , brand , model , type , pricePerDay, available]
Let carBooking =[
    [1,’Toyota’, ‘Corolla’ , ‘Sedan’ ,50 ,10],
        [2,’Honda’, ‘Civic’ , ‘Sedan’ ,55 ,8],
        [3,’Ford’, ‘Mustang’ , ‘Sports Car’ ,80 ,5],
        [4,’Jeep’, ‘Wrangler’ , ‘SUV’ ,70 ,7],
        [5,’Nissan’, ‘Altima’ , ‘Sedan’ ,45 ,12]
]; */

//print all car brands
 carBooking =[
    [1,'Toyota', 'Corolla' , 'Sedan' ,50 ,10],
        [2,'Honda', 'Civic' , 'Sedan' ,55 ,8],
        [3,'Ford', 'Mustang' , 'Sports Car' ,80 ,5],
        [4,'Jeep', 'Wrangler' , 'SUV' ,70 ,7],
        [5,'Nissan', 'Altima' , 'Sedan' ,45 ,12]
];

brands = carBooking.map(car =>car[1]).forEach(car => {
    console.log(car);
});

// print total number of cars available

console.log(carBooking.length);

// print sedan cars details

sedan=carBooking.filter(car=>car[3]=='Sedan')
console.log(sedan);

// print cars with price per day greater than 60.

price = carBooking.filter(car=>car[4]>60).forEach(car=>{console.log(car);})

//print details of 'jeep wrangler'

jeep=carBooking.filter(car=>car[1]=='Jeep')
console.log(jeep);

//Sort cars based on descending order of the price per day

carBooking.sort((car1,car2)=>car2[4]-car1[4])
console.log(carBooking);

////Sort cars based on ascending order of available cars

carBooking.sort((car1,car2)=>car1[5]-car2[5])
console.log(carBooking);

//find the car with the most available cars

available = carBooking.reduce((car1,car2)=>car1[5]>car2[5]?car1:car2)
console.log(available);

//count the number of sedan cars

sum=carBooking.map(av=>av[5]).reduce((av1,av2)=>av1+av2)
console.log(sum);

