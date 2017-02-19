
module.config(["$stateProvider","$urlRouterProvider",function ($stateProvider,$urlRouterProvider){

	$urlRouterProvider.otherwise('/');

    $stateProvider

        .state('home', {
            url: '/'
        })

        .state('about', {
            // we'll get to this in a bit       
        });
}]);
