$((function() {
  function fetchUser(id) {
    const allUsers = [
      {
        id: "00001",
        lastName: "Darlinton",
        firstName: "Steven",
        profileAvatar: "male_1.svg",
        phone: "08123456789",
        email: "steven.darlinton@gmail.com",
        dob: "30/05/1996",
        gender: "male",
        status: "unverified",
        address: "No 12, Johnson Street, Surulere, Lagos",
        createdOn: "18/03/2025",
        updatedOn: "22/03/2025"
      },
      {
        id: "00002",
        lastName: "Adeoye",
        firstName: "Fatima",
        profileAvatar: "female_2.svg",
        phone: "08034567890",
        email: "fatima.adeoye@gmail.com",
        dob: "15/01/1990",
        gender: "female",
        status: "verified",
        address: "No 45, Ogunlana Street, Agege, Lagos",
        createdOn: "01/02/2025",
        updatedOn: "05/02/2025"
      },
      {
        id: "00003",
        lastName: "Okoro",
        firstName: "Chinedu",
        profileAvatar: "male_2.svg",
        phone: "09012345678",
        email: "chinedu.okoro@gmail.com",
        dob: "22/11/1988",
        gender: "male",
        status: "verified",
        address: "No 8, Akintola Street, Victoria Island, Lagos",
        createdOn: "10/01/2025",
        updatedOn: "12/01/2025"
      },
      {
        id: "00004",
        lastName: "Bello",
        firstName: "Aisha",
        profileAvatar: "female_2.svg",
        phone: "07067890123",
        email: "aisha.bello@gmail.com",
        dob: "03/07/1993",
        gender: "female",
        status: "unverified",
        address: "No 15, Adebayo Street, Oshodi, Lagos",
        createdOn: "05/03/2025",
        updatedOn: "05/03/2025"
      },
      {
        id: "00005",
        lastName: "Peters",
        firstName: "David",
        profileAvatar: "male_3.svg",
        phone: "08056789012",
        email: "david.peters@gmail.com",
        dob: "10/04/1985",
        gender: "male",
        status: "verified",
        address: "No 3, Ogunyinka Street, Fadeyi, Lagos",
        createdOn: "20/02/2025",
        updatedOn: "28/02/2025"
      },
      {
        id: "00006",
        lastName: "Usman",
        firstName: "Hadiza",
        profileAvatar: "female_3.svg",
        phone: "08167890123",
        email: "hadiza.usman@gmail.com",
        dob: "25/09/1991",
        gender: "female",
        status: "unverified",
        address: "No 17, Olusegun Obasanjo Street, GRA, Port Harcourt, Rivers State",
        createdOn: "12/03/2025",
        updatedOn: "12/03/2025"
      },
      {
        id: "00007",
        lastName: "Eze",
        firstName: "Nnamdi",
        profileAvatar: "male_4.svg",
        phone: "09078901234",
        email: "nnamdi.eze@gmail.com",
        dob: "08/12/1995",
        gender: "male",
        status: "deactivated",
        address: "No 22, IBB Way, Uyo, Akwa Ibom",
        createdOn: "01/04/2025",
        updatedOn: "03/04/2025"
      },
      {
        id: "00008",
        lastName: "Mohammed",
        firstName: "Zainab",
        profileAvatar: "female_3.svg",
        phone: "08023456789",
        email: "zainab.mohammed@gmail.com",
        dob: "19/06/1987",
        gender: "female",
        status: "verified",
        address: "No 11, Sokoto Road, Kaduna, Kaduna State",
        createdOn: "25/01/2025",
        updatedOn: "01/02/2025"
      },
      {
        id: "00009",
        lastName: "Johnson",
        firstName: "Blessing",
        profileAvatar: "female_2.svg",
        phone: "08134567890",
        email: "blessing.johnson@gmail.com",
        dob: "02/03/1998",
        gender: "female",
        status: "unverified",
        address: "No 4, Oshodi Street, Owerri, Imo State",
        createdOn: "07/04/2025",
        updatedOn: "07/04/2025"
      },
      {
        id: "00010",
        lastName: "Davies",
        firstName: "Gabriel",
        profileAvatar: "male_4.svg",
        phone: "07089012345",
        email: "gabriel.davies@gmail.com",
        dob: "14/08/1983",
        gender: "male",
        status: "unverified",
        address: "No 12, Woji Street, Port Harcourt, Rivers State",
        createdOn: "28/02/2025",
        updatedOn: "01/03/2025"
      },
      {
        id: "00011",
        lastName: "Okafor",
        firstName: "Chioma",
        profileAvatar: "female_3.svg",
        phone: "08045678901",
        email: "chioma.okafor@gmail.com",
        dob: "05/05/1994",
        gender: "female",
        status: "deleted",
        address: "No 8, Okpara Street, Asaba, Delta State",
        createdOn: "11/01/2025",
        updatedOn: "15/01/2025"
      },
      {
        id: "00012",
        lastName: "Musa",
        firstName: "Abdul",
        profileAvatar: "male_4.svg",
        phone: "09023456789",
        email: "abdul.musa@gmail.com",
        dob: "20/10/1989",
        gender: "male",
        status: "verified",
        address: "No 11, Ogunlana Street, Agege, Lagos",
        createdOn: "17/02/2025",
        updatedOn: "20/02/2025"
      },
      {
        id: "00013",
        lastName: "Nduka",
        firstName: "Victoria",
        profileAvatar: "female_2.svg",
        phone: "08178901234",
        email: "victoria.nduka@gmail.com",
        dob: "11/07/1997",
        gender: "female",
        status: "unverified",
        address: "No 10, Lekki Epe Expressway, Lekki, Lagos",
        createdOn: "03/03/2025",
        updatedOn: "03/03/2025"
      },
      {
        id: "00014",
        lastName: "Aminu",
        firstName: "Sani",
        profileAvatar: "male_3.svg",
        phone: "07056789012",
        email: "sani.aminu@gmail.com",
        dob: "29/01/1982",
        gender: "male",
        status: "deleted",
        address: "No 12, Ikorodu Road, Fadeyi, Lagos",
        createdOn: "09/04/2025",
        updatedOn: "10/04/2025"
      },
      {
        id: "00015",
        lastName: "Adeleke",
        firstName: "Funke",
        profileAvatar: "female_2.svg",
        phone: "08089012345",
        email: "funke.adeleke@gmail.com",
        dob: "18/04/1992",
        gender: "female",
        status: "deactivated",
        address: "No 15, Ola Adebayo Street, Ikorodu, Lagos",
        createdOn: "21/02/2025",
        updatedOn: "21/02/2025"
      }
    ];

    // Simulate an API call
    return new Promise((resolve) => {
      setTimeout(() => {
        const user = allUsers.find((user) => user.id === id);
        resolve(user);
      }, 1000);
    });
  };

  function formatDOB(dobString) {
    const [dd, mm, yyyy] = dobString.split('/');
  
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    return `${dd} ${months[parseInt(mm, 10) - 1]}, ${yyyy}`;
  }


  function getAvatars() {
    const avatars = [
      { name: "male_1.svg" },
      { name: "male_2.svg" },
      { name: "male_3.svg" },
      { name: "male_4.svg" },
      { name: "female_2.svg" },
      { name: "female_3.svg" },
    ];

    return avatars;
  }

  function updateAvatar(user) {
    const avatars = getAvatars(); // Get current profile
    let html = '';

    $.each(avatars, function(index, avatar) {
      // Add active class if matches current avatar
      const isActive = avatar.name === user.profileAvatar ? 'active' : '';

      html += `
        <div class="col-4">
          <div class="change-avatar ${isActive} mb-3">
            <img src="../img/svg/avatar/${avatar.name}" 
              alt="${avatar.name}" 
              class="img--avatar" 
              data-name="${avatar.name}">
          </div>
        </div>
      `;
    });
    $('#avatar-list').html(html); // display list of avatars

    // Add click handler for avatar images
    $('#avatar-list').on('click', '.img--avatar', function() {
      // select avatar
      $('.change-avatar').removeClass('active');
      $(this).closest('.change-avatar').addClass('active');
  
      $('.update').on('click', '.btn', function(e) {
        e.preventDefault();

        // Get the selected avatar (from the active class)
        const selectedAvatar = $('.change-avatar.active').find('img').data('name');

        // Update the profile avatar
        user.profileAvatar = selectedAvatar;

        //API call to update the profile

        // update UI
        $('.benefactor-avatar img').attr('src', `../img/svg/avatar/${selectedAvatar}`);
        $('#change-avatar').modal('hide');
      });
    });
  }

  function updateProfile(user) {
    // Handle profile edit modal
    $('#profile-edit').on('show.bs.modal', function() {
      // Populate form fields with current data
      $('#first-name').val(user.firstName);
      $('#last-name').val(user.lastName);
      $('#phone-no').val(user.phone);
      $('#address').val(user.address);
    });

    // Handle profile update
    $('#profile-edit').on('click', '.btn', function(e) {
      e.preventDefault();

      // Get updated values
      const updatedData = {
        firstName: $('#first-name').val().trim(),
        lastName: $('#last-name').val().trim(),
        phone: $('#phone-no').val().trim(),
        address: $('#address').val().trim()
      };

      // Update user object
      Object.assign(user, updatedData);

      // Update UI
      $('[data-label="First Name"]').siblings('.data-value').text(user.firstName);
      $('[data-label="Last Name"]').siblings('.data-value').text(user.lastName);
      $('[data-label="Phone Number"]').siblings('.data-value').text(user.phone);
      $('[data-label="Address"]').siblings('.data-value').text(user.address);

      // Close modal
      $('#profile-edit').modal('hide');

      // Api call to update
    });
  }

  function displayUser() {
    const urlParams = new URLSearchParams(window.location.search);
    const userId = urlParams.get("id");

    fetchUser(userId).then((user) => {
      if (user) {    
        updateAvatar(user); // update avatar
        updateProfile(user); // update profile
    
        // display avatar
        $('.benefactor-avatar').html(
          `<img class="img--avatar" src="../img/svg/avatar/${user.profileAvatar}" alt="${user.firstName} ${user.lastName}">`
        );
    
        // display profile details
        $('.data-item').each(function() {
          const $item = $(this);
          const label = $item.find('.data-label').text().trim();
          const $value = $item.find('.data-value');
    
          switch(label) {
            case 'First Name':
              $value.text(user.firstName);
              break;
            case 'Last Name':
              $value.text(user.lastName);
              break;
            case 'Email':
              $value.text(user.email);
              break;
            case 'Gender':
              $value.text(user.gender.charAt(0).toUpperCase() + user.gender.slice(1));
              break;
            case 'Date of Birth':
              $value.text(formatDOB(user.dob));
              break;
            case 'Phone Number':
              $value.text(user.phone);
              break;
            case 'Address':
              $value.text(user.address);
              break;
            case 'Account Tier':
              $value.text(user.status.charAt(0).toUpperCase() + user.status.slice(1));
          }
        });
    
        // update kyc based on status
        if (user.status === 'verified') {
          $('.kyc').html(`<p class="status approved text-white m-0"><i class="fa fa-check"></i></p>`)
        } else if (user.status === 'pending') {
          $('.kyc').html(`<p class="status pending text-white m-0"><i class="fa fa-check"></i></p>`)
        } else {
          $('.kyc').html(`<a href="kyc-application.html" class="kyc-link link link-primary">Setup</a>`);
        }
    
        // Handle modal popup
        $('[data-bs-toggle="modal"]').on("click", () => {
          $('#profile-edit').modal('show');
        });
        $('[data-bs-toggle="profile-modal"]').on("click", () => {
          $('#change-avatar').modal('show');
        });
        $('[data-bs-dismiss="modal"]').on("click", () => {
          $('#profile-edit').modal('hide');
          $('#change-avatar').modal('hide');
        });
      } else {
        alert("User not found.");
      }
    });
  }

  displayUser();
}));
