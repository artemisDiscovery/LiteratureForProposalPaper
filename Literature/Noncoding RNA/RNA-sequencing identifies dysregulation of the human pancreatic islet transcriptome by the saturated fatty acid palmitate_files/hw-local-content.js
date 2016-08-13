$(document).ready(function() {
if($('#col-2 li.notice.correction-links').length){
baseURL = window.location.origin?window.location.origin + '':(window.location.protocol+"/"+window.location.host);
correctURL=$("li.notice.correction-links a").attr('href');

$.ajax({url:(baseURL + correctURL + '.citation'),success:function(response){
   result = $(response).filter('meta');

  $(result).each(function(i){
      if($(this).attr('name')=='citation_section' && $(this).attr('content')=='Addendum'){
        $('.correction-links > a > span').text("An addendum has been published");
      };
  });
},async:false
});
};
});
