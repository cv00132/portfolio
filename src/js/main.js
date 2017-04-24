import angular from 'angular';
import 'angular-ui-router';
import angularMaterialize from 'angular-materialize';



import AppConfig from './config';
// import SERVER from './server';
// import setup from './setup';

//import AccountService from './services/account';

import LayoutController from './controllers/layout';
import HomeController from './controllers/home';



angular
    .module('app', ['ui.router', 'ui.materialize'])
    .config(AppConfig)
    .controller('LayoutController', LayoutController)
    .controller('HomeController', HomeController)
