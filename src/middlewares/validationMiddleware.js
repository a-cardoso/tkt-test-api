const Joi = require('joi');

const { HTTP_BAD_REQUEST } = require('../constants/httpConstants');

exports.validatorsMiddleware = (callback) => {
    return (req, res, next) => {
        const customSchema = callback();

        const completeSchema = Joi
            .object()
            .keys({
                params: {},
                body: {},
                query: {},
                ...customSchema
            })
            .required();

        const inputs = {
            params: req.params,
            body: req.body,
            query: req.query
        };

        try {
            Joi.assert(inputs, completeSchema);
            next();
        } catch (err) {
            err.statusCode = HTTP_BAD_REQUEST;
            next(err);
        }
    };
};
