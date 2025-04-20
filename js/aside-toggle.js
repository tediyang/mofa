$((function() {
  const asideDashboard = $('.aside-dashboard');
  const toggleButton = $('.aside-toggle');
  const toggleIcons = $('.toggle-icon');

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
        message: "Your application 00001 has been approved.",
        createdOn: "15/03/2025",
        status: "unread",
      },
      {
        id: "00003",
        applicationId: "00002",
        message: "Sorry, your application 00003 has been denied.",
        createdOn: "10/03/2025",
        status: "unread",
      },
      {
        id: "00004",
        applicationId: "00003",
        message: "Your application 00003 has been created, pending for review.",
        createdOn: "05/03/2025",
        status: "read",
      }
    ]

    return notifications;
  };

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
        html += `
          <div class="message" data-application-id="${notification.applicationId ?? ''}">
            <div class="message-icon ${notification.status === 'unread' && 'active'}"><img src="img/svg/icons_5/message.svg" alt="message-icon"/></div>
            <div class="content">
              <p class="mb-2">${notification.message}</p>
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

    $('.notification-modal__body').on('click', '.message', function() {
      const applicationId = $(this).data('applicationId'); // Get ID from data attribute
      if (!applicationId) return; // Exit if no ID found i.e notification is not related to an application

      // Redirect to the application detail page
      window.location.href = `application-detail.html?id=${applicationId}`;
    });

    // handle notification modal display
    $('.notification-icon').on('click', () => {
      $('.notification-modal').toggleClass('active');
    });
    $('.notification-modal .close').on('click', () => {
      $('.notification-modal').removeClass('active');
    });
  }
  

  toggleDashboard();
  displayNotifications();
}));
