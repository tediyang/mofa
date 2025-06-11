$((function () {
  /**
   * Handles the navigation for the admin dashboard by:
   * - Closing all dropdown menus on mouseleave event for desktop
   * - Closing all dropdown menus on click event for tablet
   * - Resetting the toggle buttons on mouseleave event for desktop
   * - Resetting the toggle buttons on click event for tablet
   * - Listening for window resize event and re-evaluating the state on change
   *
   * @return {void}
   */
  function handleNavigation() {
    const $asideDashboard = $(".aside-dashboard");
    const $campaignsToggle = $("#campaigns-toggle");
    const $blogsToggle = $("#blogs-toggle");
    const $campaignDropdownMenu = $(".campaign-dropdown-menu");
    const $blogDropdownMenu = $(".blog-dropdown-menu");
    const $asideToggle = $(".aside-toggle").find(".fa-chevron-left");

    // Desktop media query
    const desktopMediaQuery = window.matchMedia("(min-width: 992px)");

    // Helper function to close all dropdowns and reset toggles
    function closeAllDropdowns() {
      $campaignDropdownMenu.slideUp(200);
      $blogDropdownMenu.slideUp(200);
      $campaignsToggle.removeClass("open");
      $blogsToggle.removeClass("open");
    }

    // Handle mouseleave event for desktop
    $asideDashboard.on("mouseleave", function () {
      if (desktopMediaQuery.matches) {
        closeAllDropdowns();
      }
    });

    // Handle click event for the aside toggle for tablet
    $asideToggle.on("click", function () {
      if (!desktopMediaQuery.matches) {
        closeAllDropdowns();
      }
    });

    // Add a listener to re-evaluate on window resize
    desktopMediaQuery.addEventListener("change", function (event) {
      if (!event.matches) {
        closeAllDropdowns();
      }
    });
  }

  /**
   * Handles the sub navigation of the admin dashboard by:
   * - Toggling the open class on the campaign and blog toggles
   * - Sliding up or down the respective campaign and blog dropdown menus
   *
   * @return {void}
   */
  function handleSubNavigation() {
    const $campaignToggle = $("#campaigns-toggle");
    const $blogToggle = $("#blogs-toggle");

    const $campaignDropdown = $campaignToggle.next(".campaign-dropdown-menu");
    const $blogDropdown = $blogToggle.next(".blog-dropdown-menu");

    if ($campaignToggle.length) {
      $campaignToggle.on("click", function () {
        $(this).toggleClass("open");

        if ($campaignDropdown.length) {
          $campaignDropdown.slideToggle(300);
        }
      });
    }

    if ($blogToggle.length) {
      $blogToggle.on("click", function () {
        $(this).toggleClass("open");

        if ($blogDropdown.length) {
          $blogDropdown.slideToggle(300);
        }
      });
    }
  }
  // Initialize navigation and sub-navigation handlers
  handleNavigation();
  handleSubNavigation();
}));
