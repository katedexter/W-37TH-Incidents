  $(document).ready(function() {

    $("#getMessage").on("click", function() {
      $.getJSON("https://data.baltimorecity.gov/resource/m8g9-abgb.json?incidentlocation=1400 W 37TH ST&$order=calldatetime DESC", function(json) {

        var html = "";
        // Only change code below this line.
                
  json.forEach(function(val) {
  var keys = Object.keys(val);
  html += "<div class = 'crime'>";
  keys.forEach(function(key) {
    html += "<strong>" + key + "</strong>: " + val[key] + "<br>";
  });
  html += "</div><br>";
});
        
        // Only change code above this line.

        $(".message").html(html);

      });
    });
  });