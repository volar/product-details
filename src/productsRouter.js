const expres = require("express");
const routes = expres.Router();

//import the controller
const productsController = require("./productsController");

//This method will get all the Product form the product.json 
routes.get("/", (req, res) => {
  try {
    //calling the controller getProducts 
    //if error return the response as 400
    //if result return the response as 200 with status OK and  data as result
    productsController.getProducts((err, results) => {
      if(err){
        return res.status(400).send(err);
      }
      return res.status(200).send({status:"OK", data:results});
      });
    //Handle the exception return response as 400 with status as some error msg
  } catch (err) {
    return res.status(500).send("try after some time");
  }
});

//This method will get the product with given productId form the product.json 
routes.get("/:productId", (req, res) => {
  try {
    //get the productid from the req.params
    const productId = req.params.productId;
    
    //calling the controller getProductById method 
    //if error return the response as 400
    //if result return the response as 200 with status as OK and  data as result
    productsController.getProductById(productId, (err, product) => {
      if(err){
        return res.status(400).send(err);
      }
      return res.status(200).send({status:"OK", data:product});
    });

  } catch (err) {
    //Handle the exception return response as 400 with status as some error msg
    return res.status(400).send("Unexpected error occurred, try after some time", err);
  }
});

//This method will save/post a new product in the products.json 
routes.post("/", (req, res) => {
  try {
    //get all the productdetails from the req.body
    const productDetails = {
      name: req.body.name,
      description: req.body.description,
      price: req.body.price,
      quantity: req.body.quantity
    }
    //calling the controller saveProductDetails method 
    //if error return the response as 400
    //if result return the response as 201 with status as OK and  data as result
    productsController.saveProductDetails(productDetails, (err, results) => {
      if(err){
          return res.status(400).send(err);
      }
      return res.status(201).send({status:"OK", data:results});
    });
  } catch (err) {
    //Handle the exception return response as 400 with status as some error msg
    return res.status(400).send("Unexpected error occurred, try after some time", err);
  }
});


//This method will save/post a new product in the products.json 
routes.put("/:productId", (req, res) => {
  try {
    //get all the productdetails from the req.body
         //get the productid from the req.params
    const productId = req.params.productId;

    const productDetails = {
      id: productId,
      name: req.body.name,
      description: req.body.description,
      price: req.body.price,
      quantity: req.body.quantity
    }

    //calling the controller updateProductDetails method 
    //if error return the response as 400
    //if result return the response as 201 with status as OK and  data as result
    productsController.updateProductDetails(productDetails, (err, results) => {
      if(err){
          return res.status(400).send(err);
      }
      return res.status(201).send({status:"OK", data:results});
    });
  } catch (err) {
    //Handle the exception return response as 400 with status as some error msg
    return res.status(400).send("Unexpected error occurred, try after some time", err);
  }
});

//This method will delete product with specific productid from the product.json 
routes.delete("/:productId", (req, res) => {
  try {
     //get the productid from the req.params
   const productId = req.params.productId;

    //calling the controller deleteProductById method 
    //if error return the response as 400
    //if result return the response as 200 with status as OK and  data as result
    productsController.deleteProductById(productId, (err, results) => {
      if(err){
          return res.status(400).send(err);
      }
      return res.status(200).send({status:"OK", data:results});
    });

  } catch (err) {
     //Handle the exception return response as 400 with status as some error msg
    return res.status(400).send("Unexpected error occurred, try after some time", err);
  }
});

module.exports = routes;
