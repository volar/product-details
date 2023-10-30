
//import fs module
const fs = require('fs');

//The getProducts function take done as callback
//It will read the product.json file

const getProducts = function(done){
//parse the filecontent and save it in another varible say productdata
//return the callback with first parameter as undefined and second parameter as productdata
      
    fs.readFile('src/products.json', 'utf-8', (err, data) => {
      if (err) {
          return done("Unable to read products.json file"); 
          // done(err);
      } else {
          let productsData = JSON.parse(data);
          done(null, productsData);
      }
    });
}


//The function getProductById will take two parameters first the id and second the callback
//It will read the product.json file
const getProductById = function(id,done){
    //write all the logical steps
    //return the callback with first parameter as undefined and second parameter as productDetails
    fs.readFile('src/products.json', 'utf-8', (err, data) => {
      if (err) {
          return done("Exception occurred while getting product details"); 
          // done(err);
      } else {
          let products = JSON.parse(data);
          const product = products.find(prdct => prdct.id == id);
          if(product === undefined) {
              return done("No product found for the given productId");
          } 

          return done(undefined, product);
          
      }
  }); 
}


//The saveProductDetails method will take productDetails and done as callback
//It will read the product.json file
const saveProductDetails = function (ProductDetails, done) {
  //write all the logical steps
  //parse the filecontent and save it in another varible say productdata
  //push the productDetails in the productData
      
  //Write the productData into the file 
     
    //return the callback with undefined and ProductDetails
    fs.readFile('src/products.json', (err, fileContent) => {
        if (err) {
            return done("Exception occurred while getting product details"); 
            // done(err);
        }
        let products = JSON.parse(fileContent);

        ProductDetails = { id: products.length + 1, ...ProductDetails }
        const index = products.length;
        // add id to the productDetail


        products.push(ProductDetails);

        console.log("ProductDetails", parseInt(ProductDetails.id));
        fs.writeFile('src/products.json', JSON.stringify(products), (err, updatedContent) => {
            if(err) {
                return done("Exception occurred while updating user details");
            }
            return done(undefined, ProductDetails);
        });
    });
}

//The method deleteProductById will take productId and done as parameters
//It will read the product.json file

const deleteProductById = function(productId, done){
    //Write all the logical steps
    //return the callback with first parameter as undefined and second parameter as productDetails
    fs.readFile('src/products.json', (err, fileContent) => {
        if (err) {
            return done("Exception occurred while getting product details"); 
            // done(err);
        }
        let products = JSON.parse(fileContent);

        const index = products.findIndex(prodct => prodct.id == productId);
        if(index === -1) {
            return done("No Product with productId found");
        }

        products.splice(index, 1);
        fs.writeFile('src/products.json', JSON.stringify(products), (err, updatedContent) => {
            if(err) {
                return done("Exception occurred while deleting products details");
            }
            return done(undefined, "Product was deleted successfully");
        });
    });
}

//The method deleteProductById will take productId and done as parameters
//It will read the product.json file

const updateProductDetails = function(ProductDetails, done){
    //Write all the logical steps
    //return the callback with first parameter as undefined and second parameter as productDetails
    fs.readFile('src/products.json', (err, fileContent) => {
        if (err) {
            return done("Exception occurred while getting product details"); 
            // done(err);
        }
        let products = JSON.parse(fileContent);

        const index = products.findIndex(prodct => prodct.id == parseInt(ProductDetails.id));
        if(index === -1) {
            return done("No Product with productId found");
        }

        products[index] = ProductDetails;
        fs.writeFile('src/products.json', JSON.stringify(products), (err, updatedContent) => {
            if(err) {
                return done("Exception occurred while updating products details");
            }
            return done(undefined, products[index]);
        });
    });
}

module.exports ={
    getProducts,
    getProductById,
    saveProductDetails,
    deleteProductById,
    updateProductDetails
}