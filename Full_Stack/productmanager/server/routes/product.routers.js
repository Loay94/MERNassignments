const ProductController = require("../controllers/product.controller");

module.exports = function(app){
    app.get('/api',ProductController.index);
    app.post('/addproduct', ProductController.createProduct);
    app.get('/addproduct', ProductController.getAllProduct);
    app.get('/product/:id', ProductController.getProduct);


}