const express = require('express');

const { config } = require('./config/config.js');

const DEFAULT_PORT = 4000;

//app init
const app = express();

//app config
require('./init/init-database.js');
require('./init/init-middlewares.js')(app);
require('./init/init-routes')(app);

//app start
app.listen(config.SERVER_PORT || DEFAULT_PORT, () => {
    console.log(`Server running on port ${config.SERVER_PORT || DEFAULT_PORT}`);
});
