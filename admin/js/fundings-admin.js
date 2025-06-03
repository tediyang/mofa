$((function() {
  /**
   * Fetches a list of fundings with pagination and filtering by status.
   * 
   * @param {number} currentPage - The page number to fetch.
   * @param {number} [itemsPerPage=10] - The number of items to fetch per page.
   * @param {string} [status="ALL"] - The funding status to filter by, such as 'Pending'.
   * @param {string} [search=""] - The search string to filter the fundings by name.
   * @returns {Object} An object containing the paginated and filtered list of funding applications with the following properties:
   *   - data: {Array} - The list of funding applications for the current page.
   *   - currentPage: {number} - The current page number.
   *   - itemsPerPage: {number} - The number of items per page.
   *   - totalItems: {number} - The total number of items that match the filter.
   *   - totalPages: {number} - The total number of pages.
   *   - hasNextPage: {boolean} - Whether there is a next page of results.
   */
  function fetchFundings(currentPage, itemsPerPage=10, status="ALL", search="") { // for testing until endpoint is ready
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

    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;

    let filteredFundings;
    if (status === "ALL") {
      filteredFundings = fundings;
    } else {
      filteredFundings = fundings.filter(funding => funding.status === status);
    }

    const paginatedFundings = filteredFundings.slice(startIndex, endIndex);

    return {
      data: paginatedFundings,
      currentPage: currentPage,
      itemsPerPage: itemsPerPage,
      totalItems: filteredFundings.length,
      totalPages: Math.ceil(filteredFundings.length / itemsPerPage),
      hasNextPage: endIndex < filteredFundings.length
    };
  }

  /**
   * Converts the fundings data into an HTML string that can be used to update
   * the table body.
   * @param {Object} fundings - Object with properties:
   *   data: Array of funding objects
   *   currentPage: number
   *   itemsPerPage: number
   *   totalItems: number
   *   totalPages: number
   *   hasNextPage: boolean
   * @return {undefined}
   */
  function parseData(fundings) {
    let htmlFundings = "";
    if (fundings.data.length === 0) {
      htmlFundings = `
        <tr>
          <td colspan="5" class="table-col-id empty text-center">
            <span class="text-mofa">No Fundings</span>
          </td>
        </tr>`;
    } else {
      $.each(fundings.data, function (index, funding) {
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
              <span class="sub-text"><strong>₦${formatNumber(funding.amount)}</strong></span>
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
              <a href="funding-details.html?id=${funding.id}">
                <i class="fa fa-chevron-right"></i>
              </a>
            </td>
          </tr>`;
      });
    }
    $(".fundings-admin .table__body").html(htmlFundings);
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
   * Loads more funding data based on the current state and updates the UI.
   *
   * @param {Object} state - The state object containing pagination and filter information.
   *   - currentPage: {number} - The current page number to fetch.
   *   - itemsPerPage: {number} - The number of items per page.
   *   - status: {string} - The current status filter for fundings.
   *   - search: {string} - The current search query for fundings.
   *   - isLoading: {boolean} - Flag indicating if data is currently being loaded.
   *   - prevStatus: {string} - The previous status filter.
   *
   * @description
   *   - Sets the loading state to true and shows the loading indicator.
   *   - Clears the content if the status filter has changed.
   *   - Fetches the funding data using the current state parameters.
   *   - Renders pagination controls and parses the fetched data to update the UI.
   *   - Removes the loading indicator after data is loaded.
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
      const fundings = fetchFundings(state.currentPage, state.itemsPerPage, state.status, state.search);

      renderPagination(state, fundings); // render pagination controls
      parseData(fundings); // parse data on page

      $('#loading').removeClass('show');
    }, 1000); // simulate network delay
  }

  /**
   * Renders pagination controls and updates the UI with the current state.
   * @param {Object} state - The state object containing pagination and filter information.
   *   - currentPage: {number} - The current page number to fetch.
   *   - itemsPerPage: {number} - The number of items per page.
   *   - status: {string} - The current status filter for fundings.
   *   - search: {string} - The current search query for fundings.
   *   - isLoading: {boolean} - Flag indicating if data is currently being loaded.
   *   - prevStatus: {string} - The previous status filter.
   * @param {Object} fundings - The fetched fundings data.
   *   - totalItems: {number} - The total number of fundings.
   *   - totalPages: {number} - The total number of pages.
   *   - currentPage: {number} - The current page number of the fetched data.
   */
  function renderPagination(state, fundings) {
    const totalPages = fundings.totalPages;

    $('#totalCount').text(`${fundings.totalItems} items`);
    $('#pageCount').text(`${totalPages === 0 ? 0 : fundings.currentPage} of ${totalPages}`);
    
    // Update prev/next button states
    $('#firstPage').toggleClass('disabled', fundings.currentPage === 1);
    $('#prevPage').toggleClass('disabled', fundings.currentPage === 1);
    $('#nextPage').toggleClass('disabled', fundings.currentPage === totalPages);
    $('#lastPage').toggleClass('disabled', fundings.currentPage === totalPages);

    // update pagination links for first, prev, next, last
    $('#firstPage .page-link').attr('href', `fundings.html`);
    $('#prevPage .page-link').attr('href', `fundings.html?page=${Math.max(1, fundings.currentPage - 1)}`);
    $('#nextPage .page-link').attr('href', `fundings.html?page=${Math.min(totalPages, fundings.currentPage + 1)}`);
    $('#lastPage .page-link').attr('href', `fundings.html?page=${totalPages}`);

    // Event delegation for pagination clicks
    $('#firstPage').on('click', '.page-link', function(e) {
      e.preventDefault();

      window.location.href = "fundings.html";
    });
    $('#prevPage').on('click', '.page-link', function(e) {
      e.preventDefault();

      if (fundings.currentPage > 1) {
        state.currentPage--;
        window.location.href = $(this).attr('href');
      }
    });
    $('#nextPage').on('click', '.page-link', function(e) {
      e.preventDefault();

      if (fundings.currentPage < totalPages) {
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
   * Sets up event listeners for the funding navigation and loads the
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
  function displayFundings() {
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

  displayFundings();
}));
