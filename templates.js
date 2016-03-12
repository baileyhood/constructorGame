var templates = {};
templates.charDisplayTemplate = [
  "<div id= '<%= id%>' rel = '<%= name %>' class='info-container'>",
  "<h1> <%= name %> </h1>",
  "<img src = '<%= img %>'>",
  "</div>"
].join("");

templates.paddleDisplayTemplate = [
  "<div id= '<%= id %>' rel = '<%= name %>' class='paddle-info-container'>",
  "<h1> <%= name %> </h1>",
  "<img src = '<%= img %>'>",
  "</div>"
].join("");

templates.locationDisplayTemplate = [
  "<div id= '<%= id %>' rel = '<%= name %>' class='location-info-container'>",
  "<h1> <%= name %> </h1>",
  "<img src = '<%= img %>'>",
  "</div>"
].join("");

templates.opponentDisplayTemplate = [
  "<div id= '<%= id %>' rel = '<%= name %>' class='opponent-info-container'>",
  "<h1> <%= name %> </h1>",
  "<img src = '<%= img %>'>",
  "</div>"
].join("");
