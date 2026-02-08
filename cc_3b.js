//Created the Array for inventory

let inventory = [
    {
        Sku: "SKU-002",
        Name: "Owala",
        Price: 40,
        Stock: 5

    },

    {
        Sku: "SKU-003",
        Name: "Stanley",
        Price: 35,
        Stock: 10
    },

    {
        Sku: "SKU-004",
        Name: "Larq",
        Price: 100,
        Stock: 13
    },

    {
        Sku: "SKU-005",
        Name: "Hydro Jug",
        Price: 45,
        Stock: 5
    }
];

// forEach with template literals
inventory.forEach(function(prod) {
    console.log(`${prod.Sku} | ${prod.Name} | $${prod.Price} | ${prod.Stock}`)
});
