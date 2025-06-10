$((function() {
  /**
   * Fetches a list of users with pagination and filtering by status.
   *
   * @param {number} currentPage - The page number to fetch.
   * @param {number} [itemsPerPage=10] - The number of items to fetch per page.
   * @param {string} [status="ALL"] - The user status to filter by, such as 'VERIFIED', 'UNVERIFIED', 'DEACTIVATED', 'DELETED', or 'INACTIVE'.
   * @returns {Object} An object containing the paginated and filtered list of users with the following properties:
   *   - data: {Array} - The list of users for the current page.
   *   - currentPage: {number} - The current page number.
   *   - itemsPerPage: {number} - The number of items per page.
   *   - totalItems: {number} - The total number of items that match the filter.
   *   - totalPages: {number} - The total number of pages.
   *   - hasNextPage: {boolean} - Whether there is a next page of results.
   */
  function fetchUsers(currentPage, itemsPerPage=10, status="ALL") { // for testing until endpoint is ready
    const allUsers = [
      {
        id: "00001",
        lastName: "Darlinton",
        firstName: "Steven",
        profileAvatar: "male_1.svg",
        phone: "08123456789",
        dob: "30/05/1996",
        gender: "male",
        status: "unverified",
        createdOn: "18/03/2025",
        updatedOn: "22/03/2025"
      },
      {
        id: "00002",
        lastName: "Adeoye",
        firstName: "Fatima",
        profileAvatar: "female_2.svg",
        phone: "08034567890",
        dob: "15/01/1990",
        gender: "female",
        status: "verified",
        createdOn: "01/02/2025",
        updatedOn: "05/02/2025"
      },
      {
        id: "00003",
        lastName: "Okoro",
        firstName: "Chinedu",
        profileAvatar: "male_2.svg",
        phone: "09012345678",
        dob: "22/11/1988",
        gender: "male",
        status: "verified",
        createdOn: "10/01/2025",
        updatedOn: "12/01/2025"
      },
      {
        id: "00004",
        lastName: "Bello",
        firstName: "Aisha",
        profileAvatar: "female_2.svg",
        phone: "07067890123",
        dob: "03/07/1993",
        gender: "female",
        status: "unverified",
        createdOn: "05/03/2025",
        updatedOn: "05/03/2025"
      },
      {
        id: "00005",
        lastName: "Peters",
        firstName: "David",
        profileAvatar: "male_3.svg",
        phone: "08056789012",
        dob: "10/04/1985",
        gender: "male",
        status: "verified",
        createdOn: "20/02/2025",
        updatedOn: "28/02/2025"
      },
      {
        id: "00006",
        lastName: "Usman",
        firstName: "Hadiza",
        profileAvatar: "female_3.svg",
        phone: "08167890123",
        dob: "25/09/1991",
        gender: "female",
        status: "unverified",
        createdOn: "12/03/2025",
        updatedOn: "12/03/2025"
      },
      {
        id: "00007",
        lastName: "Eze",
        firstName: "Nnamdi",
        profileAvatar: "male_4.svg",
        phone: "09078901234",
        dob: "08/12/1995",
        gender: "male",
        status: "deactivated",
        createdOn: "01/04/2025",
        updatedOn: "03/04/2025"
      },
      {
        id: "00008",
        lastName: "Mohammed",
        firstName: "Zainab",
        profileAvatar: "female_3.svg",
        phone: "08023456789",
        dob: "19/06/1987",
        gender: "female",
        status: "verified",
        createdOn: "25/01/2025",
        updatedOn: "01/02/2025"
      },
      {
        id: "00009",
        lastName: "Johnson",
        firstName: "Blessing",
        profileAvatar: "female_2.svg",
        phone: "08134567890",
        dob: "02/03/1998",
        gender: "female",
        status: "unverified",
        createdOn: "07/04/2025",
        updatedOn: "07/04/2025"
      },
      {
        id: "00010",
        lastName: "Davies",
        firstName: "Gabriel",
        profileAvatar: "male_4.svg",
        phone: "07089012345",
        dob: "14/08/1983",
        gender: "male",
        status: "unverified",
        createdOn: "28/02/2025",
        updatedOn: "01/03/2025"
      },
      {
        id: "00011",
        lastName: "Okafor",
        firstName: "Chioma",
        profileAvatar: "female_3.svg",
        phone: "08045678901",
        dob: "05/05/1994",
        gender: "female",
        status: "deleted",
        createdOn: "11/01/2025",
        updatedOn: "15/01/2025"
      },
      {
        id: "00012",
        lastName: "Musa",
        firstName: "Abdul",
        profileAvatar: "male_4.svg",
        phone: "09023456789",
        dob: "20/10/1989",
        gender: "male",
        status: "verified",
        createdOn: "17/02/2025",
        updatedOn: "20/02/2025"
      },
      {
        id: "00013",
        lastName: "Nduka",
        firstName: "Victoria",
        profileAvatar: "female_2.svg",
        phone: "08178901234",
        dob: "11/07/1997",
        gender: "female",
        status: "unverified",
        createdOn: "03/03/2025",
        updatedOn: "03/03/2025"
      },
      {
        id: "00014",
        lastName: "Aminu",
        firstName: "Sani",
        profileAvatar: "male_3.svg",
        phone: "07056789012",
        dob: "29/01/1982",
        gender: "male",
        status: "deleted",
        createdOn: "09/04/2025",
        updatedOn: "10/04/2025"
      },
      {
        id: "00015",
        lastName: "Adeleke",
        firstName: "Funke",
        profileAvatar: "female_2.svg",
        phone: "08089012345",
        dob: "18/04/1992",
        gender: "female",
        status: "deactivated",
        createdOn: "21/02/2025",
        updatedOn: "21/02/2025"
      },
      {
        id: "00016",
        lastName: "Igwe",
        firstName: "Uche",
        profileAvatar: "male_2.svg",
        phone: "08189012345",
        dob: "07/11/1986",
        gender: "male",
        status: "verified",
        createdOn: "15/01/2025",
        updatedOn: "18/01/2025"
      },
      {
        id: "00017",
        lastName: "Abubakar",
        firstName: "Laila",
        profileAvatar: "female_3.svg",
        phone: "09034567890",
        dob: "24/02/1999",
        gender: "female",
        status: "unverified",
        createdOn: "06/03/2025",
        updatedOn: "06/03/2025"
      },
      {
        id: "00018",
        lastName: "Martins",
        firstName: "Kunle",
        profileAvatar: "male_4.svg",
        phone: "08012345678",
        dob: "13/09/1980",
        gender: "male",
        status: "verified",
        createdOn: "29/03/2025",
        updatedOn: "30/03/2025"
      },
      {
        id: "00019",
        lastName: "Salami",
        firstName: "Halima",
        profileAvatar: "female_3.svg",
        phone: "07090123456",
        dob: "09/12/1993",
        gender: "female",
        status: "verified",
        createdOn: "04/02/2025",
        updatedOn: "07/02/2025"
      },
      {
        id: "00020",
        lastName: "Adams",
        firstName: "Chris",
        profileAvatar: "male_1.svg",
        phone: "08156789012",
        dob: "01/01/1990",
        gender: "male",
        status: "deactivated",
        createdOn: "16/04/2025",
        updatedOn: "16/04/2025"
      },
      {
        id: "00021",
        lastName: "Ezeh",
        firstName: "Grace",
        profileAvatar: "female_2.svg",
        phone: "08076543210",
        dob: "21/08/1995",
        gender: "female",
        status: "verified",
        createdOn: "20/01/2025",
        updatedOn: "25/01/2025"
      }
    ];

    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;

    let filteredUsers;
    if (status === "ALL") {
      filteredUsers = allUsers;
    } else {
      filteredUsers = allUsers.filter(user => status === "INACTIVE"? !["VERIFIED", "UNVERIFIED"].includes(user.status.toUpperCase()) : user.status.toUpperCase() === status);
    }

    const paginatedUsers = filteredUsers.slice(startIndex, endIndex);

    return {
      data: paginatedUsers,
      currentPage: currentPage,
      itemsPerPage: itemsPerPage,
      totalItems: filteredUsers.length,
      totalPages: Math.ceil(filteredUsers.length / itemsPerPage),
      hasNextPage: endIndex < filteredUsers.length
    };
  }

  /**
   * Renders a list of users.
   * @param {Object} users - Object with the following properties:
   *   data: {Array} - The list of users.
   *   currentPage: {number} - The current page number.
   *   itemsPerPage: {number} - The number of items per page.
   *   totalItems: {number} - The total number of items.
   *   totalPages: {number} - The total number of pages.
   *   hasNextPage: {boolean} - Whether there is a next page.
   */
  function parseData(users) {
    const $content = $('#content');
    let html = '';
    $.each(users.data, (index, user) => {
      const statusClass = getStatusClass(user);
      html += `
        <div class="applications-item d-flex flex-column border pl-4 pr-4 pt-2">
          <div class="d-flex flex-column flex-md-row justify-content-between align-items-md-center position-relative w-100 pt-2 pb-2">
            <div class="users-image d-none d-md-block">
              <img src="../img/svg/avatar/${user.profileAvatar}" alt="${user.firstName} ${user.lastName}" class="img--avatar" />
            </div>
            <p class="mt-0 mb-0 w-100 w-md-25 w-lg-25">${user.firstName} ${user.lastName}</p>
            <p class="col-md-2 mt-0 mb-0 pl-0 pr-0 w-75 w-md-25 w-lg-25">${user.gender[0].toUpperCase()} | ${calculateAge(user.dob)} yrs</p>
            <p class="mt-0 mb-0 w-100 w-md-15 w-lg-15">${user.phone}</p>
            <p class="d-none d-md-block col-md-2 mt-0 mb-0 w-100 w-md-15 w-lg-25 ${statusClass}">${user.status.toUpperCase()}</p>
            ${
              user.status.toUpperCase() === "VERIFIED"?
                `<p class="status approved text-white d-md-none"><i class="fa fa-check"></i></p>`:
              user.status.toUpperCase() === "DELETED" ?
                `<p class="status denied d-md-none text-white"><i class="fa fa-times"></i></p>` :
              user.status.toUpperCase() === "DEACTIVATED" ?
                `<p class="status deactivated d-md-none text-white"><i class="fa fa-times"></i></p>` :
                `<p class="status pending d-md-none text-white"><i class="fa fa-check"></i></p>`
            }
            <a href="user-details.html?id=${user.id}" class="align-self-end align-self-md-center text-decoration-none text-mofa">View <i class="fa fa-angle-right"></i></a>
          </div>
        </div>
      `
    });
    $content.append(html);
  }

  /**
   * Gets the CSS class for the status of a user based on the user status.
   * @param {Object} user - The user object.
   * @returns {string} - The CSS class name.
   */
  function getStatusClass(user) {
    if (user.status.toUpperCase() === "DELETED") {
      return "text-red";
    }
    if ( user.status.toUpperCase() === "DEACTIVATED") {
      return "text-orange";
    }
    if (user.status.toUpperCase() === "VERIFIED") {
      return "text-green";
    }
    return "text-gray";
  }

  /**
   * Calculates the age of a user given their date of birth.
   * @param {string} dob - The date of birth in DD/MM/YYYY format.
   * @returns {number} - The age of the user in years.
   */
  function calculateAge(dob) {
    const [day, month, year] = dob.split('/');
    const birthDate = new Date(year, month - 1, day);
    const today = new Date();
    let age = today.getFullYear() - birthDate.getFullYear();
    const m = today.getMonth() - birthDate.getMonth();

    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
    
    return age;
  }

  /**
   * Renders the month and year dropdowns and handles the submission of the
   * form to filter the users based on the selected month and year.
   */
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
   * Loads more user data based on the current state and updates the UI.
   *
   * @param {Object} state - The state object containing pagination and filter information.
   *   - currentPage: {number} - The current page number to fetch.
   *   - itemsPerPage: {number} - The number of items per page.
   *   - status: {string} - The current status filter for users.
   *   - search: {string} - The current search query for users.
   *   - isLoading: {boolean} - Flag indicating if data is currently being loaded.
   *   - prevStatus: {string} - The previous status filter.
   *
   * @description
   *   - Sets the loading state to true and shows the loading indicator.
   *   - Clears the content if the status filter has changed.
   *   - Fetches the user data using the current state parameters.
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
      const users = fetchUsers(state.currentPage, state.itemsPerPage, state.status, state.search);

      renderPagination(state, users); // render pagination controls
      parseData(users); // parse data on page

      $('#loading').removeClass('show');
    }, 1000); // simulate network delay
  }

  /**
   * Renders pagination controls and updates the UI with the current state.
   * @param {Object} state - The state object containing pagination and filter information.
   *   - currentPage: {number} - The current page number to fetch.
   *   - itemsPerPage: {number} - The number of items per page.
   *   - status: {string} - The current status filter for users.
   *   - search: {string} - The current search query for users.
   *   - isLoading: {boolean} - Flag indicating if data is currently being loaded.
   *   - prevStatus: {string} - The previous status filter.
   * @param {Object} users - The fetched user data.
   *   - totalItems: {number} - The total number of users.
   *   - totalPages: {number} - The total number of pages.
   *   - currentPage: {number} - The current page number of the fetched data.
   */
  function renderPagination(state, users) {
    const totalPages = users.totalPages;

    $('#totalCount').text(`${users.totalItems} items`);
    $('#pageCount').text(`${totalPages === 0 ? 0 : users.currentPage} of ${totalPages}`);
    
    // Update prev/next button states
    $('#firstPage').toggleClass('disabled', users.currentPage === 1);
    $('#prevPage').toggleClass('disabled', users.currentPage === 1);
    $('#nextPage').toggleClass('disabled', users.currentPage === totalPages);
    $('#lastPage').toggleClass('disabled', users.currentPage === totalPages);

    // update pagination links for first, prev, next, last
    $('#firstPage .page-link').attr('href', `users.html`);
    $('#prevPage .page-link').attr('href', `users.html?page=${Math.max(1, users.currentPage - 1)}`);
    $('#nextPage .page-link').attr('href', `users.html?page=${Math.min(totalPages, users.currentPage + 1)}`);
    $('#lastPage .page-link').attr('href', `users.html?page=${totalPages}`);

    // Event delegation for pagination clicks
    $('#firstPage').on('click', '.page-link', function(e) {
      e.preventDefault();

      window.location.href = "users.html";
    });
    $('#prevPage').on('click', '.page-link', function(e) {
      e.preventDefault();

      if (users.currentPage > 1) {
        state.currentPage--;
        window.location.href = $(this).attr('href');
      }
    });
    $('#nextPage').on('click', '.page-link', function(e) {
      e.preventDefault();

      if (users.currentPage < totalPages) {
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
   * Initializes and manages the display of user data with pagination and filtering.
   *
   * @description
   *   - Sets up event listeners for navigation items to filter users based on status.
   *   - Initializes the date filter and extracts pagination and search parameters from URL.
   *   - Loads user data based on the current state and updates the UI accordingly.
   */
  function displayUsers() {
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
  }

  displayUsers();
}));
