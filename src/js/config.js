function AppConfig ($stateProvider, $urlRouterProvider) {

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
     .state('root.resume', {
         url: '/resume',
         templateUrl: 'templates/resume.tpl.html',
         controller: 'ResumeController as resumeVm'
     })
     .state('root.work', {
         url: '/work',
         templateUrl: 'templates/work.tpl.html',
         controller: 'WorkController as workVm'
     })
     .state('root.page-not-found', {
         url: '/not-found',
         template: '<h2>No such page.</h2>'
     });

   $urlRouterProvider.when('/', '/home');
   $urlRouterProvider.otherwise('/not-found');
}

AppConfig.$inject = ['$stateProvider', '$urlRouterProvider'];

export default AppConfig;
