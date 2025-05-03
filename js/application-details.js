$(function () {
  function fetchApplication(id) {
    const allApplications = [
      // For Testing until endpoint is ready
      {
        id: "00001",
        applicant: "Steven Darlington",
        applicationName: "Lung Cancer Treatment",
        applicantStory: `Little Steven, a vibrant seven-year-old with a smile that could light up a room, was recently diagnosed with a rare and aggressive form of childhood cancer. Just months ago, he was a picture of health, full of energy and dreams of becoming a pilot. Now, his days are filled with doctor's visits, painful treatments, and the constant fear that the disease will progress.  The once bright spark in his eyes has dimmed, replaced by a weariness that no child should ever have to bear. His family, devastated by the diagnosis, are struggling to cope with the emotional and financial burden of his illness. They've exhausted their savings and are now faced with the heartbreaking reality that they may not be able to afford the life-saving treatment Ayo desperately needs.`,
        totalAmount: 140000,
        approvedAmount: 25000,
        deniedAmount: 0,
        pendingAmount: 115000,
        breakdown: [
          {
            ECG: 15000,
            status: "APPROVED",
          },
          {
            ECHOCARDIOGRAM: 65000,
            status: "PENDING",
          },
          {
            "X-RAY": 10000,
            status: "APPROVED",
          },
          {
            ADMISSION: 50000,
            status: "PENDING"
          },
        ],
        contact: {
          name: "LUTH",
          email: "luth@gmail.com",
          address: "Surulere, Lagos",
          phone: undefined
        },
        images: [
          "../img/ig_1.jpg",
          "../img/ig_2.jpg",
          "../img/ig_5.jpg"
        ],
        status: "APPROVED",
        createdOn: "15/03/2025",
        updatedOn: "15/03/2025",
      },
      {
        id: "00002",
        applicant: "Maria Gonzalez",
        applicationName: "Diabetes Management Program",
        applicantStory: "Seven-year-old Maria is a bright, inquisitive child who loves building intricate Lego creations and dreaming of becoming an engineer.  His laughter used to fill his family's home, a constant reminder of the joy and boundless energy of childhood.  But recently, a shadow has fallen over their lives. Leo has been diagnosed with a rare genetic disorder that progressively weakens his muscles, making everyday activities like walking, playing, and even breathing increasingly difficult.  The diagnosis has been devastating, turning their world upside down and filling their days with worry and uncertainty about the future.  Leo's parents are heartbroken, watching their vibrant son slowly lose his physical abilities, knowing that without intervention, his condition will continue to deteriorate.",
        category: "ACADEMY",
        totalAmount: 100000,
        approvedAmount: 0,
        deniedAmount: 100000,
        pendingAmount: 0,
        breakdown: [
          {
            DRUGS: 100000,
            status: "DENIED",
          }
        ],
        contact: {
          name: "St. Patrick's Hospital",
          email: "saintpatrickhospital@gmail.com",
          address: "Satellite Town, Lagos",
          phone: undefined
        },
        images: [
          "../img/ig_6.jpg",
          "../img/ig_7.jpg",
          "../img/ig_8.jpg"
        ],
        status: "DENIED",
        createdOn: "18/03/2025",
        updatedOn: "22/03/2025"
      },
    ];

    // Simulate an API call
    return new Promise((resolve) => {
      setTimeout(() => {
        const application = allApplications.find((app) => app.id === id);
        resolve(application);
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

  function displayApplication() {
    const urlParams = new URLSearchParams(window.location.search);
    const applicationId = urlParams.get("id");

    fetchApplication(applicationId).then((application) => {
      if (application) {
        // Populate application details
        $("#applicant").text(application.applicant);
        $("#applicant-story").text(application.applicantStory);

        // Populate application name
        const status = application.status === "DENIED" ? "Ended" : application.status === "APPROVED" ? "Active" : "";
        const statusClass = application.status === "DENIED" ? "bg-dark" : application.status === "APPROVED" ? "bg-success" : "";
        const applicationName = `
          ${application.applicationName} <span class="details-status ${statusClass} text-white badge">${status}</span>
        `;
        $("#application-name").html(applicationName);

        // Populate breakdown table
        const breakdownTable = $("#breakdown-table");
        application.breakdown.forEach((item) => {
          const statusClass = item.status === "APPROVED" ? "text-green" : 
                             item.status === "DENIED" ? "text-danger" : "";
          const key = Object.keys(item)[0];
          const value = Object.values(item)[0];
        
          const row = `
            <tr class="position-relative">
              <td data-label="Name">${key}</td>
              <td data-label="Amount">₦${formatNumber(value)}</td>
              <td class="d-none d-md-block ${statusClass}" data-label="Status">${item.status}</td>
              ${
                item.status === "APPROVED"?
                  `<td class="status approved d-md-none text-white"><i class="fa fa-check"></i></td>`:
                item.status === "DENIED" ?
                  `<td class="status denied d-md-none text-white"><i class="fa fa-times"></i></td>` :
                  `<td class="status pending d-md-none text-white"><i class="fa fa-check"></i></td>`
                }
            </tr>`;
          breakdownTable.append(row);
        });
        
        // Total row with colspan
        const total = `
          <tr>
            <td colspan="3" class="text-center">
              <strong>Total: ₦${formatNumber(application.totalAmount)}</strong>
            </td>
          </tr>
        `;
        breakdownTable.append(total);

        // Populate contact details
        const contactDetails = `
          <tr>
            <td data-label="Name">${application.contact.name}</td>
            <td data-label="Email">${application.contact.email || "N/A"}</td>
            <td data-label="Address">${application.contact.address}</td>
            <td data-label="Phone">${application.contact.phone || "N/A"}</td>
          </tr>
        `;
      $("#contact-details").html(contactDetails);

        // Populate images
        const imagesContainer = $("#images-container");
        application.images.forEach((image) => {
          const imgElement = `
            <div class="col-lg-4 col-sm-6">
              <div class="applications-card applications-card-bordered h-100">
                <img src="${image}" alt="Application Image" class="img-thumbnail">
              </div>
            </div>
          `;
          imagesContainer.append(imgElement);
        });
      } else {
        alert("Application not found.");
      }
    });
  }

  displayApplication();
});
