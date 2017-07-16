//TODO: ADD More blocks 
$(document).ready(function() {

    $("#getFirst").on("click", function() {
window.scrollTo(0,0);    //Scrolls to top of page when clicked 
     $.getJSON('https://data.baltimorecity.gov/resource/m8g9-abgb.json?$limit=25&$order=calldatetime DESC&$where=incidentlocation="1400 W 37TH ST"', function(json) {

        var html = "";
   
                
  json.forEach(function(val) {
  var keys = Object.keys(val);
  html += "<div class = 'crime'>";
  keys.forEach(function(key) {
    html += "<strong>" + key + "</strong>: " + val[key] + "<br>";
  });
  html += "</div><br>";
});
        
       

        $(".message").html(html);

      });
    });
  });
    $("#getSecond").on("click", function() {
window.scrollTo(0,0);    $.getJSON('https://data.baltimorecity.gov/resource/m8g9-abgb.json?$limit=25&$order=calldatetime DESC&$where=incidentlocation="1300 W 37TH ST"', function(json) {

        var html = "";
   
                
  json.forEach(function(val) {
  var keys = Object.keys(val);
  html += "<div class = 'crime'>";
  keys.forEach(function(key) {
    html += "<strong>" + key + "</strong>: " + val[key] + "<br>";
  });
  html += "</div><br>";
});
        
       

        $(".message").html(html);

      });
    });
 $("#getThird").on("click", function() {
window.scrollTo(0,0); $.getJSON('https://data.baltimorecity.gov/resource/m8g9-abgb.json?$limit=25&$order=calldatetime DESC&$where=incidentlocation="1200 W 37TH ST"', function(json) {

        var html = "";
   
                
  json.forEach(function(val) {
  var keys = Object.keys(val);
  html += "<div class = 'crime'>";
  keys.forEach(function(key) {
    html += "<strong>" + key + "</strong>: " + val[key] + "<br>";
  });
  html += "</div><br>";
});
        
       

        $(".message").html(html);

      });
    });
 $("#getFourth").on("click", function() {
window.scrollTo(0,0);    $.getJSON('https://data.baltimorecity.gov/resource/m8g9-abgb.json?$limit=25&$order=calldatetime DESC&$where=incidentlocation="3600 BUENA VISTA AV"', function(json) {

        var html = "";
   
                
  json.forEach(function(val) {
  var keys = Object.keys(val);
  html += "<div class = 'crime'>";
  keys.forEach(function(key) {
    html += "<strong>" + key + "</strong>: " + val[key] + "<br>";
  });
  html += "</div><br>";
});
        
       

        $(".message").html(html);

      });
    });