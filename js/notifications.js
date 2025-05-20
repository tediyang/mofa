$((function() {
    function fetchNotifications(currentPage, itemsPerPage=10, status="ALL") { // for testing until endpoint is ready
      const allNotifications = [
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
        },
        {
          id: "00005",
          applicationId: null,
          message: "KYC verification failed - please resubmit documents.",
          createdOn: "28/03/2025",
          status: "unread",
        },
        {
          id: "00006",
          applicationId: "00004",
          message: "Your address information was successfully updated.",
          createdOn: "25/03/2025",
          status: "read",
        },
        {
          id: "00007",
          applicationId: null,
          message: "Password changed successfully for your account.",
          createdOn: "22/03/2025",
          status: "unread",
        },
        {
          id: "00008",
          applicationId: "00005",
          message: "New document required for application 00005 - upload requested.",
          createdOn: "20/03/2025",
          status: "unread",
        },
        {
          id: "00009",
          applicationId: null,
          message: "2-factor authentication was enabled for your account.",
          createdOn: "18/03/2025",
          status: "read",
        },
        {
          id: "00010",
          applicationId: "00006",
          message: "Application 00006 is now pending final approval.",
          createdOn: "16/03/2025",
          status: "unread",
        },
        {
          id: "00011",
          applicationId: null,
          message: "Your phone number verification was successful.",
          createdOn: "14/03/2025",
          status: "read",
        },
        {
          id: "00012",
          applicationId: "00007",
          message: "Payment received for application 00007 - processing continues.",
          createdOn: "12/03/2025",
          status: "unread",
        },
        {
          id: "00013",
          applicationId: null,
          message: "Account security alert: Failed login attempt detected.",
          createdOn: "09/03/2025",
          status: "read",
        },
        {
          id: "00014",
          applicationId: "00008",
          message: "Application 00008 requires additional signatures.",
          createdOn: "07/03/2025",
          status: "unread",
        },
        {
          id: "00015",
          applicationId: null,
          message: "Your subscription plan was upgraded successfully.",
          createdOn: "04/03/2025",
          status: "read",
        },
        {
          id: "00016",
          applicationId: null,
          message: "Employment information updated in your profile.",
          createdOn: "01/03/2025",
          status: "unread",
        }
      ];
  
      const startIndex = (currentPage - 1) * itemsPerPage;
      const endIndex = startIndex + itemsPerPage;
  
      let filteredNotifications;
      if (status === "ALL") {
        filteredNotifications = allNotifications;
      } else {
        filteredNotifications = allNotifications.filter(notification => notification.status === status.toLowerCase());
      }
  
      const paginatedNotifications = filteredNotifications.slice(startIndex, endIndex);
  
      return {
        data: paginatedNotifications,
        currentPage: currentPage,
        itemsPerPage: itemsPerPage,
        totalItems: filteredNotifications.length,
        totalPages: Math.ceil(filteredNotifications.length / itemsPerPage),
        hasNextPage: endIndex < filteredNotifications.length
      };
    }
  
    function parseData(notifications) {
      const $content = $('#content');
      let html = '';
      $.each(notifications, (index, notification) => {
        html += `
          <div class="applications-item d-flex flex-column">
            <div class="d-flex justify-content-between pl-3 pr-3 pt-2 pb-2 position-relative">
              <div class="d-flex gap-1 content">
                <div class="position-relative message-icon ${notification.status === 'unread' && 'active'}"><img src="img/svg/icons_5/message.svg" alt="message-icon"/></div>
                <p class="mb-2">${notification.message}</p>
              </div>
            </div>
            <div class="footer d-flex justify-content-between align-items-center pl-3 pr-3 border-top h-2">
              <p class="mt-0 mb-0">${formatDate(notification.createdOn)}</p>
              <a href="#" class="text-decoration-none text-mofa ${!notification.applicationId && 'd-none'}">View <i class="fa fa-angle-right"></i></a>
              <a href="#" class="text-decoration-none text-mofa ${notification.applicationId && 'd-none'}">Mark as read</a>
            </div>
          </div>
        `
      });
      $content.append(html);
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
     * Simulates loading more data by fetching more applications from the server
     * and then parsing the data to be displayed on the page.
     * @param {Object} state - Object with properties:
     *   currentPage: number - The current page the user is viewing
     *   itemsPerPage: number - The number of items to fetch per page
     *   status: string - The status to filter the applications by
     *   isLoading: boolean - Whether the data is currently being loaded
     *   hasMoreData: boolean - Whether there is more data to be loaded
     *   prevStatus: string - The previous status that was filtered by
     */
    function loadMoreData(state) {
      state.isLoading = true;
      $('#loading').addClass('show');
  
      // Clear content if it's a new filter
      if (state.prevStatus !== state.status) {
        $('#content').empty();
        state.prevStatus = state.status;
      }
  
      setTimeout(() => {
        const applications = fetchNotifications(state.currentPage, state.itemsPerPage, state.status);
  
        parseData(applications.data); // parse data on page
  
        // Update state
        state.currentPage = applications.hasNextPage ? state.currentPage + 1 : state.currentPage;
        state.hasMoreData = applications.hasNextPage;
        state.isLoading = false;
  
        $('#loading').removeClass('show');
      }, 1000); // simulate network delay
    }
  
    /**
     * Sets up event listeners for the application navigation and loads the
     * initial data to be displayed on the page.
     *
     * @description
     *   - Adds a click event listener to the navigation items.
     *   - When a navigation item is clicked, it will load fresh data based on the
     *     selected status.
     *   - Adds a scroll event listener to the window.
     *   - When the user is near the bottom of the page, it will load more data if
     *     there is more data to be loaded and it's not currently loading.
     */
    function displayNotifications() {
      let state = {
        isLoading: false,
        currentPage: 1,
        itemsPerPage: 10,
        hasMoreData: true,
        status: "ALL",
        prevStatus: "ALL"
      }
  
      $('ul.nav li').on('click', function() {
        // const $clickedItem = $(this).find('.nav-app');
        if ($(this).hasClass('active')) return;
  
        $('.mobile-nav').removeClass('active');
        $(this).addClass('active');
    
        state.prevStatus = state.status;
        state.status = $(this).text();
        state.currentPage = 1;
        state.hasMoreData = true;
  
        $('#content').empty(); // Clear existing content
  
        loadMoreData(state); // Load fresh data
      });
  
      loadMoreData(state); // initial load
  
      $(window).on("scroll", () => {
        // check if user is near bottom of the page
        if ($(window).scrollTop() + $(window).height() > $(document).height() - 100) {
          if (!state.isLoading && state.hasMoreData) {
            loadMoreData(state);
          }
        }
      });
    }
  
    displayNotifications();
  }));
  