const createProductValidationSchema = require("./createProductValidationSchema");
const getProductsValidationSchema = require("./getProductsValidationSchema");
const getProductValidationSchema = require("./getProductValidationSchema");
const updateProductValidationSchema = require("./updateProductValidationSchema");
const deleteProductValidationSchema = require("./deleteProductValidationSchema");
const publishProductValidationSchema = require("./publishProductValidationSchema");
const getFilteredProductsValidationSchema = require("./getFilteredProductsValidationSchema");
const bulkCreateProductValidationSchema = require("./bulkCreateProductValidationSchema");

module.exports = {
  createProductValidationSchema,
  getProductsValidationSchema,
  getProductValidationSchema,
  updateProductValidationSchema,
  deleteProductValidationSchema,
  publishProductValidationSchema,
  getFilteredProductsValidationSchema,
  bulkCreateProductValidationSchema,
};
