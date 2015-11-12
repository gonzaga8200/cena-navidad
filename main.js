var app = angular.module("cena", ["firebase","ui.router"]);

app.config(function($stateProvider, $urlRouterProvider){
    $stateProvider
      .state('create',{
        url:'/',
        views:{
          'main':{
            templateUrl:'templates/create.html',
            controller: 'RecipeController'
          }
        }
      })
      .state('list_24',{
        url:"/list-24",
        views:{
          'main':{
            templateUrl:'templates/list_24.html',
            controller: 'RecipeController'
          }
        }
      })
      .state('list_25',{
        url:"/list-25",
        views:{
          'main':{
            templateUrl:'templates/list_25.html',
            controller: 'RecipeController'
          }
        }
      })
      .state('list_26',{
        url:"/list-26",
        views:{
          'main':{
            templateUrl:'templates/list_26.html',
            controller: 'RecipeController'
          }
        }
      });
      $urlRouterProvider.otherwise('/');
})


app.controller('RecipeController',function($scope, $firebaseArray){
	var ref = new Firebase("https://cena-navidad.firebaseio.com");
  // download the data into a local object
  $scope.data = $firebaseArray(ref);

  $scope.addRecipe = function() {
    $scope.data.$add({
      dish: $scope.dish,
      name: $scope.name,
      type: $scope.type,
      class: $scope.class,
      date: $scope.date
    });
  };

	console.log($scope.data);
});