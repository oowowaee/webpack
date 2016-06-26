module.exports = function(ngModule) {
  ngModule.config(AppConfig);
  
  AppConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
  function AppConfig($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('app', {
        url: '/home',
        template: require('./templates/home.html'),
        controller: 'MainCtrl',
        controllerAs: 'vm'
      });

    // if none of the above states are matched, use this as the fallback
    $urlRouterProvider.otherwise('/home');
  };
};