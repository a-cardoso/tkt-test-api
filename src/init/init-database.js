const mongoose = require('mongoose');

const { config } = require('../config/config.js');

// import models
require('../routes/companies/companies.schema');

const mongoAtlasURI = `mongodb+srv://${config.DB_LOGIN}:${config.DB_PASS}@${config.DB_HOST}/${config.DB_NAME}?retryWrites=true&w=majority`;

mongoose.set('strictQuery', false);
mongoose.connect(mongoAtlasURI, {useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => console.log('database connected'))
    .catch(err => console.log(err));
