const mongoose = require('mongoose')
mongoose.Promise = global.Promise

const url = process.env.MONGOLAB_URI ? process.env.MONGOLAB_URI : 'mongodb://localhost/mymoney'
//module.exports = mongoose.connect(encodeURI(url), { useNewUrlParser: true })
console.log(url)
module.exports = mongoose.connect('mongodb://@ds155862.mlab.com:55862/heroku_1vbrm3fb', {
    auth: {
      user: "mymoneyapp",
      password: "Qwe@96845255"
    },
    useNewUrlParser:true
      }).then(
        () => { 
            console.log("Database connected");
        },
        err => { 
            /** handle initial connection error */ 
            console.log("Error in database connection. ", err);
        }
    );

mongoose.Error.messages.general.required = "O atributo '{PATH}' é obrigatório."
mongoose.Error.messages.Number.min =
    "O '{VALUE}' informado é menor que o limite mínimo de '{MIN}'."
mongoose.Error.messages.Number.max =
    "O '{VALUE}' informado é maior que o limite máximo de '{MAX}'."
mongoose.Error.messages.String.enum =
    "'{VALUE}' não é válido para o atributo '{PATH}'."