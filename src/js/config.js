function Config ($stateProvider, $urlRouterProvider) {

   $stateProvider
     .state('root', {
         abstract: true,
         templateUrl: 'templates/layout.tpl.html',
         controller: 'LayoutController as layoutVm'
     })
     .state('root.home', {
         url: '/home',
         templateUrl: 'templates/home.tpl.html',
         controller: 'HomeController as homeVm'
     })
     .state('root.about', {
         url: '/about',
         templateUrl: 'templates/about.tpl.html',
         controller: 'HomeController as homeVm'
     })
     .state('root.work', {
         url: '/work',
         templateUrl: 'templates/work.tpl.html',
         controller: 'HomeController as homeVm'
     })
     .state('page-not-found', {
         url: '/not-found',
         template: '<h2>No such page. Haha. Youre dumb.</h2>'
     });

   $urlRouterProvider.when('', '/home');
   $urlRouterProvider.otherwise('/not-found');
}

Config.$inject = ['$stateProvider', '$urlRouterProvider'];

export default Config;
