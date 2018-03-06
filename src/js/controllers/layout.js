function LayoutController () {
   let vm = this;

   vm.hamburgerToggle = hamburgerToggle;
   vm.pageLoader = pageLoader;

   function hamburgerToggle(){
       var hamburgerMenu = angular.element( document.querySelector( '.navbar-menu' ) );
       hamburgerMenu.toggleClass('is-active');
   };

    function pageLoader(){
        document.addEventListener("DOMContentLoaded", function(event) {
            var element = document.getElementById("page-loader");
            element.parentNode.removeChild(element);
        });
    };

    vm.pageLoader();
}

LayoutController.$inject = [];

export default LayoutController;
