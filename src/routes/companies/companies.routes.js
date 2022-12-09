const express = require('express');

const validators = require('./companies.validators');
const controllers = require('./companies.controllers');

const router = express.Router();

//create one
router.route('/create')
    .post(validators.createOneCompany, controllers.createOneCompany) //add new company
;

//readMany - filters/sort (pagination)
router.route('/')
    .get(controllers.readManyCompanies);

//get one by ID
router.route('/read/:companyId')
    .get(validators.readOneCompanyById, controllers.readOneCompanyById)
;

//delete one by ID
router.route('/delete/:companyId')
    .delete(validators.deleteOneCompanyById, controllers.deleteOneCompanyById)
;

//push a result
// router.route('/result/add/:companyId')
//     .post()
// ;

module.exports = router;
