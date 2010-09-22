/*
Example usage:

  $(function() {
    $(".time").localize_time();
  });

*/

(function($) {
  $.fn.localize_time = function(options) {
    this.each(function() {
      var serverTimestamp = Date.parse($(this).text());
      if (serverTimestamp != NaN) {
        var localTime = new Date();
        localTime.setTime(serverTimestamp);
        $(this).text(localTime.toString());
      }
    });
  };
})(jQuery);


