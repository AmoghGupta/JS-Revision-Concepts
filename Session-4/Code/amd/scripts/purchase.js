define(["scripts/credits", "scripts/products"], function (credits, products) {

    console.log("Function : purchaseProduct");

    return {
        purchaseProduct: function () {

            var credit = credits.getCredits();
            if (credit > 0) {
                products.reserveProduct();
                return true;
            }
            return false;
        }
    }
});

// define() is used to define modules for use in multiple locations.