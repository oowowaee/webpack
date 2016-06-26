module.exports = function(ngModule) {
  ngModule.controller('MainCtrl', MainCtrl);
  
  MainCtrl.$inject = [];
  function MainCtrl() {
    vm = this;
    vm.var = 'abcd';
  };
};