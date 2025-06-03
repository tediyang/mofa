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
    function fetchApplications(currentPage, itemsPerPage=10, status="ALL", search="") { // for testing until endpoint is ready
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
      let htmlApplications = "";
      if (applications.data.length === 0) {
        htmlApplications = `
          <tr>
            <td colspan="5" class="table-col-id empty text-center">
              <span class="text-mofa">No Applications</span>
            </td>
          </tr>`;
      } else {
        $.each(applications.data, function (index, application) {
          const status = application.status.toLowerCase();
          const amountClass = getAmountClass(application);
          const amountText = getAmountText(application);
          htmlApplications += `
            <tr class="position-relative">
              <td class="table-col-id table-body">
                <span class="sub-text">
                  ${application.applicant}
                </span>
              </td>
              <td class="table-col-name">
                <span class="sub-text">${application.applicationName}</span>
              </td>
              <td class="table-col-amount table-body">
                <span class="sub-text"><strong>₦${formatNumber(application.totalAmount)} / <span class="${amountClass}">₦${formatNumber(amountText)}</span></strong></span>
              </td>
              <td class="table-b-right table-col-status">
                <span class="sub-text ${
                  status === "approved"
                    ? "text-green"
                    : status === "denied"
                    ? "text-red"
                    : ""
                }">${application.status}</span>
              </td>
              <td class=" table-col-date table-body">
                <span class="sub-text">${formatDate(application.createdOn)}</span>
              </td>
              <td class="table-col-action position-absolute">
                <a href="application-details.html?id=${application.id}">
                  <i class="fa fa-chevron-right"></i>
                </a>
              </td>
            </tr>`;
        });
      }
      $(".applications-admin .table__body").html(htmlApplications);
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

    function dateFilter() {
      // Generate years (2020 to current year + 5)
      const endYear = new Date().getFullYear();
      const startYear = 2020;

      for (let year = startYear; year <= endYear; year++) {
        $("#yearSelect").append(`<option value="${year}">${year}</option>`);
      }

      $("#submitBtn").click(function() {
        const month = $("#monthSelect").val();
        const year = $("#yearSelect").val();

        if (!month && !year) {
          alert("Please select either month or year.");
          return;
        }

        alert(`Selected Month: ${month ? month : "Any"}, Year: ${year ? year : "Any"}`);
      });
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
        const applications = fetchApplications(state.currentPage, state.itemsPerPage, state.status, state.search);
  
        renderPagination(state, applications); // render pagination controls
        parseData(applications); // parse data on page
  
        $('#loading').removeClass('show');
      }, 1000); // simulate network delay
    }

    // Render pagination controls
    function renderPagination(state, applications) {
      const totalPages = applications.totalPages;

      $('#totalCount').text(`${applications.totalItems} items`);
      $('#pageCount').text(`${totalPages === 0 ? 0 : applications.currentPage} of ${totalPages}`);
      
      // Update prev/next button states
      $('#firstPage').toggleClass('disabled', applications.currentPage === 1);
      $('#prevPage').toggleClass('disabled', applications.currentPage === 1);
      $('#nextPage').toggleClass('disabled', applications.currentPage === totalPages);
      $('#lastPage').toggleClass('disabled', applications.currentPage === totalPages);

      // update pagination links for first, prev, next, last
      $('#firstPage .page-link').attr('href', `applications.html`);
      $('#prevPage .page-link').attr('href', `applications.html?page=${Math.max(1, applications.currentPage - 1)}`);
      $('#nextPage .page-link').attr('href', `applications.html?page=${Math.min(totalPages, applications.currentPage + 1)}`);
      $('#lastPage .page-link').attr('href', `applications.html?page=${totalPages}`);

      // Event delegation for pagination clicks
      $('#firstPage').on('click', '.page-link', function(e) {
        e.preventDefault();

        window.location.href = "applications.html";
      });
      $('#prevPage').on('click', '.page-link', function(e) {
        e.preventDefault();

        if (applications.currentPage > 1) {
          state.currentPage--;
          window.location.href = $(this).attr('href');
        }
      });
      $('#nextPage').on('click', '.page-link', function(e) {
        e.preventDefault();

        if (applications.currentPage < totalPages) {
          state.currentPage++;
          window.location.href = $(this).attr('href');
        }
      });
      $('#lastPage').on('click', '.page-link', function(e) {
        e.preventDefault();

        state.currentPage = totalPages;
        window.location.href = $(this).attr('href');
      });
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
      dateFilter(); // Initialize date filter
      const urlParams = new URLSearchParams(window.location.search);
      const page = parseInt(urlParams.get("page")) || 1; // Get the current page from URL or default to 1
      const search = parseInt(urlParams.get("search")) || 1; // Get the search from URL or default to ''

      let state = {
        isLoading: false,
        currentPage: page,
        search: search,
        itemsPerPage: 10,
        hasMoreData: true,
        status: "ALL",
        prevStatus: "ALL"
      }

      $('ul.nav li').on('click', function() {
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
    }
  
    displayApplications();
  }));
  