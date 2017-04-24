import angular from 'angular';
import 'angular-ui-router';



import AppConfig from './config';
// import SERVER from './server';
// import setup from './setup';

//import AccountService from './services/account';

import LayoutController from './controllers/layout';
//import UserController from './controllers/user';



angular
    .module('app', ['ui.router'])
    .config(AppConfig)
