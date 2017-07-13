  $(document).ready(function() {

    $("#getMessage").on("click", function() {
      // My API call to get the data for a particular block in Baltimore
      $.getJSON("https://data.baltimorecity.gov/resource/m8g9-abgb.json?incidentlocation=1400 W 37TH ST&$order=calldatetime DESC", function(json) {

        var html = "";
        
                
  json.forEach(function(val) {
  var keys = Object.keys(val);
  html += "<div class = 'crime'>";
  keys.forEach(function(key) {
    html += "<strong>" + key + "</strong>: " + val[key] + "<br>";
  });
  html += "</div><br>";
});
        
        // Display the JSON results

        $(".message").html(html);

      });
    });
  });