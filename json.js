/// JSON.Stringify:::: convert object to json string 

const users = {
    id : 1,
    name : "Shermin",
    job : "WebDeveloper",
    address : "Tangail"

}
console.log(users) // output: { id: 1, name: 'Shermin', job: 'WebDeveloper', address: 'Tangail' }


const result = JSON.stringify(users);
console.log(result);


// no----2:

const shop = {
    Owner : "Alia",
    Adress : {
        Street : "Rampur",
        City : "Dhaka",
        Country : "BD"

    },
    Products : ["Laptop", "Mic", "Mouse", "Monitor", "Keyboard"  ],
    Revenue : 450000,
    isOpen : true,
    isNew : false
}

console.log(shop);

const shopJSON = JSON.stringify(shop);
console.log(shopJSON);