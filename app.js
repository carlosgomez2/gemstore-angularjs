(function(){
  
  var app = angular.module('gemStore', [ ]);

  app.controller('StoreController', function(){
    this.products = gems;  
  });
  
  var gems = [
    {
      name: 'Dodecaedron',
      price: 2,
      description: 'lorem ipsum ipsum lorem',
      canPurchase: true
    },
    {
      name: 'Pentagonal Gem',
      price: 5.95,
      description: 'lorem ipsum lorem ipsum',
      canPurchase: true
    }
  ];
  
})();

