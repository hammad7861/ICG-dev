const Joi = require("joi");
const { ALLOWED_MIME_TYPES } = require("../../constants");

const updateEventValidationSchema = {
  params: Joi.object({
    brochureId: Joi.string().alphanum().length(24).required(),
  }),
  body: Joi.object({
    title: Joi.string().required(),
    author: Joi.string().required(),
    publishDate: Joi.date().required(),
    category: Joi.string().required(),
    published: Joi.boolean().required(),
  }),
  file: Joi.object({
    originalname: Joi.string().required(),
    mimetype: Joi.string()
      .valid(...ALLOWED_MIME_TYPES.brochureAttachment)
      .required(),
    fieldname: Joi.string().valid("brochureAttachment").required(),
    encoding: Joi.string().required(),
    destination: Joi.string().required(),
    filename: Joi.string().required(),
    path: Joi.string().required(),
    size: Joi.number().required(),
  })
    .optional()
    .label("brochureAttachment"),
};

module.exports = updateEventValidationSchema;
