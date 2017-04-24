(function(){
    
    angular.module("products",[]);
    
    angular.module("products").controller("productsCtrl", ["productsSvc",productsCtrl]);
    
    angular.module("products").service("productsSvc", ["$http","$q",productsSvc]);
    
    function productsCtrl(productsSvc){
        
        var pc = this;
        productsSvc.getProducts().then(function(response){
                pc.myProducts = response;
            }).catch(function(response){
                
            }).finally(function(response){
            
        });
        
       
    }
    
    function productsSvc($http, $q){
        
        var ps = this;
        var dfd = $q.defer();
        ps.getProducts = function(){
            $http.get("api/products.json").then(function(response){
                dfd.resolve(response.data.products);
            }).catch(function(response){
                dfd.reject({message:"Error"})
            });
            return dfd.promise;
        }
    }
    
})();