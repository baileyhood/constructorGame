var templates = {};
templates.charDisplayTemplate = [
  "<div id= '<%= id %>' class='info-container'>",
  "<h1> <%= name %> </h1>",
  "<img src = '<%= img %>'>",
  "</div>"
].join("");

templates.paddleDisplayTemplate = [
  "<div id= '<%= id %>' class='paddle-info-container'>",
  "<h1> <%= name %> </h1>",
  "<img src = '<%= img %>'>",
  "</div>"
].join("");
