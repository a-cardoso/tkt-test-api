const express = require('express');

const validators = require('./companies.validators');
const controllers = require('./companies.controllers');

const router = express.Router();

//todo: add, delete, filter, sort, 'add result', 'endpoint to compare', pagination, swagger
//todo: removed fixed limit of 10

router.route('/')
    .get(controllers.readManyCompanies) //get with pagination/filter/sort in params
    .post(validators.createOneCompany, controllers.createOneCompany) //add new company
;

router.route('/:companyId')
    .get(validators.readOneCompanyById, controllers.readOneCompanyById) //get data from one company by _id
    .delete(validators.deleteOneCompanyById, controllers.deleteOneCompanyById) //delete a company by _id
;

router.route('/result/add/:companyId')
    .post() //push new result
;

module.exports = router;
