var Deudor = require('./deudor');


exports.get = function (req, res) {
    Deudor.find({},{Cuenta:1, _id:0})
    .then(deudores => { var deudores2 = deudores.map(function(a){return a.Cuenta;})
    let deudores3 = deudores2.filter(X => X != '70C070-0072020300000342321170C070ARS')
    console.log(deudores3)


Deudor.find({Cuenta: {$nin:deudores3}})
.then(dedudorfiltered => {

    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.json(dedudorfiltered);

    })
    
});
}

// .map(function(a){return a._id;})


// Deudor.find({NroCliente: {$nin:deudores.$.NroCliente}})
// .then(dedudorfiltered => {

//     res.statusCode = 200;
//     res.setHeader('Content-Type', 'application/json');
//     res.json(dedudorfiltered);


// })