function LayoutController () {
   let vm = this;

   vm.hamburgerToggle = hamburgerToggle;

   function hamburgerToggle(){
       var hamburgerMenu = angular.element( document.querySelector( '.navbar-menu' ) );
       hamburgerMenu.toggleClass('is-active');

   }
}

LayoutController.$inject = [];

export default LayoutController;
