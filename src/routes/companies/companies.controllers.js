const services = require('./companies.services');

const httpConstants = require('../../constants/httpConstants');

async function readManyCompanies(req, res) {
    const companies = await services.readManyCompanies();

    if (!companies) {
        res.status(httpConstants.HTTP_NOT_FOUND).send({ message: 'companies not found' });
    }

    res.send(companies);
}

async function readOneCompanyById(req, res) {
    const companyId = req.params.companyId;

    const company = await services.readOneCompanyById(companyId);

    if (!company) {
        res.status(httpConstants.HTTP_NOT_FOUND).send({ message: 'company not found' });
    }

    res.send(company);
}

async function createOneCompany(req, res) {
    const newCompany = {
        name: req.body.name,
        sector: req.body.sector,
        siren: req.body.siren,
        results: req.body.results,
    };

    const company = await services.createOneCompany(newCompany);

    if (!company) {
        res.status(httpConstants.HTTP_INTERNAL_SERVER_ERROR).send({ message: 'company creation error' });
    } else {
        res.status(httpConstants.HTTP_CREATED).send(company);
    }
}

async function deleteOneCompanyById(req, res) {
    const companyId = req.params.companyId;

    const result = await services.deleteOneCompanyById(companyId);

    if (!result) {
        res.status(httpConstants.HTTP_NOT_FOUND).send({ message: 'company not found' });
    }

    res.send(result);
}

module.exports.readManyCompanies = readManyCompanies;
module.exports.readOneCompanyById = readOneCompanyById;
module.exports.createOneCompany = createOneCompany;
module.exports.deleteOneCompanyById = deleteOneCompanyById;
