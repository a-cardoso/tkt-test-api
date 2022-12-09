const companiesRoutes = require('../routes/companies/companies.routes');

module.exports = exports = (app) => {
    app.use('/api/companies', companiesRoutes);
};
