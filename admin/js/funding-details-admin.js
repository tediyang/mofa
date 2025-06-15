$(function () {
  function fetchFunding(id) {
    // For Testing until endpoint is ready
    const allFundings = [
      {
        id: "000011",
        application_id: "00001",
        applicant: "Steven Darlington",
        application_name: "Lung Cancer Treatment",
        funding_name: "ECG",
        amount: 15000,
        status: "APPROVED",
        createdOn: "11/01/2025",
        updatedOn: "11/01/2025"
      },
      {
        id: "000012",
        application_id: "00001",
        applicant: "Steven Darlington",
        application_name: "Lung Cancer Treatment",
        funding_name: "X-RAY",
        amount: 10000,
        status: "PENDING",
        createdOn: "12/01/2025",
        updatedOn: "12/01/2025"
      },
      {
        id: "000021",
        application_id: "00002",
        applicant: "Maria Gonzalez",
        application_name: "Heart Cancer",
        funding_name: "ECHOCARDIOGRAPHY",
        amount: 55000,
        status: "PENDING",
        createdOn: "12/01/2025",
        updatedOn: "12/01/2025"
      }
    ];

    // Simulate an API call
    return new Promise((resolve) => {
      setTimeout(() => {
        const funding = allFundings.find((fund) => fund.id === id);
        resolve(funding);
      }, 1000);
    });
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
   * Adjusts the length of a funding name to fit screen size less than 350.
   * 
   * If the current screen width is less than the target screen width, this function
   * truncates the funding name to a maximum of 12 characters plus an ellipsis.
   * Otherwise, it returns the funding name unmodified.
   * 
   * @param {string} fundingName The funding name to adjust.
   * @return {string} The adjusted funding name.
   */
  function adjustCharacter(fundingName) {
    const targetScreen= 350;
    const maxChars = 12;
    const currentScreenWidth = $(window).width();

    if (currentScreenWidth < targetScreen) {
      const truncatedName = fundingName.length > maxChars ? fundingName.slice(0, maxChars) + "..." : fundingName;
      return truncatedName;
    }
    return fundingName;
  }

  /**
   * Fetches a funding and populates the funding details UI with the data.
   * This function is called when the page loads.
   * @return {undefined}
   */
  function displayFunding() {
    const urlParams = new URLSearchParams(window.location.search);
    const fundingId = urlParams.get("id");

    fetchFunding(fundingId).then((funding) => {
      if (funding) {
        // Populate funding details
        $("#funding-name").text(`${adjustCharacter(funding.funding_name + " Funding")}`);
        $("#applicant").text(funding.applicant);
        $("#application-name").text(funding.application_name);
        $("#view-app").attr("href", `application-details.html?id=${funding.application_id}`);

        // Populate breakdown table
        const fundingTable = $("#funding-table");
        const statusClass = funding.status === "APPROVED" ? "text-green" : funding.status === "DENIED" ? "text-danger" : funding.status === "AWAITING" ? "text-yellow" : "";
        const actionClass = ["DENIED", "APPROVED"].includes(funding.status) && "inactive";

        const row = `
          <tr class="breakdown-admin position-relative">
            <td data-label="Name">${funding.funding_name}</td>
            <td data-label="Amount">₦${formatNumber(funding.amount)}</td>
            <td class="d-none d-md-table-cell ${statusClass}" data-label="Status">${funding.status}</td>
            <td class="d-none d-md-table-cell" data-label="Action">
              <a href="#" id="approve" class="btn btn-light admin-approve ${actionClass}">
                <i class="fa fa-check"></i>
              </a>
              <a href="#" id="reject" class="btn btn-light admin-reject ${actionClass}">
                <i class="fa fa-times"></i>
              </a>
            </td>
            ${
              funding.status === "APPROVED"?
                `<td class="status approved d-md-none text-white"><i class="fa fa-check"></i></td>`:
              funding.status === "DENIED" ?
                `<td class="status denied d-md-none text-white"><i class="fa fa-times"></i></td>`:
                `<td class="status pending d-md-none text-white"><i class="fa fa-check"></i></td>`
            }
          </tr>`;
        fundingTable.append(row);

        // Total row with colspan
        const total = `
          <tr>
            <td colspan="4" class="text-center">
              <strong>Total: ₦${formatNumber(funding.amount)}</strong>
            </td>
          </tr>
        `;
        fundingTable.append(total);
      } else {
        alert("Funding not found.");
      }
    });
  }

  displayFunding();
});
