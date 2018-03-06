function LayoutController () {
   let vm = this;

   var myVar = vm.myVar;
   vm.hamburgerToggle = hamburgerToggle;
   vm.loadPage = loadPage;

   function loadPage () {
       vm.myVar = setTimeout(showPage, 3000);

        function showPage() {
          angular.element(document.querySelector("loader").style.display = "none");
          angular.element(document.querySelector("myDiv").style.display = "block");
          document.getElementById("myDiv").style.display = "block";
        }
   }

   function hamburgerToggle(){
       var hamburgerMenu = angular.element( document.querySelector( '.navbar-menu' ) );
       hamburgerMenu.toggleClass('is-active');

   }
}

LayoutController.$inject = [];

export default LayoutController;
