const mongoose = require('mongoose');

const Companies = mongoose.model('Companies');

async function readManyCompanies() {
    try {
        return Companies.find({}).limit(10).lean();
    } catch (err) {
        console.log(err);
        return false;
    }
}

async function readOneCompanyById(companyId) {
    try {
        const query = { _id: mongoose.Types.ObjectId(companyId) };

        return Companies.findOne(query).lean();
    } catch (err) {
        console.log(err);
        return false;
    }
}

async function createOneCompany(data) {
    try {
        const company = new Companies({
            name: data.name,
            sector: data.sector,
            siren: data.siren,
            results: data.results
        });

        const newCompany = await company.save();

        return newCompany.toJSON();
    } catch (err) {
        console.log(err);
        return false;
    }
}

async function deleteOneCompanyById(companyId) {
    try {
        const query = { _id: mongoose.Types.ObjectId(companyId) };

        return Companies.deleteOne(query).lean();
    } catch (err) {
        console.log(err);
        return false;
    }
}

module.exports.readManyCompanies = readManyCompanies;
module.exports.readOneCompanyById = readOneCompanyById;
module.exports.createOneCompany = createOneCompany;
module.exports.deleteOneCompanyById = deleteOneCompanyById;
