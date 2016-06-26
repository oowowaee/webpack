module.exports = function(ngModule) {
  ngModule.directive('testDirective', function() {
    return {
      restrict: 'E',
      scope: {},
      template: require('./test-directive.html'),
      controllerAs: 'vm',
      controller: function() {
        var vm = this;
        vm.testString = 'Test String';
      }
    };
  });
};