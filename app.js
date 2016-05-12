(function(){
  
  var app = angular.module('gemStore', [ ]);

  app.controller('StoreController', function(){
    this.product = gems;  
  });
  
  var gems = [
    {
      name: 'Dodecaedro',
      price: 2.95,
      description: 'lorem ipsum ipsum lorem',
      canPurchase: false,
    },
    {
      name: 'Pentagonal Gem',
      price: 5.95,
      description: 'lorem ipsum lorem ipsum',
      canPurchase: false,
    }
  ]
  
})();

