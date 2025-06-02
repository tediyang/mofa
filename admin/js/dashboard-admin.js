$(function () {
  /**
   * Fetches the current admin user for the dashboard.
   *
   * For now, this function just returns a mock admin object for testing.
   * When the API is ready, this should be replaced with a call to the relevant endpoint.
   *
   * @return {Object} The admin user, with the following properties:
   *   - lastName: The admin's last name.
   *   - firstName: The admin's first name.
   *   - status: The admin's current status.
   *   - role: The admin's role.
   */
  function fetchAdmin() {
    const admin = {
      // for testing until endpoint is ready
      lastName: "Darlinton",
      firstName: "Steven",
      role: "admin",
    };

    return admin;
  }

  /**
   * Fetches financial data for the dashboard overview.
   * @return {Object} Financial data, with the following properties:
   *   - total-donations: An object with the following properties:
   *     - overall: The total amount of donations.
   *     - care: The amount of donations for 'care'.
   *     - academy: The amount of donations for 'academy'.
   *     - others: The amount of donations for 'others'.
   *   - total-applications: An object with the following properties:
   *     - overall: The total number of applications.
   *     - approved: The number of approved applications.
   *     - denied: The number of denied applications.
   *     - pending: The number of pending applications.
   *   - total-fundings: An object with the following properties:
   *     - overall: The total amount of funding.
   *     - care: The amount of funding for 'care'.
   *     - academy: The amount of funding for 'academy'.
   *     - available: The available amount of funding.
   */
  function fetchFinances() {
    const finances = {
      // for testing until endpoint is ready
      "donation-revenue": {
        overall: 60000000,
        care: 32526000,
        academy: 20000000,
        others: 7474000,
      },
      "total-applications": {
        overall: 300,
        approved: 100,
        denied: 150,
        pending: 50,
      },
      "total-fundings": {
        overall: 120000,
        care: 70000,
        academy: 50000,
        available: 1000000,
      },
    };

    return finances;
  }

  /**
   * Returns a list of mock recent requests for testing purposes.
   *
   * Each request object contains the following properties:
   * - id: A unique identifier for the request.
   * - name: The name or description of the request.
   * - createDate: The date and time when the request was created.
   * - amount: The amount associated with the request.
   * - status: The current status of the request, such as 'pending', 'denied', or 'approved'.
   *
   * @return {Array<Object>} A list of recent request objects.
   */
  function recentRequests() {
    // for testing until endpoint is ready
    const requests = [
      {
        id: "00001",
        type: "Personal",
        user: {
          firstName: "Steven",
          lastName: "Darlington",
        },
        name: "Lung Cancer Treatment ",
        amount: 140000,
        status: "Pending",
        createdOn: "10/01/2025",
        updatedOn: "10/01/2025",
      },
      {
        id: "00002",
        type: "Personal",
        user: {
          firstName: "Jude",
          lastName: "Belingham",
        },
        name: "Heart Cancer",
        amount: 120000,
        status: "Pending",
        createdOn: "15/03/2025",
        updatedOn: "15/03/2025",
      },
      {
        id: "00003",
        type: "Personal",
        user: {
          firstName: "Steve",
          lastName: "Mendes",
        },
        name: "Breast Cancer",
        amount: 95000,
        status: "Pending",
        createdOn: "10/03/2025",
        updatedOn: "10/03/2025",
      },
      {
        id: "00004",
        type: "Others",
        user: {
          firstName: "Emeka",
          lastName: "Ike",
        },
        name: "Skin Melanoma",
        amount: 80000,
        status: "Pending",
        createdOn: "05/03/2025",
        updatedOn: "05/03/2025",
      },
      {
        id: "00005",
        type: "Others",
        user: {
          firstName: "Chiamaka",
          lastName: "Mike",
        },
        name: "Brain Biopsy",
        amount: 90000,
        status: "Pending",
        createdOn: "15/04/2025",
        updatedOn: "15/04/2025",
      }
    ];

    return requests;
  }

  function pendingFundings() {
    // for testing until endpoint is ready
    const fundings = [
      {
        id: "000011",
        application_id: "00001",
        application_name: "Lung Cancer Treatment",
        name: "ECG",
        amount: 15000,
        status: "Pending",
        createdOn: "11/01/2025",
        updatedOn: "11/01/2025"
      },
      {
        id: "000012",
        application_id: "00001",
        application_name: "Lung Cancer Treatment",
        name: "X-RAY",
        amount: 10000,
        status: "Pending",
        createdOn: "12/01/2025",
        updatedOn: "12/01/2025"
      },
      {
        id: "000021",
        application_id: "00002",
        application_name: "Heart Cancer",
        name: "ECHOCARDIOGRAPHY",
        amount: 55000,
        status: "Pending",
        createdOn: "12/01/2025",
        updatedOn: "12/01/2025"
      },
      {
        id: "000041",
        application_id: "00004",
        application_name: "Skin Melanoma",
        name: "DERMATOLOGIST SESSION",
        amount: 35000,
        status: "Pending",
        createdOn: "15/01/2025",
        updatedOn: "15/01/2025"
      },
      {
        id: "000042",
        application_id: "00004",
        application_name: "Skin Melanoma",
        name: "NIZODEM",
        amount: 5000,
        status: "Pending",
        createdOn: "15/01/2025",
        updatedOn: "15/01/2025"
      },
    ];

    return fundings;
  }

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

  /**
   * Formats a number to a human-readable string.
   *
   * Rounds to nearest million, thousand, or leaves as is.
   * @param {number} num
   * @return {string}
   */
  function formatNumber(num) {
    if (num >= 1e9) {
      const value = num / 1e9;
      const formatted = value.toFixed(1);
      return formatted.endsWith(".0")
        ? `${value.toFixed(0)}B`
        : `${formatted}B`;
    } else if (num >= 1e6) {
      const value = num / 1e6;
      const formatted = value.toFixed(1);
      return formatted.endsWith(".0")
        ? `${value.toFixed(0)}M`
        : `${formatted}M`;
    } else if (num >= 1e5) {
      const value = num / 1e3;
      const formatted = value.toFixed(1);
      return formatted.endsWith(".0")
        ? `${value.toFixed(0)}K`
        : `${formatted}K`;
    } else {
      return num.toLocaleString();
    }
  }

  /**
   * Converts a date string from the format "dd/mm/yyyy" to a human-readable date string with the format "dd Mmm, yyyy".
   * @param {string} inputDate
   * @return {string}
   */
  function formatDate(inputDate) {
    const [day, month, year] = inputDate.split("/");
    const date = new Date(year, month - 1, day);
    const formattedDay = date.getDate().toString().padStart(2, "0");
    const formattedMonth = date.toLocaleString("en-US", { month: "short" });

    return `${formattedDay} ${formattedMonth}, ${year}`;
  }

  /**
   * Initializes a tooltip for a given icon element.
   *
   * This function sets up click event handlers to toggle the visibility of a tooltip
   * when the associated icon is clicked. It also handles closing the tooltip when the
   * close button inside the tooltip or an area outside the tooltip is clicked.
   *
   * @param {jQuery} $icon - The jQuery object representing the icon that triggers the tooltip.
   * @param {string} tooltipId - The ID of the tooltip element to be controlled.
   *
   * @return {void}
   */

  function initializeTooltip($icon, tooltipId) {
    const $tooltip = $(tooltipId);
    const $closeBtn = $tooltip.find(".close-btn");

    // Toggle tooltip visibility
    $icon.on("click", function (e) {
      e.stopPropagation();
      $tooltip.toggleClass("visible");
      $(this).attr("aria-expanded", $tooltip.hasClass("visible"));
    });

    // Close tooltip
    $closeBtn.on("click", function () {
      $tooltip.removeClass("visible");
      $icon.removeAttr("aria-expanded");
    });

    // Handle click outside
    $(document).on("click", function (e) {
      if (
        !$tooltip.is(e.target) &&
        $tooltip.has(e.target).length === 0 &&
        !$icon.is(e.target)
      ) {
        $tooltip.removeClass("visible");
        $icon.removeAttr("aria-expanded");
      }
    });
  }

  /**
   * Display the dashboard for a beneficiary, including their name, profile image, various financial metrics, and recent requests.
   *
   * @return {void}
   */
  function displayBenefeciaryDashboard() {
    const $donationsIcon = $("#donations-info");
    const $appIcon = $("#app-info");
    const $fundingsIcon = $("#fundings-info");
    let htmlRequests = "";
    let htmlFundings = "";
    const admin = fetchAdmin();
    const finances = fetchFinances();
    const requests = recentRequests();
    const fundings = pendingFundings();
    handleSubNavigation(); // Handle sub-navigation toggle
    handleNavigation(); // Hide sub-navigation

    $(".benefactor-name").text(`${admin.firstName}`);
    $("#admin-role").text(
      `${admin.role[0].toUpperCase() + admin.role.slice(1)}`
    );

    // Mobile: Handle click event on overview icons
    $(".overview-icon").click(function () {
      // Remove active class from all icons and data boxes
      $(".overview-icon, .data-box").removeClass("active");

      $(this).addClass("active");
      const category = $(this).data("category");
      $(`#${category}`).addClass("active"); // add active class
    });

    function setValueIfExists(box, selector, value, prefix = '') {
      const $element = box.find(selector);
      if ($element.length && value !== undefined && value !== null) {
          $element.text(`${prefix}${formatNumber(value)}`);
      }
    }

    // Populate data into boxes
    $.each(finances, function (category, data) {
      const $box = $(`#${category}`);
      const prefix = category === "total-applications" ? "" : "₦";

      setValueIfExists($box, ".total", data.overall, prefix);
      setValueIfExists($box, ".approved", data.approved, prefix);
      setValueIfExists($box, ".denied", data.denied, prefix);
      setValueIfExists($box, ".pending", data.pending, prefix);
      setValueIfExists($box, ".mofa-care", data.care, prefix);
      setValueIfExists($box, ".mofa-academy", data.academy, prefix);
      setValueIfExists($box, ".others", data.others, prefix);
      setValueIfExists($box, ".available", data.available, prefix);
    });

    // Initialize tooltips for each icon
    initializeTooltip($donationsIcon, "#donations-tooltip");
    initializeTooltip($appIcon, "#app-tooltip");
    initializeTooltip($fundingsIcon, "#fundings-tooltip");

    // Populate recent requests
    if (requests.length === 0) {
      htmlRequests = `
        <tr>
          <td colspan="5" class="table-col-id empty text-center">
            <span class="sub-text text-mofa">No recent requests</span>
          </td>
        </tr>`;
    } else {
      $.each(requests.slice(0, 5), function (index, request) {
        const status = request.status.toLowerCase();
        htmlRequests += `
          <tr class="position-relative">
            <td class="table-col-id table-body">
              <span class="sub-text">${
                request.user.firstName} ${
                request.user.lastName}
              </span>
            </td>
            <td class="table-col-name">
              <span class="sub-text">${request.name}</span>
            </td>
            <td class="table-col-amount table-body">
              <span class="sub-text">₦${formatNumber(request.amount)}</span>
            </td>
            <td class="table-b-right table-col-status">
              <span class="sub-text ${
                status === "approved"
                  ? "text-green"
                  : status === "denied"
                  ? "text-red"
                  : ""
              }">${request.status}</span>
            </td>
            <td class=" table-col-date table-body">
              <span class="sub-text">${formatDate(request.createdOn)}</span>
            </td>
            <td class="table-col-action position-absolute">
              <a href="application-details.html?id=${request.id}">
                <i class="fa fa-chevron-right"></i>
              </a>
            </td>
          </tr>`;
      });
    }
    htmlRequests += requests.length > 0 && `
      <tr>
        <td colspan="5" class="table-col-id empty text-right">
          <span class="text-mofa">
            <a href="applications.html" class="see-all text-decoration-none">
              See All <i class="fa fa-chevron-right"></i>
            </a>
          </span>
        </td>
      </tr>
    `;
    $(".dashboard-requests .table__body").html(htmlRequests);

    // Populate pending fundings
    if (fundings.length === 0) {
      htmlFundings = `
        <tr>
          <td colspan="5" class="table-col-id empty text-center">
            <span class="sub-text text-mofa">No pending fundings</span>
          </td>
        </tr>`;
    } else {
      $.each(fundings.slice(0, 5), function (index, funding) {
        const status = funding.status.toLowerCase();
        htmlFundings += `
          <tr class="position-relative">
            <td class="table-col-id table-body">
              <span class="sub-text">
                ${funding.application_name}
              </span>
            </td>
            <td class="table-col-name">
              <span class="sub-text">${funding.name}</span>
            </td>
            <td class="table-col-amount table-body">
              <span class="sub-text">₦${formatNumber(funding.amount)}</span>
            </td>
            <td class="table-b-right table-col-status">
              <span class="sub-text ${
                status === "approved"
                  ? "text-green"
                  : status === "denied"
                  ? "text-red"
                  : ""
              }">${funding.status}</span>
            </td>
            <td class=" table-col-date table-body">
              <span class="sub-text">${formatDate(funding.createdOn)}</span>
            </td>
            <td class="table-col-action position-absolute">
              <a href="application-details.html?id=${funding.id}">
                <i class="fa fa-chevron-right"></i>
              </a>
            </td>
          </tr>`;
      });
    }
    htmlFundings += `
      <tr>
        <td colspan="5" class="table-col-id empty text-right">
          <span class="text-mofa">
            <a href="fundings.html" class="see-all text-decoration-none">
              See All <i class="fa fa-chevron-right"></i>
            </a>
          </span>
        </td>
      </tr>
    `;
    $(".dashboard-fundings .table__body").html(htmlFundings);
  }

  displayBenefeciaryDashboard();
});
