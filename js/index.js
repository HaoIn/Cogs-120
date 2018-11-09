$(document).ready(function() {
  $('.School').css('display', 'block');
  $('.Work').css('display', 'none');
  $('#event').change(function(){
    switch ($(this).val()) {
      case 'Work':
        $('.Work').css('display','block');
        $('.School').css('display', 'none');
        break;
      case 'School':
        $('.School').css('display', 'block');
        $('.Work').css('display', 'none');
        break;
      //case 'Party':
        //$('.Party').css('display','block');
        //break;
      //case 'Casual':
        //$('.Causal').css('display', 'block');
        //break;
      default:
      //$('.School').css('display', 'block');
      //$('.Work').css('display', 'none');
      //$('.Party').css('display', 'none');
      //$('.Causal').css('display', 'none');

    }
})

})
