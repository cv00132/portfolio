import angular from 'angular';
import 'angular-ui-router';
import 'angular-materialize';



import AppConfig from './config';
// import SERVER from './server';
// import setup from './setup';

//import AccountService from './services/account';

import LayoutController from './controllers/layout';
import HomeController from './controllers/home';
import AboutController from './controllers/about';
import WorkController from './controllers/work';



angular
    .module('app', ['ui.router', 'ui.materialize'])
    .config(AppConfig)
    .controller('LayoutController', LayoutController)
    .controller('HomeController', HomeController)
    .controller('AboutController', AboutController)
    .controller('WorkController',WorkController)
