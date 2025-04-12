$((function() {
  const asideDashboard = $('.aside-dashboard');
  const toggleButton = $('.aside-toggle');
  const toggleIcons = $('.toggle-icon');

  /**
   * Toggles the 'expanded' class on the aside dashboard
   * and the 'hidden' class on toggle icons to show or hide
   * the dashboard navigation.
   */
  function handleToggle() {
    asideDashboard.toggleClass('expanded');
    toggleIcons.toggleClass('hidden');
  }

  /**
   * Re-attaches the click event handler to the toggle button
   * in order to toggle the 'expanded' class on the aside dashboard
   * and the 'hidden' class on toggle icons.
   */
  function toggleDashboard() {
    toggleButton.off('click').on('click', handleToggle);
  }

  /**
   * Fetches a mock beneficiary object for testing purposes.
   * 
   * Returns an object containing the beneficiary's details, including:
   * - firstName: The first name of the beneficiary.
   * - lastName: The last name of the beneficiary.
   * - profileAvatar: The filename of the beneficiary's profile avatar image.
   * - finances: An object containing financial data categorized into:
   *   - total-funds: Includes overall, approved, pending, and denied amounts.
   *   - total-applications: Includes overall, approved, pending, and denied application counts.
   *   - current-requests: Includes overall, approved, pending, and denied request amounts.
   * 
   * @return {Object} The beneficiary data for testing.
   */
  function fetchBeneficiary () {
    beneficiary = { // for testing until endpoint is ready
      lastName: "Darlinton",
      firstName: "Steven",
      profileAvatar: "male_1.svg",
      finances: {
        "total-funds": {
          overall: 60000000,
          approved: 32526000,
          pending: 20000000,
          denied: 7474000
        },
        "total-applications": {
          overall: 300,
          approved: 100,
          pending: 50,
          denied: 150
        },
        "current-requests": {
          overall: 120000,
          approved: 70000,
          pending: 50000,
          denied: 0
        }
      }
    }
    
    return beneficiary;
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
  function recentRequests() { // for testing until endpoint is ready
    requests = [
      {
        id: "00002",
        name: "Lung Cancer",
        createdOn: "15/03/2025",
        amount: 120000,
        status: "Pending",
      },
      {
        id: "00003",
        name: "Breast Cancer",
        createdOn: "10/03/2025",
        amount: 95000,
        status: "Denied",
      },
      {
        id: "00004",
        name: "Skin Melanoma",
        createdOn: "05/03/2025",
        amount: 80000,
        status: "Approved",
      }
    ]

    return requests;
  }

  /**
   * Returns a list of mock recent campaigns for testing purposes.
   * 
   * Each campaign object contains the following properties:
   * - id: A unique identifier for the campaign.
   * - title: The title of the campaign.
   * - description: A brief description of the campaign.
   * - image: A URL or path to an image representing the campaign.
   * 
   * @return {Array<Object>} A list of recent campaign objects.
   */
  function recentCampaigns() { // for testing until endpoint is ready
    campaigns = [
      {
        id: "10002",
        title: "Health",
        description: "Pregnant Women Incentives for Ifelode Community.",
        image: "rectangle_1.jpg"
      },
      {
        id: "10003",
        title: "Education",
        description: "Buildiing a Secondary School in Italowo Rural Area.",
        image: "rectangle_2.jpg"
      },
      {
        id: "10004",
        title: "Health",
        description: "Assisting Orphanage Homes to Afford Basic Necessities.",
        image: "rectangle_3.jpg"
      }
      ,
      {
        id: "10005",
        title: "Education",
        description: "Supporting Orphanage Homes to Improve Their Infrastructure.",
        image: "rectangle_4.jpg"
      }
    ]

    return campaigns;
  }

  /**
   * Returns a list of recent notifications for the dashboard.
   *
   * Each notification object contains the following properties:
   * - id: A unique identifier for the notification.
   * - name: The name or description of the notification.
   * - createdOn: The date and time when the notification was created.
   * - amount: The amount associated with the notification.
   * - status: The status of the notification, either 'unread' or 'read'.
   *
   * @return {Array<Object>} A list of recent notification objects.
   */
  function recentNotifications() { // for testing until endpoint is ready
    notifications = [
      {
        id: "00002",
        applicationId: "00001",
        applicationStatus: "Approved",
        createdOn: "15/03/2025",
        status: "unread",
      },
      {
        id: "00003",
        applicationId: "00002",
        applicationStatus: "Denied",
        createdOn: "10/03/2025",
        status: "unread",
      },
      {
        id: "00004",
        applicationId: "00003",
        applicationStatus: "Pending",
        createdOn: "05/03/2025",
        status: "read",
      }
    ]

    return notifications;
  };

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
      return formatted.endsWith('.0') ? `${value.toFixed(0)}B` : `${formatted}B`;
    } else if (num >= 1e6) {
      const value = num / 1e6;
      const formatted = value.toFixed(1);
      return formatted.endsWith('.0') ? `${value.toFixed(0)}M` : `${formatted}M`;
    } else if (num >= 1e5) {
      const value = num / 1e3;
      const formatted = value.toFixed(1);
      return formatted.endsWith('.0') ? `${value.toFixed(0)}K` : `${formatted}K`;
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
    const [day, month, year] = inputDate.split('/');
    const date = new Date(year, month - 1, day);
    const formattedDay = date.getDate().toString().padStart(2, '0');
    const formattedMonth = date.toLocaleString('en-US', { month: 'short' });
    
    return `${formattedDay} ${formattedMonth}, ${year}`;
  }

  /**
   * Display the number of unread notifications on the notification button.
   *
   * Updates the CSS variable `--unread-count` with the number of unread notifications.
   *
   * @return {void}
   */
  function displayNotifications() {
    const $notifications = recentNotifications();
    const $unread = $notifications.filter(notification => notification.status === 'unread').length;
    let html = '';
    
    if ($unread > 0) {
      $('.unread').text($unread);
      $.each($notifications, function(index, notification) {
        message = notification.applicationStatus === 'Approved' ? `Your Application <a href="#">${notification.applicationId}</a> has been approved.`
          : notification.applicationStatus === 'Denied' ? `Sorry, your recent Application <a href="#">${notification.applicationId}</a> has been denied.`
          : `Your Application <a href="#">${notification.applicationId}</a> has been created, pending for review.`
        html += `
          <div class="message">
            <div class="message-icon ${notification.status === 'unread' && 'active'}"><img src="img/svg/icons_5/message.svg" alt="message-icon"/></div>
            <div class="content">
              <h6>${notification.applicationStatus}</h6>
              <p class="mb-2">${message}</p>
              <div>5 mins ago</div>
            </div>
          </div>
        `
      });
    } else {
      $('.unread').css('display', 'none'); // remove notifier
      html += `
        <div class="message justify-content-center">
          <div class="content">
            <p class="mb-0">No new notifications.</p>
          </div>
        </div>
      `
    }

    $('.notification-modal__body').html(html);

    // handle notification modal display
    $('.notification-icon').on('click', () => {
      $('.notification-modal').toggleClass('active');
    });
    $('.notification-modal .close').on('click', () => {
      $('.notification-modal').removeClass('active');
    });
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
    const $closeBtn = $tooltip.find('.close-btn');
  
    // Toggle tooltip visibility
    $icon.on('click', function(e) {
      e.stopPropagation();
      $tooltip.toggleClass('visible');
      $(this).attr('aria-expanded', $tooltip.hasClass('visible'));
    });
  
    // Close tooltip
    $closeBtn.on('click', function() {
      $tooltip.removeClass('visible');
      $icon.removeAttr('aria-expanded');
    });
  
    // Handle click outside
    $(document).on('click', function(e) {
      if (!$tooltip.is(e.target) && 
          $tooltip.has(e.target).length === 0 && 
          !$icon.is(e.target)) {
        $tooltip.removeClass('visible');
        $icon.removeAttr('aria-expanded');
      }
    });
  };

  /**
   * Sets up the campaign slider.
   *
   * This function sets up the campaign slider. It first checks the window size and
   * sets the number of items to show in the slider. It then generates the HTML for
   * each campaign and adds it to the slider track. It then sets up the arrow events
   * and updates the arrow visibility based on the current index. It also handles
   * window resize and updates the slider position accordingly.
   *
   * @private
   */
  function displayCampaignSlider() {
    const $window = $(window);
    const campaigns = recentCampaigns();
    const $track = $('.slider-track');
    const totalItems = campaigns.length;
    const $arrowLeft = $('.slider-arrow.left');
    const $arrowRight = $('.slider-arrow.right');
    let touchStartX = 0;
    let isDragging = false;
    let dragDistance = 0;
    let currentIndex = 0;
    let size = 1;
    let html = '';

    function resetSliderPosition() {
      currentIndex = 0;
      $track.css('transform', 'translateX(0)');
      updateArrows();
    }

    function checkMobile() {
      if ($window.width() <= 576) { // Mobile breakpoint
        size = 1;
      } else if ($window.width() <= 767) {
        size = 2
      } else {
        size = 3
      }

      // Reset position on resize
      resetSliderPosition();
    }

    function updateArrows() {
      $arrowLeft.toggleClass('none', currentIndex === 0 || campaigns.length === 0);
      $arrowRight.toggleClass('none', currentIndex >= totalItems - size || campaigns.length === 0);
    }

    if (campaigns.length === 0) {
      html = `
        <div class="slider-item d-flex flex-column justify-content-between" style="
          box-sizing: border-box;
          min-height: auto;
          text-align: center;
          width: 100%;
        ">
          <p class="p-3" style="color: #212529;">No recent campaigns</p>
        </div>
      `
    } else {
      $.each(campaigns, function(index, campaign) {
        html += `
          <div class="slider-item d-flex flex-column justify-content-between" style="
            background-image: url('img/${campaign.image}');
            background-size: cover;
            background-position: center;
            box-sizing: border-box;
            min-height: 25rem;
          ">
            <h4 class="p-3" style="color: #fff;">${campaign.title}</h4>
            <div class="slider-cover d-flex flex-column justify-content-between">
              <p class="slider-text">${campaign.description}</p>
              <a href="events.html#" class="btn btn-slider">
                <span class="">View</span>
              </a>
            </div>
          </div>
        `
      });
    }
    $track.html(html);

    // Handle touch events
    $track.on('touchstart', function(e) {
      touchStartX = e.originalEvent.touches[0].clientX;
      isDragging = true;
      $track.css('transition', 'none');
    });

    $track.on('touchmove', function(e) {
      if (!isDragging) return;
      const touchCurrentX = e.originalEvent.touches[0].clientX;
      dragDistance = touchCurrentX - touchStartX;
      
      const currentTransform = -currentIndex * (100 / size);
      $track.css('transform', `translateX(calc(${currentTransform}% + ${dragDistance}px))`);
    });

    $track.on('touchend', function(e) {
      if (!isDragging) return;
      isDragging = false;
      $track.css('transition', 'transform 0.3s ease-in-out');

      // Determine if swipe threshold was passed
      if (Math.abs(dragDistance) > 50) {
        if (dragDistance < 0) { // Swipe left
          $arrowRight.trigger('click');
        } else { // Swipe right
          $arrowLeft.trigger('click');
        }
      } else {
        // Return to original position
        $track.css('transform', `translateX(-${currentIndex * (100 / size)}%)`);
      }
      dragDistance = 0;
    });

    $arrowLeft.on('click', function() {
      if (!$(this).hasClass('disabled')) {
        currentIndex = Math.max(0, currentIndex - 1);
        $track.css('transform', `translateX(-${currentIndex * (100 / size)}%)`);
        updateArrows();
      }
    });

    $arrowRight.on('click', function() {
      if (!$(this).hasClass('disabled')) {
        currentIndex = Math.min(totalItems - size, currentIndex + 1);
        console.log(size);
        $track.css('transform', `translateX(-${currentIndex * (100 / size)}%)`);
        updateArrows();
      }
    });

    checkMobile();
    updateArrows();

    // Handle window resize
    let resizeTimer;
    $window.on('resize', function() {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(checkMobile, 250);
    });
  }

  /**
   * Display the dashboard for a beneficiary, including their name, profile image, various financial metrics, and recent requests.
   *
   * @return {void}
   */
  function displayBenefeciaryDashboard() {
    const $fundsIcon = $('#funds-info');
    const $appIcon = $('#app-info');
    const $currIcon = $('#current-info');
    let html = '';
    const beneficiary = fetchBeneficiary();
    const requests = recentRequests();
    toggleDashboard(); // tablet view aside dashboard
    displayNotifications(); // notification
    displayCampaignSlider(); // Display campaign slider

    $('.benefactor-name').text(`${beneficiary.firstName} ${beneficiary.lastName}`);
    $('.benefactor-avatar').html(
      `<img class="img--avatar" src="img/svg/avatar/${beneficiary.profileAvatar}" alt="${beneficiary.firstName} ${beneficiary.lastName}">`
    );

    // Mobile: Handle click event on overview icons
    $('.overview-icon').click(function() {
      // Remove active class from all icons and data boxes
      $('.overview-icon, .data-box').removeClass('active');

      $(this).addClass('active');
      const category = $(this).data('category');
      $(`#${category}`).addClass('active'); // add active class
    });

    // Populate data into boxes
    $.each(beneficiary.finances, function(category, data) {
      const $box = $(`#${category}`);
      const prefix = category === 'total-applications' ? '' : '₦';

      $box.find('.total').text(`${prefix}${formatNumber(data.overall)}`);
      $box.find('.approved').text(`${prefix}${formatNumber(data.approved)}`);
      $box.find('.denied').text(`${prefix}${formatNumber(data.denied)}`);
      $box.find('.pending').text(`${prefix}${formatNumber(data.pending)}`);
    });

    // Initialize tooltips for each icon
    initializeTooltip($fundsIcon, '#funds-tooltip');
    initializeTooltip($appIcon, '#app-tooltip');
    initializeTooltip($currIcon, '#current-tooltip');

    // Populate recent requests
    if (requests.length === 0) {
      html = `
        <tr>
          <td colspan="5" class="table-col-id empty text-center">
            <span class="sub-text text-mofa">No recent requests</span>
          </td>
        </tr>`;
    } else {
      $.each(requests, function(index, request) {
        const status = request.status.toLowerCase();
        html += `
          <tr>
            <td class="table-col-id">
              <span class="sub-text text-mofa"><a href="#">${request.id}</a></span>
            </td>
            <td class="table-col-name">
              <span class="sub-text">${request.name}</span>
            </td>
            <td class="table-col-amount table-body">
              <span class="sub-text">₦${formatNumber(request.amount)}</span>
            </td>
            <td class="table-b-right table-col-status">
              <span class="sub-text ${status === 'approved' ? 'text-green' : status === 'denied' ? 'text-red' : ''}">${request.status}</span>
            </td>
            <td class=" table-col-date table-body">
              <span class="sub-text">${formatDate(request.createdOn)}</span>
            </td>
          </tr>`
      });
    }
    $(".table__body").html(html);
  }

  displayBenefeciaryDashboard();
}));
