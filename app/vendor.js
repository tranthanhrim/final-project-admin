bookSellingApp.controller('mainController', function ($scope, $http, $state, $stateParams, $mdDialog, $mdToast, bookSellingService, $window) {
  var vm = this;
  vm.init = init;
  vm.nextPage = nextPage;
  function init() {
    vm.header = 'Header của page';
    vm.body = 'Nội dung page - trang 1';
  }

  function nextPage() {
    $state.go('product-table');
  }
});
bookSellingApp.controller('productManagementController', function ($scope, $http, $state, $stateParams, $mdDialog, $mdToast, bookSellingService) {
  var vm = this;
  vm.init = init;
  vm.showDialogAddProduct = showDialogAddProduct;
  vm.productList = [];
  function init() {
    vm.header = 'Header của page';
    vm.body = 'Nội dung page - trang 1';
  }

  function showDialogAddProduct(event) {
    bookSellingService.showMdDialog(DialogAddProductController, 'module/dialog/dialog-add-product.html', event, null, false);
  }
});
bookSellingApp.controller('productTableController', function ($scope, $http, $state, $stateParams, $mdDialog, $mdToast, bookSellingService, $window) {
  var vm = this;
  vm.init = init;

  function init() {
    vm.body = 'Nội dung page - trang 2';
  }
});