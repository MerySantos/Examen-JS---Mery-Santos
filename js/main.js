$(document).ready(function() {
  $.simpleWeather({
    location: 'Lima,Perú',
    woeid: '',
    unit: 'c',
    success: function(weather) {
      html = '<h2><i class="icon-'+weather.code+'"></i> '+'</h2>';
      html +='<div class=" datos col-xs-6">'+weather.high+'&deg;'+weather.units.temp+' / '+weather.low+'&deg;'+weather.units.temp+'</div>';
      html +='<div class="datos col-xs-6 currently">'+weather.currently+'</div>';
      html +='<hr style="color: white;" />';
      html +='<h3 class="text-left">'+weather.city+'</h3>';

      $("#clima1").html(html);
    },
    error: function(error) {
      $("#clima1").html('<p>'+error+'</p>');
    }
  });
  $.simpleWeather({
    location: 'London',
    woeid: '',
    unit: 'c',
    success: function(weather) {
      html = '<h2><i class="icon-'+weather.code+'"></i> '+'</h2>';
      html +='<div class=" datos col-xs-6">'+weather.high+'&deg;'+weather.units.temp+' / '+weather.low+'&deg;'+weather.units.temp+'</div>';
      html +='<div class="datos col-xs-6 currently">'+weather.currently+'</div>';
      html +='<hr style="color: white;" />';
      html +='<h3 class="text-left">'+weather.city+'</h3>';
  
      $("#clima2").html(html);
    },
    error: function(error) {
      $("#clima2").html('<p>'+error+'</p>');
    }
  });
});
