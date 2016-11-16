(function(){

  // initialize angular
  var app = angular.module('gemStore', [ ]);

  // Gem objects
  var gems = [
    {
      name: 'Azurite',
      price: 205,
      description: 'Some gems have hidden qualities beyond their luster, beyond their shine... Azurite is one of those gems.',
      canPurchase: true,
      shine: 8,
      rarity: 7,
      color: '#CCC',
      faces: 14,
      images: [
          "images/gem-01.gif",
          "images/gem-02.gif",
          "images/gem-03.gif"
        ],
      reviews: [{
          stars: 5,
          body: "I love this gem!",
          author: "joe@example.org",
          createdOn: 1397490980837
        }, {
          stars: 1,
          body: "This gem sucks.",
          author: "tim@example.org",
          createdOn: 1397490980837
        }]
    },
    {
      name: 'Bloodstone',
      price: 859,
      description: 'Origin of the Bloodstone is unknown, hence its low value.',
      canPurchase: true,
      shine: 9,
      rarity: 6,
      color: '#EEE',
      faces: 12,
      images: [
        "images/gem-04.gif",
        "images/gem-05.gif",
        "images/gem-06.gif",
      ],
      reviews: [{
        stars: 3,
        body: "I think this gem was just OK, could honestly use more shine, IMO.",
        author: "JimmyDean@example.org",
        createdOn: 1397490980837
      }, {
        stars: 4,
        body: "Any gem with 12 faces is for me!",
        author: "gemsRock@example.org",
        createdOn: 1397490980837
      }]
    },
    {
      name: 'Zircon',
      price: 1150,
      description: 'This is the most beatiful gem on earth.',
      canPurchase: true,
      shine: 10,
      rarity: 6,
      color: '#EEE',
      faces: 12,
      images: [
        "images/gem-07.gif",
        "images/gem-08.gif",
        "images/gem-09.gif",
      ],
      reviews: [{
        stars: 3,
        body: "I think this gem was just OK, could honestly use more shine, IMO.",
        author: "JimmyDean@example.org",
        createdOn: 1397490980837
      }, {
        stars: 4,
        body: "Any gem with 12 faces is for me!",
        author: "gemsRock@example.org",
        createdOn: 1397490980837
      }]
    }
  ];

  // controller for Store
  app.controller('StoreController', function(){

    // set the products as the Gem objects
    this.products = gems;
  });

  // controller for Panels
  app.controller("PanelController", function(){

    // set the tab to #1 (Description)
    this.tab = 1;

    // selectTab function set tab to a seected tab
    this.selectTab = function(setTab){
      // tab is setted to active tab
      this.tab = setTab;
    };

    // if tab is selected the function return checked tab
    this.isSelected = function(checkTab){
      // return tab
      return this.tab === checkTab;
    };

  });

  // controller for Reviews
  app.controller("ReviewController", function(){

    // new review object
    this.review = {};

    // add Review function
    this.addReview = function(product){
      this.review.createdOn = Date.now(); // add timestamp
      product.reviews.push(this.review); // push the content into review fields
      this.review = {}; //reset the form
    };

  });

  app.directive('productTitle', function(){
    return{
      restrict: 'A',
      templateUrl: 'partials/product-title.html'
    };
  });

  app.directive('productPanels', function(){
    return{
      restrict: 'E',
      templateUrl: 'partials/product-panels.html'
    };
  });

})();
