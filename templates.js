var templates = {};
templates.charDisplayTemplate = [
  "<div id= '<%= id%>' rel = '<%= name %>' class='info-container'>",
  "<h1> <%= name %> </h1>",
  "<img src = '<%= img %>'>",
  "<div id = 'stats-div'>",
  "<h3> Forehand:  <%= forehand %> </h3>",
  "<h3> Backhand:  <%= backhand %> </h3>",
  "<h3> Mental Strength: <%= mentalStrength %> </h3>",
  "<h4> Total Rating: <%= rating %> </h3>",
  "</div>",
  "</div>"
].join("");

templates.paddleDisplayTemplate = [
  "<div id= '<%= id %>' rel = '<%= name %>' class='paddle-info-container'>",
  "<h1> <%= name %> </h1>",
  "<img src = '<%= img %>'>",
  "<div id = 'stats-div'>",
  "<h3> Control:  <%= control %> </h3>",
  "<h3> Power:  <%= power %> </h3>",
  "</div>",
  "</div>"
].join("");

templates.locationDisplayTemplate = [
  "<div id= '<%= id %>' rel = '<%= name %>' class='location-info-container'>",
  "<h1> <%= name %> </h1>",
  "<img src = '<%= img %>'>",
  "<div id = 'stats-div'>",
  "<h3> Distraction Level:  <%= setDistractionLevel %> </h3>",
  "</div>",
  "</div>"
].join("");

templates.opponentDisplayTemplate = [
  "<div id= '<%= id %>' rel = '<%= name %>' class='opponent-info-container'>",
  "<h1> <%= name %> </h1>",
  "<img src = '<%= img %>'>",
  "<div id = 'stats-div'>",
  "<h3> Forehand:  <%= forehand %> </h3>",
  "<h3> Backhand:  <%= backhand %> </h3>",
  "<h3> Mental Strength: <%= mentalStrength %> </h3>",
  "<h4> Total Rating: <%= rating %> </h3>",
  "</div>",
  "</div>"
].join("");
