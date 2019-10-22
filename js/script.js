var $contents = $('.tab-content');
$contents.slice(1).hide();
$('.link').click(function() {
  var $target = $('#' + this.id + 'show').show();
  $contents.not($target).hide();
});