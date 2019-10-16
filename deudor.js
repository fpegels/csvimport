const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var Deudor = new Schema({
	nroLista: {
        type: String,
        required: true
	},
	Nombre: {
        type: String,
        required: true
	},
	NroCliente: {
        type: String,
        required: true
	},
	Cuenta: {
        type: String,
        required: true
	},
	Buffete: {
        type: String,
        required: true
	},
	Escenario: {
        type: String,
        required: true
	},
	Estado: {
        type: String,
        required: true
	},
	FechIngEsc: {
        type: String,
        required: true
	},
	Prod: {
        type: String,
        required: true
	},
	SitCont: {
        type: String,
        required: true
	},
	RiesgoTotal: {
        type: String,
        required: true
	},
	genDate: {
        type: Date,
        required: true
	}
},
{
    timestamps: true
});

module.exports = mongoose.model('Deudor', Deudor);