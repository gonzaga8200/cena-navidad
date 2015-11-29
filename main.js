var app = angular.module("cena", ["firebase","ui.router","toaster"]);

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


app.controller('RecipeController',function($scope, $firebaseArray, toaster, $window){
  var DB = "https://cena-navidaddev.firebaseio.com/";
  //var DB = "https://cena-navidad.firebaseio.com";
	var ref = new Firebase(DB);
  var ref2 = new Firebase(DB+"/-K4JNuzA18_ED-mFIX7U");
  // download the data into a local object
  $scope.data = $firebaseArray(ref);

  console.log($scope.data);

  $scope.test = $firebaseArray(ref2);


  $scope.removeDish = function (dish,name){
    var ref_dish = new Firebase(DB + '/'+dish);
    var deleteDish = $window.confirm('Estas seguro que deseas borrar '+name+'?');
    if (deleteDish){
      ref_dish.remove();
      toaster.pop('success', "El plato "+name+" ha sido borrado ", "Gracias");
    }
    
  }



  $scope.addRecipe = function() {
    $scope.data.$add({
      dish: $scope.dish,
      order: $scope.order,
      name: $scope.name,
      type: $scope.type,
      class: $scope.class,
      date: $scope.date
    });

    toaster.pop('success', "Plato generado con Exito", "Gracias "+$scope.name);
    $scope.dish = null; 
    $scope.name = null;
    $scope.type= null; 
    $scope.class = null;
    $scope.date = null; 
    $scope.order = null;
  };

	//console.log($scope.data);
});