$((function() {
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
  $('.link-primary[data-bs-target="#modalNeedHelp"]').on("click", function(e) {
    e.preventDefault();
    $('#modalNeedHelp').modal('show');
  });
  $('.close').on("click", function(e) {
    e.preventDefault();
    $('#modalNeedHelp').modal('hide');
  })
}));
