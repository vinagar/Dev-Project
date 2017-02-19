
module.config(["$stateProvider","$urlRouterProvider",config]);

function config($stateProvider,$urlRouterProvider){

	$urlRouterProvider.otherwise('/');

    $stateProvider

        .state('home', {
            url: '/',
			templateUrl : 'core/home.html'
        })

        .state('about', {
            // we'll get to this in a bit       
        });
}
