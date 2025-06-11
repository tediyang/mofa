$((function() {
    /**
   * Fetches the current admin user for the dashboard.
   *
   * For now, this function just returns a mock admin object for testing.
   * When the API is ready, this should be replaced with a call to the relevant endpoint.
   *
   * @return {Object} The admin user, with the following properties:
   *   - lastName: The admin's last name.
   *   - firstName: The admin's first name.
   *   - status: The admin's current status.
   *   - role: The admin's role.
   */
  function fetchAdmin() {
    const admin = {
      // for testing until endpoint is ready
      id: "ghp_1234567890abcdef1234567890abcdef12345678",
      lastName: "Darlinton",
      firstName: "Steven",
      role: "admin", // or "super-admin"
      status: "active",
    };

    return admin;
  }

  function handlePasswordUpdate() {
    const $form = $('#password-form');
    const $submitForm = $('#password-form .submit');
    const $cancelForm = $('#password-form .cancel');
    $('#change-password').on('click', '.btn-primary', function(e) {
      e.preventDefault();

      // Real-time password validation
      $('#new-password, #confirm-new-password, #current-password').on('input', function() {
        validatePassword();
      });
    });

    // submit form
    $submitForm.on('click', function(e) {
      e.preventDefault();

      if (!validatePassword()) return;

      const formData = {
        currentPassword: $('#current-password').val().trim(),
        newPassword: $('#new-password').val().trim()
      };
      
      // api call
      
      $form[0].reset();
      // Close modal
      $('#change-password').modal('hide');
    });

    // cancel form
    $cancelForm.on('click', function(e) {
      $form[0].reset();
    });
  }

  function validatePassword() {
    const $newPassword = $('#new-password');
    const $confirmPassword = $('#confirm-new-password');
    const $currentPassword = $('#current-password');
    const $passwordErrors = {
      new: $('#password-error'),
      current: $('#password-error-curr'),
      confirm: $('#password-error-confirm')
    };
    const $formIcons = {
      new: $('#new-password + .form-control-wrap'),
      current: $('#current-password + .form-control-wrap'),
      confirm: $('#confirm-new-password + .form-control-wrap')
    };
    let isValid = true;

    Object.values($passwordErrors).forEach($error => {
      $error.text('').hide();
    });
    Object.values($formIcons).forEach($icon => {
      $icon.removeClass('move');
    });
    $('.is-invalid').removeClass('is-invalid');

    if ($currentPassword.val().length < 1) {
      $passwordErrors.current.text('Password required').show();
      $currentPassword.addClass('is-invalid');
      $formIcons.current.addClass('move');
      isValid = false;
    }
    
    if ($newPassword.val() !== $confirmPassword.val()) {
      $passwordErrors.confirm.text('Passwords do not match').show();
      $confirmPassword.addClass('is-invalid');
      $formIcons.confirm.addClass('move');
      isValid = false;
    }
    
    if ($newPassword.val().length < 8) {
      $passwordErrors.new.text('Password must be at least 8 characters').show();
      $newPassword.addClass('is-invalid');
      $formIcons.new.addClass('move');
      isValid = false;
    }

    return isValid;
  }

  function handleAccountStatus() {
    const $delete = $('.data-item .btn-danger');
    const $deactivate = $('.data-item .btn-warning');

    $delete.on('click', () => {
      $('#account-action .modal-title').text('Delete Account?');
      $('#account-action .modal-body .message').text(`
        Are you sure you want to delete your account? This action cannot be undone. All your data will be permanently deleted, and you won't be able to register a new account with this email.
      `);
    })

    $deactivate.on('click', () => {
      $('#account-action .modal-title').text('Deactivate Account?');
      $('#account-action .modal-body .message').text(`
        Are you sure you want to deactivate your account? You can reactivate it at any time by using forget password.
      `);
    })
  };

  function handleRole() {
    const admin = fetchAdmin();
    const html = `
      <div id="manage-admins" class="data-item ${admin.role !== 'super-admin' && 'd-none'}">
        <div class="data-col">
          <span class="data-label">Manage Admins</span>
        </div>
        <div class="data-col data-col-end">
          <a href="manage-admins.html">
            <span class="data-more">
              <i class="fa fa-chevron-right"></i>
            </span>
          </a>
        </div>
      </div>
      <div
        class="data-item"
        data-bs-toggle="modal"
        data-bs-target="#change-password"
      >
        <div class="data-col">
          <span class="data-label">Change Password</span>
        </div>
        <div class="data-col data-col-end">
          <span class="data-more"
            ><i class="fa fa-chevron-right"></i>
          </span>
        </div>
      </div>
      <div id="deactivate" class="data-item ${admin.role === 'super-admin' && 'd-none'}">
        <div class="data-col">
          <span class="data-label">Deactivate Account</span
          ><span class="data-value"></span>
        </div>
        <div class="data-col data-col-end"
          data-bs-toggle="status-modal"
          data-bs-target="#account-action"
        >
          <a href="#" class="btn btn-warning text-white text-decoration-none">Deactivate</a>
        </div>
      </div>
      <div class="data-item">
        <div class="data-col">
          <a href="#" class="btn btn-primary button-primary text-decoration-none border-0">Logout</a>
          </div>
          </div>
    `;

    $('.profile-data.data-list').html(html);
  }
  
  function settings() {
    handleRole();

    // Handle modal popup
    $('[data-bs-toggle="modal"]').on("click", () => {
      $('#change-password').modal('show');
    });
    $('[data-bs-toggle="status-modal"]').on("click", () => {
      $('#account-action').modal('show');
    });
    $('[data-bs-dismiss="modal"]').on("click", () => {
      $('#change-password').modal('hide');
      $('#account-action').modal('hide');
    });

    // Handle Password visibility toggle
    $('.passcode-switch').on("click", function(e) {
      e.preventDefault();
      const targetId = $(this).data('target');
      const targetInput = $('#' + targetId);
      const iconShow = $(this).find('.icon-show');
      const iconHide = $(this).find('.icon-hide');
  
      if (targetInput.attr('type') === 'password') {
        targetInput.attr('type', 'text');
        iconShow.hide();
        iconHide.show();
      } else {
        targetInput.attr('type', 'password');
        iconShow.show();
        iconHide.hide();
      }
    });

    handlePasswordUpdate();
    handleAccountStatus();
  };

  settings();
}));
