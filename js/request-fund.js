$((function() {
  function selectFunding() {
    const academyRadio = $('#academy');
    const careRadio = $('#care');
    const schoolIdField = $('#school-id');
  
    function toggleSchoolIdField() {
      if (academyRadio.is(':checked')) {
        schoolIdField.show();
      } else {
        schoolIdField.hide();
      }
    }
  
    academyRadio.on('change', toggleSchoolIdField);
    careRadio.on('change', toggleSchoolIdField);
  }

  function selectBeneficiary() {
    const additionalFields = $("#additional-fields");

    function toggleFields() {
      if ($("#others").is(":checked")) {
        additionalFields.slideDown("slow");
      } else {
          additionalFields.slideUp("fast");
      }
    }

    toggleFields();

    $('input[name="benefactor"]').change(function() {
      toggleFields();
    });
  }

  function addRequestData() {
    const rowsContainer = $('.rows-container');
    const addButton = $('.add-row-btn');
  
    // Add new row
    addButton.on('click', function() {
      const rowCount = rowsContainer.find('.request-row').length;
      if (rowCount < 10) {
        const newRow = $('<div class="request-row"></div>');
        newRow.html(`
          <div class="input-group">
            <input type="text" class="form-control" placeholder="request name">
            <input type="number" class="form-control" placeholder="Amount">
            <button class="delete-row">
              <i class="fa fa-times-circle"></i>
            </button>
          </div>
        `);
        rowsContainer.append(newRow);
      }
    });
  
    // Delete row
    rowsContainer.on('click', '.delete-row', function(e) {
      $(this).closest('.request-row').remove();
    });
  }

  function init() {
    addRequestData();
    selectFunding();
    selectBeneficiary();
  }
  
  init();
}));
