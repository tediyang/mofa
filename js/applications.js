$((function() {
/**
 * Fetches a list of applications.
 * @param {number} currentPage - The page number to fetch.
 * @param {number} [itemsPerPage=10] - The number of items to fetch per page.
 * @param {string} [status="ALL"] - The application status to filter by.
 * @returns {Object} An object with the following properties:
 *   data: {Array} - The list of applications.
 *   currentPage: {number} - The current page number.
 *   itemsPerPage: {number} - The number of items per page.
 *   totalItems: {number} - The total number of items.
 *   totalPages: {number} - The total number of pages.
 *   hasNextPage: {boolean} - Whether there is a next page.
 */
  function fetchApplications(currentPage, itemsPerPage=10, status="ALL") { // for testing until endpoint is ready
    const allApplications = [
      {
        id: "00001",
        applicant: "Steven Darlington",
        applicationName: "Lung Cancer Treatment",
        category: "CARE",
        totalAmount: 140000,
        approvedAmount: 25000,
        deniedAmount: 0,
        pendingAmount: 115000,
        status: "APPROVED",
        createdOn: "15/03/2025",
        updatedOn: "15/03/2025"
      },
      {
        id: "00002",
        applicant: "Maria Gonzalez",
        applicationName: "Diabetes Management Program",
        category: "ACADEMY",
        totalAmount: 100000,
        approvedAmount: 0,
        deniedAmount: 100000,
        pendingAmount: 0,
        status: "DENIED",
        createdOn: "18/03/2025",
        updatedOn: "22/03/2025"
      },
      {
        id: "00003",
        applicant: "James Whitmore",
        applicationName: "Cardiac Bypass Surgery",
        category: "CARE",
        totalAmount: 200000,
        approvedAmount: 0,
        deniedAmount: 0,
        pendingAmount: 200000,
        status: "PENDING",
        createdOn: "20/03/2025",
        updatedOn: "20/03/2025"
      },
      {
        id: "00004",
        applicant: "Fatima Al-Mansoori",
        applicationName: "Pediatric Leukemia Therapy",
        category: "ACADEMY",
        totalAmount: 95000,
        approvedAmount: 30000,
        deniedAmount: 15000,
        pendingAmount: 50000,
        status: "APPROVED",
        createdOn: "25/03/2025",
        updatedOn: "01/04/2025"
      },
      {
        id: "00005",
        applicant: "David Tanaka",
        applicationName: "Rare Genetic Disorder Research",
        category: "ACADEMY",
        totalAmount: 450000,
        approvedAmount: 450000,
        deniedAmount: 0,
        pendingAmount: 0,
        status: "APPROVED",
        createdOn: "01/04/2025",
        updatedOn: "10/04/2025"
      },
      {
        id: "00006",
        applicant: "Priya Patel",
        applicationName: "Advanced Prosthetics Development",
        category: "CARE",
        totalAmount: 120000,
        approvedAmount: 60000,
        deniedAmount: 0,
        pendingAmount: 60000,
        status: "APPROVED",
        createdOn: "05/04/2025",
        updatedOn: "15/04/2025"
      },
      {
        id: "00007",
        applicant: "Omar Khalid",
        applicationName: "Emergency COVID-19 Relief",
        category: "ACADEMY",
        totalAmount: 80000,
        approvedAmount: 80000,
        deniedAmount: 0,
        pendingAmount: 0,
        status: "APPROVED",
        createdOn: "10/04/2025",
        updatedOn: "10/04/2025"
      },
      {
        id: "00008",
        applicant: "Emily Chen",
        applicationName: "Alzheimer's Clinical Trial",
        category: "CARE",
        totalAmount: 350000,
        approvedAmount: 150000,
        deniedAmount: 50000,
        pendingAmount: 150000,
        status: "APPROVED",
        createdOn: "12/04/2025",
        updatedOn: "20/04/2025"
      },
      {
        id: "00009",
        applicant: "Kwame Nkrumah",
        applicationName: "Malaria Prevention Initiative",
        category: "CARE",
        totalAmount: 55000,
        approvedAmount: 0,
        deniedAmount: 55000,
        pendingAmount: 0,
        status: "DENIED",
        createdOn: "18/04/2025",
        updatedOn: "18/04/2025"
      },
      {
        id: "00010",
        applicant: "Sophie Dubois",
        applicationName: "Rheumatoid Arthritis Treatment",
        category: "ACADEMY",
        totalAmount: 68000,
        approvedAmount: 68000,
        deniedAmount: 0,
        pendingAmount: 0,
        status: "APPROVED",
        createdOn: "22/04/2025",
        updatedOn: "25/04/2025"
      },
      {
        id: "00011",
        applicant: "Priya Patel",
        applicationName: "Advanced Prosthetics Development",
        category: "CARE",
        totalAmount: 120000,
        approvedAmount: 60000,
        deniedAmount: 0,
        pendingAmount: 60000,
        status: "APPROVED",
        createdOn: "05/04/2025",
        updatedOn: "15/04/2025"
      },
      {
        id: "00012",
        applicant: "Omar Khalid",
        applicationName: "Emergency COVID-19 Relief",
        category: "CARE",
        totalAmount: 80000,
        approvedAmount: 80000,
        deniedAmount: 0,
        pendingAmount: 0,
        status: "APPROVED",
        createdOn: "10/04/2025",
        updatedOn: "10/04/2025"
      },
      {
        id: "00013",
        applicant: "Emily Chen",
        applicationName: "Alzheimer's Clinical Trial",
        category: "ACADEMY",
        totalAmount: 350000,
        approvedAmount: 150000,
        deniedAmount: 50000,
        pendingAmount: 150000,
        status: "APPROVED",
        createdOn: "12/04/2025",
        updatedOn: "20/04/2025"
      },
      {
        id: "00014",
        applicant: "Kwame Nkrumah",
        applicationName: "Malaria Prevention Initiative",
        category: "ACADEMY",
        totalAmount: 55000,
        approvedAmount: 0,
        deniedAmount: 55000,
        pendingAmount: 0,
        status: "DENIED",
        createdOn: "18/04/2025",
        updatedOn: "18/04/2025"
      },
      {
        id: "00015",
        applicant: "Sophie Dubois",
        applicationName: "Rheumatoid Arthritis Treatment",
        category: "CARE",
        totalAmount: 68000,
        approvedAmount: 68000,
        deniedAmount: 0,
        pendingAmount: 0,
        status: "APPROVED",
        createdOn: "22/04/2025",
        updatedOn: "25/04/2025"
      },
      {
        id: "00016",
        applicant: "Aisha Khan",
        applicationName: "Pediatric Vaccine Program",
        category: "ACADEMY",
        totalAmount: 165000,
        approvedAmount: 65000,
        deniedAmount: 20000,
        pendingAmount: 80000,
        status: "APPROVED",
        createdOn: "01/05/2025",
        updatedOn: "05/05/2025"
      },
      {
        id: "00017",
        applicant: "Carlos Rivera",
        applicationName: "Emergency Stroke Response",
        category: "CARE",
        totalAmount: 185000,
        approvedAmount: 0,
        deniedAmount: 0,
        pendingAmount: 185000,
        status: "PENDING",
        createdOn: "03/05/2025",
        updatedOn: "03/05/2025"
      },
      {
        id: "00018",
        applicant: "Linh Nguyen",
        applicationName: "Organ Transplant Support",
        category: "ACADEMY",
        totalAmount: 275000,
        approvedAmount: 150000,
        deniedAmount: 25000,
        pendingAmount: 100000,
        status: "APPROVED",
        createdOn: "05/05/2025",
        updatedOn: "10/05/2025"
      },
      {
        id: "00019",
        applicant: "Mohammed Al-Farsi",
        applicationName: "Burn Unit Equipment",
        category: "CARE",
        totalAmount: 89000,
        approvedAmount: 89000,
        deniedAmount: 0,
        pendingAmount: 0,
        status: "APPROVED",
        createdOn: "08/05/2025",
        updatedOn: "08/05/2025"
      },
      {
        id: "00020",
        applicant: "Isabella Rossi",
        applicationName: "Rare Disease Diagnosis System",
        category: "ACADEMY",
        totalAmount: 320000,
        approvedAmount: 120000,
        deniedAmount: 50000,
        pendingAmount: 150000,
        status: "APPROVED",
        createdOn: "10/05/2025",
        updatedOn: "15/05/2025"
      },
      {
        id: "00021",
        applicant: "Rajesh Kapoor",
        applicationName: "Mental Health Initiative",
        category: "CARE",
        totalAmount: 75000,
        approvedAmount: 0,
        deniedAmount: 75000,
        pendingAmount: 0,
        status: "DENIED",
        createdOn: "12/05/2025",
        updatedOn: "12/05/2025"
      },
      {
        id: "00022",
        applicant: "Olivia Müller",
        applicationName: "Neonatal ICU Equipment",
        category: "ACADEMY",
        totalAmount: 210000,
        approvedAmount: 100000,
        deniedAmount: 0,
        pendingAmount: 110000,
        status: "APPROVED",
        createdOn: "15/05/2025",
        updatedOn: "18/05/2025"
      },
      {
        id: "00023",
        applicant: "Hiroshi Tanaka",
        applicationName: "Robotic Surgery Research",
        category: "CARE",
        totalAmount: 450000,
        approvedAmount: 200000,
        deniedAmount: 50000,
        pendingAmount: 200000,
        status: "APPROVED",
        createdOn: "18/05/2025",
        updatedOn: "20/05/2025"
      },
      {
        id: "00024",
        applicant: "Zara Abdi",
        applicationName: "Maternal Health Program",
        category: "ACADEMY",
        totalAmount: 125000,
        approvedAmount: 125000,
        deniedAmount: 0,
        pendingAmount: 0,
        status: "APPROVED",
        createdOn: "20/05/2025",
        updatedOn: "20/05/2025"
      },
      {
        id: "00025",
        applicant: "Samuel Johnson",
        applicationName: "Emergency Trauma Response",
        category: "CARE",
        totalAmount: 180000,
        approvedAmount: 0,
        deniedAmount: 80000,
        pendingAmount: 100000,
        status: "PENDING",
        createdOn: "22/05/2025",
        updatedOn: "25/05/2025"
      },
      {
        id: "00026",
        applicant: "Ananya Desai",
        applicationName: "Cancer Pain Management",
        category: "ACADEMY",
        totalAmount: 95000,
        approvedAmount: 45000,
        deniedAmount: 0,
        pendingAmount: 50000,
        status: "APPROVED",
        createdOn: "25/05/2025",
        updatedOn: "28/05/2025"
      },
      {
        id: "00027",
        applicant: "Lucas Martin",
        applicationName: "Telemedicine Platform",
        category: "CARE",
        totalAmount: 300000,
        approvedAmount: 150000,
        deniedAmount: 50000,
        pendingAmount: 100000,
        status: "APPROVED",
        createdOn: "28/05/2025",
        updatedOn: "01/06/2025"
      },
      {
        id: "00028",
        applicant: "Yasmin Qureshi",
        applicationName: "Diabetes Prevention Program",
        category: "ACADEMY",
        totalAmount: 88000,
        approvedAmount: 0,
        deniedAmount: 88000,
        pendingAmount: 0,
        status: "DENIED",
        createdOn: "01/06/2025",
        updatedOn: "01/06/2025"
      },
      {
        id: "00029",
        applicant: "Andrei Petrov",
        applicationName: "Radiation Therapy Upgrade",
        category: "CARE",
        totalAmount: 425000,
        approvedAmount: 425000,
        deniedAmount: 0,
        pendingAmount: 0,
        status: "APPROVED",
        createdOn: "03/06/2025",
        updatedOn: "05/06/2025"
      },
      {
        id: "00030",
        applicant: "Nia Williams",
        applicationName: "Breast Cancer Screening",
        category: "ACADEMY",
        totalAmount: 165000,
        approvedAmount: 65000,
        deniedAmount: 0,
        pendingAmount: 100000,
        status: "APPROVED",
        createdOn: "05/06/2025",
        updatedOn: "08/06/2025"
      }
    ];

    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;

    let filteredApplications;
    if (status === "ALL") {
      filteredApplications = allApplications;
    } else {
      filteredApplications = allApplications.filter(application => application.status === status);
    }

    const paginatedApplications = filteredApplications.slice(startIndex, endIndex);

    return {
      data: paginatedApplications,
      currentPage: currentPage,
      itemsPerPage: itemsPerPage,
      totalItems: filteredApplications.length,
      totalPages: Math.ceil(filteredApplications.length / itemsPerPage),
      hasNextPage: endIndex < filteredApplications.length
    };
  }

  /**
   * Renders a list of applications.
   * @param {Array} applications - Array of objects, each with properties:
   *   id: string
   *   applicant: string
   *   applicationName: string
   *   totalAmount: number
   *   approvedAmount: number
   *   deniedAmount: number
   *   pendingAmount: number
   *   status: string
   *   createdOn: string
   *   updatedOn: string
   */
  function parseData(applications) {
    const $content = $('#content');
    let html = '';
    $.each(applications, (index, application) => {
      const amountClass = getAmountClass(application);
      const amountText = getAmountText(application);
      html += `
        <div class="applications-item d-flex flex-column border pl-4 pr-4 pt-2">
          <div class="header"><span class="mofa ${application.category === "ACADEMY"? "academy": "care"}">M</span> ${application.category}</div>
          <div class="d-flex flex-column flex-md-row justify-content-between align-items-md-center position-relative w-100 pt-2 pb-2 cursor-pointer">
            <p class="mt-0 mb-0 w-100 w-md-25 w-lg-25">${application.applicant}</p>
            <p class="mt-0 mb-0 w-75 w-md-25 w-lg-25">${application.applicationName}</p>
            <p class="mt-0 mb-0 w-100 w-md-15 w-lg-15"><strong>₦${formatNumber(application.totalAmount)} / <span class="${amountClass}">₦${formatNumber(amountText)}</span></strong></p>
            <p class="d-none d-md-block mt-0 mb-0 w-100 w-md-15 w-lg-25 ${amountClass}">${getApplicationStatusText(application)}</p>
            ${
              application.status === "APPROVED"?
                `<p class="status approved text-white d-md-none"><i class="fa fa-check"></i></p>`:
              application.status === "DENIED" ?
                `<p class="status denied d-md-none text-white"><i class="fa fa-times"></i></p>` :
                `<p class="status pending d-md-none text-white"><i class="fa fa-check"></i></p>`
            }
          </div>
          <div class="footer d-flex justify-content-between align-items-center border-top h-2">
            <p class="mt-0 mb-0">${formatDate(application.createdOn)}</p>
            <a href="#" class="text-decoration-none text-mofa">View <i class="fa fa-angle-right"></i></a>
          </div>
        </div>
      `
    });
    $content.append(html);
  }

  /**
   * Returns a CSS class string that represents the color of the amount text,
   * based on the application status and approved amount.
   * @param {Object} application - Object with properties:
   *   status: string
   *   approvedAmount: number
   *   totalAmount: number
   * @return {string} A CSS class name for the amount text color.
   */
  function getAmountClass(application) {
    if (application.status === "DENIED") {
      return "text-red";
    }
    if (application.status === "APPROVED") {
      return "text-green";
    }
    return "text-gray";
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
   * Returns the amount text based on the application status.
   * @param {Object} application - Object with properties:
   *   status: string
   *   approvedAmount: number
   *   deniedAmount: number
   *   pendingAmount: number
   * @return {number} The amount text for the given application status.
   */
  function getAmountText(application) {
    if (application.status === "DENIED") {
      return application.deniedAmount;
    }
    if (application.status === "APPROVED") {
      return application.approvedAmount;
    }
    return application.pendingAmount;
  }

  /**
   * Returns a string representing the status of the application.
   * If the application is approved but not for the total amount requested,
   * the status returned is "PARTIALLY APPROVED". Otherwise, it returns
   * the original status of the application.
   *
   * @param {Object} application - Object with properties:
   *   status: string - The status of the application
   *   approvedAmount: number - The approved amount of the application
   *   totalAmount: number - The total amount requested in the application
   * @return {string} A string representing the application status.
   */
  function getApplicationStatusText(application) {
    if (application.status === "APPROVED" && application.approvedAmount !== application.totalAmount) {
      return "PARTIALLY APPROVED";
    }
    return application.status;
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
      const applications = fetchApplications(state.currentPage, state.itemsPerPage, state.status);

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
  function displayApplications() {
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

  displayApplications();
}));
