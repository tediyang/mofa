$((function() {
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

  function settings() {
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
