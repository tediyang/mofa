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
      },
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
   * Display a slider of campaigns.
   *
   * If there are 3 or fewer items, the left and right arrow buttons will be
   * hidden. Otherwise, they will be shown and the slider will be enabled.
   *
   * @return {void}
   */
  function displayCampaignSlider() {
    const campaigns = recentCampaigns();
    const $track = $('.slider-track');
    const totalItems = campaigns.length;
    const $arrowLeft = $('.arrow-left');
    const $arrowRight = $('.arrow-right');
    let currentIndex = 0;
    let html = '';

    // Hide arrows if 3 or fewer items
    if (totalItems <= 3) {
      $arrowLeft.add($arrowRight).hide();
    }

    function updateArrows() {
      $arrowLeft.toggleClass('disabled', currentIndex === 0);
      $arrowRight.toggleClass('disabled', currentIndex >= totalItems - 3);
    }

    $.each(campaigns, function(index, campaign) {
      html += `
        <div class="slider-item" style="
          background-image: url('img/${campaign.image}');
          background-size: cover;
          background-position: center;
          box-sizing: border-box;
        ">
          <h4 class="p-3" style="color: #fff;">${campaign.title}</h4>
          <div class="slider-cover">
            <p class="slider-text">${campaign.description}</p>
            <a href="events.html#" class="btn btn-slider">
              <span class="">View</span>
            </a>
          </div>
        </div>
      `
    });
    $track.html(html);

    $arrowLeft.on('click', function() {
      if (!$(this).hasClass('disabled')) {
        currentIndex = Math.max(0, currentIndex - 1);
        $track.css('transform', `translateX(-${currentIndex * (100 / 3)}%)`);
        updateArrows();
      }
    });

    $arrowRight.on('click', function() {
      if (!$(this).hasClass('disabled')) {
        currentIndex = Math.min(totalItems - 3, currentIndex + 1);
        $track.css('transform', `translateX(-${currentIndex * (100 / 3)}%)`);
        updateArrows();
      }
    });

    updateArrows();
  }

  /**
   * Display the dashboard for a beneficiary, including their name, profile image, various financial metrics, and recent requests.
   *
   * @return {void}
   */
  function displayBenefeciaryDashboard() {
    toggleDashboard(); // tablet view aside dashboard
    displayNotifications(); // notification
    const beneficiary = fetchBeneficiary();
    const requests = recentRequests();
    displayCampaignSlider(); // Display campaign slider
    let html = '';

    $('.benefactor-name').text(`${beneficiary.firstName} ${beneficiary.lastName}`);
    $('.benefactor-avatar').html(
      `<img class="img--avatar" src="img/svg/avatar/${beneficiary.profileAvatar}" alt="${beneficiary.firstName} ${beneficiary.lastName}">`
    );

    // Populate data into boxes
    $.each(beneficiary.finances, function(category, data) {
      const $box = $(`#${category}`);
      const prefix = category === 'total-applications' ? '' : '₦';

      $box.find('.total').text(`${prefix}${formatNumber(data.overall)}`);
      $box.find('.approved').text(`${prefix}${formatNumber(data.approved)}`);
      $box.find('.denied').text(`${prefix}${formatNumber(data.denied)}`);
      $box.find('.pending').text(`${prefix}${formatNumber(data.pending)}`);
    });

    // Populate recent requests
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
          <td class="table-col-amount">
            <span class="sub-text">₦${formatNumber(request.amount)}</span>
          </td>
          <td class="table-col-status">
            <span class="sub-text ${status === 'approved' ? 'text-green' : status === 'denied' ? 'text-red' : ''}">${request.status}</span>
          </td>
          <td class="table-col-date">
            <span class="sub-text">${formatDate(request.createdOn)}</span>
          </td>
        </tr>`
    });
    $(".table__body").html(html);
  }

  displayBenefeciaryDashboard();
}));
