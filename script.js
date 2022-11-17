$('button').click(function(){
    var lang = $('html').attr('lang');
    if(lang == 'en') $('html').attr('lang','es');
    if(lang == 'es') $('html').attr('lang','en');
  });