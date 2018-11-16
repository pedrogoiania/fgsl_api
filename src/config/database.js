const env = require('../.env')
const mongoose = require('mongoose')
mongoose.Promise = global.Promise
mongoose.set('useFindAndModify', false)
const headers = {}
if (env.ambient == 'dev') {
    module.exports = mongoose.connect('mongodb://localhost/fgsl_db')
} else if (env.ambient == 'prod') {
    module.exports = mongoose.connect('mongodb://localhost/fgsl_db')
}
mongoose.Error.messages.general.required = "O atributo {PATH} é obrigatório."