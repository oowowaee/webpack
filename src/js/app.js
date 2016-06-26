var angular         = require('angular');
var angularMaterial = require('angular-material');
var uiRouter        = require('angular-ui-router');
require('jquery'); 
require('../../node_modules/materialize-css/dist/js/materialize.js');

var app = angular
  .module('app', [angularMaterial, uiRouter]);

require('./config')(app);
require('./directives')(app);
require('./controllers')(app);
require('../scss/project.scss');
