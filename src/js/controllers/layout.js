function LayoutController () {
   let vm = this;

   vm.hamburgerToggle = hamburgerToggle;

   function hamburgerToggle(){
       console.log("btn clicked")
       var hamburgerMenu = angular.element( document.querySelector( '.navbar-menu' ) );
       hamburgerMenu.toggleClass('is-active');

   }
}

LayoutController.$inject = [];

export default LayoutController;
