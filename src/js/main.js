import angular from 'angular';
import 'angular-ui-router';

import AppConfig from './config';

import LayoutController from './controllers/layout';
import HomeController from './controllers/home';
import ConnectController from './controllers/connect';
import WorkController from './controllers/work';


angular
    .module('app', ['ui.router'])
    .config(AppConfig)
    .controller('LayoutController', LayoutController)
    .controller('HomeController', HomeController)
    .controller('ConnectController', ConnectController)
    .controller('WorkController', WorkController)
