//import the DAO layer
const productsDao = require('./productsDao');

const getProducts = function(done){
  //call dao getproducts method and pass the parameter
  productsDao.getProducts(done);
}

const getProductById = function(id, done){
  //call dao getProductById method and pass the parameter
  productsDao.getProductById(id, done);
 
}
const saveProductDetails = function(productDetails, done){
  //call dao saveProductDetails method and pass the parameter
  productsDao.saveProductDetails(productDetails, done);
}


const deleteProductById = (productId, done) => {
  //call dao deleteProductById method and pass the parameter
  productsDao.deleteProductById(productId, done);
}

const updateProductDetails = (productDetails, done) => {
  //call dao deleteProductById method and pass the parameter
  productsDao.updateProductDetails(productDetails, done);
}

module.exports = {
  getProducts, getProductById, saveProductDetails, updateProductDetails, deleteProductById
}
