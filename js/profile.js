$((function() {
  function formatDOB(dobString) {
    const [dd, mm, yyyy] = dobString.split('/');
  
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 
                   'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    return `${dd} ${months[parseInt(mm, 10) - 1]}, ${yyyy}`;
  }

  function fetchProfile() {
    const beneficiary = { // for testing until endpoint is ready
      lastName: "Darlinton",
      firstName: "Steven",
      profileAvatar: "male_1.svg",
      email: "arsenal.nocup@gmail.com",
      phone: "08123456789",
      dob: "30/05/1996",
      address: "No 2, Shobowale Street, Ikeja, Lagos.",
      gender: "male",
      status: "unverified"
    }

    return beneficiary;
  };

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

  function updateAvatar(beneficiary) {
    const avatars = getAvatars(); // Get current profile
    let html = '';

    $.each(avatars, function(index, avatar) {
      // Add active class if matches current avatar
      const isActive = avatar.name === beneficiary.profileAvatar ? 'active' : '';

      html += `
        <div class="col-4">
          <div class="change-avatar ${isActive} mb-3">
            <img src="img/svg/avatar/${avatar.name}" 
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
        beneficiary.profileAvatar = selectedAvatar;

        //API call to update the profile

        // update UI
        $('.benefactor-avatar img').attr('src', `img/svg/avatar/${selectedAvatar}`);
        $('#change-avatar').modal('hide');
      });
    });
  }

  function updateProfile(beneficiary) {
    // Handle profile edit modal
    $('#profile-edit').on('show.bs.modal', function() {
      // Populate form fields with current data
      $('#first-name').val(beneficiary.firstName);
      $('#last-name').val(beneficiary.lastName);
      $('#phone-no').val(beneficiary.phone);
      $('#address').val(beneficiary.address);
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

      // Update beneficiary object
      Object.assign(beneficiary, updatedData);

      // Update UI
      $('[data-label="First Name"]').siblings('.data-value').text(beneficiary.firstName);
      $('[data-label="Last Name"]').siblings('.data-value').text(beneficiary.lastName);
      $('[data-label="Phone Number"]').siblings('.data-value').text(beneficiary.phone);
      $('[data-label="Address"]').siblings('.data-value').text(beneficiary.address);

      // Close modal
      $('#profile-edit').modal('hide');

      // Api call to update
    });
  }

  function displayProfile() {
    let beneficiary = fetchProfile();    
    updateAvatar(beneficiary); // update avatar
    updateProfile(beneficiary); // update profile

    // display avatar
    $('.benefactor-avatar').html(
      `<img class="img--avatar" src="img/svg/avatar/${beneficiary.profileAvatar}" alt="${beneficiary.firstName} ${beneficiary.lastName}">`
    );

    // display profile details
    $('.data-item').each(function() {
      const $item = $(this);
      const label = $item.find('.data-label').text().trim();
      const $value = $item.find('.data-value');

      switch(label) {
        case 'First Name':
          $value.text(beneficiary.firstName);
          break;
        case 'Last Name':
          $value.text(beneficiary.lastName);
          break;
        case 'Email':
          $value.text(beneficiary.email);
          break;
        case 'Gender':
          $value.text(beneficiary.gender.charAt(0).toUpperCase() + beneficiary.gender.slice(1));
          break;
        case 'Date of Birth':
          $value.text(formatDOB(beneficiary.dob));
          break;
        case 'Phone Number':
          $value.text(beneficiary.phone);
          break;
        case 'Address':
          $value.text(beneficiary.address);
          break;
        case 'Account Tier':
          $value.text(beneficiary.status.charAt(0).toUpperCase() + beneficiary.status.slice(1));
      }
    });

    // update kyc based on status
    if (beneficiary.status === 'verified') {
      $('.kyc').html(`<p class="status approved text-white m-0"><i class="fa fa-check"></i></p>`)
    } else if (beneficiary.status === 'pending') {
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
  };

  displayProfile();
}));
