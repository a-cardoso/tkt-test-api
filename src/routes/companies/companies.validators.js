const Joi = require('joi');

const { validatorsMiddleware } = require('../../middlewares/validationMiddleware');

const ID_LENGTH = 24;

const idSchema = Joi
    .string()
    .hex()
    .length(ID_LENGTH)

const nameSchema = Joi
    .string()
    .alphanum()

const sectorSchema = Joi
    .string()
    .alphanum()

const sirenSchema = Joi
    .number()

const caSchema = Joi
    .number()

const marginSchema = Joi
    .number()

const ebitdaSchema = Joi
    .number()

const lossSchema = Joi
    .number()

const yearSchema = Joi
    .number()

const resultSchema = Joi.object().keys({
    ca: caSchema.required(),
    margin: marginSchema.required(),
    ebitda: ebitdaSchema.required(),
    loss: lossSchema.required(),
    year: yearSchema.required()
});

const resultsSchema = Joi
    .array()
    .items(resultSchema);

const readOneCompanyById = validatorsMiddleware(() => {
    return {
        params: Joi
            .object()
            .keys({
                companyId: idSchema.required()
            })
            .required()
    };
});

const createOneCompany = validatorsMiddleware(() => {
    return {
        body: Joi
            .object()
            .keys({
                name: nameSchema.required(),
                sector: sectorSchema.required(),
                siren: sirenSchema.required(),
                results: resultsSchema,
            })
            .required()
    };
});

const deleteOneCompanyById = validatorsMiddleware(() => {
    return {
        params: Joi
            .object()
            .keys({
                companyId: idSchema.required()
            })
            .required()
    };
});

module.exports.readOneCompanyById = readOneCompanyById;
module.exports.createOneCompany = createOneCompany;
module.exports.deleteOneCompanyById = deleteOneCompanyById;
