var tipoEscala=true;
var escala='c';
if ("geolocation" in navigator) {
  $('.js-geolocation').show(); 
} else {
  $('.js-geolocation').hide();
}

// WW
$('.js-geolocation').on('click', function() {
  navigator.geolocation.getCurrentPosition(function(position) {
    loadWeather(position.coords.latitude+','+position.coords.longitude); //load weather using your lat/lng coordinates
  });
});

$(document).ready(x());

function x() {
  $.simpleWeather({
    location: 'Lima,Perú',
    woeid: '',
    unit: escala,
    success: function(weather) {
      html = '<h2><i class="icon-'+weather.code+'"></i> '+'</h2>';
      html +='<h3 class="text-center">'+weather.city+'</h3>';
      html +='<div class=" datos col-xs-6">'+weather.high+'&deg;'+weather.units.temp+' / '+weather.low+'&deg;'+weather.units.temp+'</div>';
      html +='<div class="datos col-xs-6 currently">'+weather.currently+'</div>';
      // html +='<button onclick="escala('+weather+')"> Cambiar Escala </button>';

      $("#clima1").html(html);
      climaPorDias(weather,"#clima1Desc",weather.units.temp);

    },
    error: function(error) {
      $("#clima1").html('<p>'+error+'</p>');
    }
  });
  $.simpleWeather({
    location: 'London',
    woeid: '',
    unit: escala,
    success: function(weather) {
      html = '<h2><i class="icon-'+weather.code+'"></i> '+'</h2>';
      html +='<h3 class="text-center">'+weather.city+'</h3>';
      html +='<div class=" datos col-xs-6"> '+weather.high+'&deg;'+weather.units.temp+' / '+weather.low+'&deg;'+weather.units.temp+'</div>';
      html +='<div class="datos col-xs-6 currently">'+weather.currently+'</div>';
      
  
      $("#clima2").html(html);
      climaPorDias(weather,"#clima2Desc",weather.units.temp);
    },
    error: function(error) {
      $("#clima2").html('<p>'+error+'</p>');
    }
  });

  loadWeather('Seattle','')

  
}
function climaPorDias(weather,ciudad){
    html='';
    for(var i=0;i<weather.forecast.length;i++) {
        // html += '<p>weather.forecast['+i+'].date: '+weather.forecast[i].date+'</p>';
        html += '<p>'+weather.forecast[i].day+ ' '+weather.forecast[i].date +': &nbsp&nbsp&nbsp'+weather.forecast[i].high+'&deg;'+weather.units.temp+'/'+weather.forecast[i].low+'&deg;'+weather.units.temp+'</p>';
        $(ciudad).html(html);
      }

}

function escalaT(){
  if(tipoEscala==true){
    escala='f';
    x();
    $("#tp").text("F");
    tipoEscala=false;
  }
    else{
      escala='c';
      x();
      $("#tp").text("C");
      tipoEscala=true;
    }
}

function loadWeather(location, woeid) {
  $.simpleWeather({
    location: location,
    woeid: woeid,
    unit: escala,
    success: function(weather) {
      html = '<h2><i class="icon-'+weather.code+'"></i> '+'</h2>';
      html +='<h3 class="text-center">'+weather.city+'</h3>';
      html +='<div class=" datos col-xs-6">'+weather.high+'&deg;'+weather.units.temp+' / '+weather.low+'&deg;'+weather.units.temp+'</div>';
      html +='<div class="datos col-xs-6 currently">'+weather.currently+'</div>';
      
      $("#clima3").html(html);
      climaPorDias(weather,"#clima3Desc",weather.units.temp);
    },
    error: function(error) {
      $("#clima3").html('<p>'+error+'</p>');
    }
  });
}
