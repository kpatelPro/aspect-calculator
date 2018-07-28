var zodiacSignNames = [
  "Aries",
  "Taurus",
  "Gemini",
  "Cancer",
  "Leo",
  "Virgo",
  "Libra",
  "Scorpio",
  "Sagittarius",
  "Capricorn",
  "Aquarius",
  "Pisces"
];

var zodiacSymbols = {
  ARI: "♈",
  TAU: "♉",
  GEM: "♊",
  CAN: "♋",
  LEO: "♌",
  VIR: "♍",
  LIB: "♎",
  SCO: "♏",
  SAG: "♐",
  CAP: "♑",
  AQU: "♒",
  PIS: "♓"
};

var zodiacSigns = {
  Aries: { name: "", symbolCharacter: "♈" },
  Taurus: { name: "", symbolCharacter: "♉" },
  Gemini: { name: "", symbolCharacter: "♊" },
  Cancer: { name: "", symbolCharacter: "♋" },
  Leo: { name: "", symbolCharacter: "♌" },
  Virgo: { name: "", symbolCharacter: "♍" },
  Libra: { name: "", symbolCharacter: "♎" },
  Scorpio: { name: "", symbolCharacter: "♏" },
  Sagittarius: { name: "", symbolCharacter: "♐" },
  Capricorn: { name: "", symbolCharacter: "♑" },
  Aquarius: { name: "", symbolCharacter: "♒" },
  Pisces: { name: "", symbolCharacter: "♓" }
};

var astralBodies = [
  {
    id: "Sun",
    name: "Sun",
    today: "24:23:53",
    tomorrow: "25:21:08",
    icon:
      "http://www.antmandesign.com/portfolio/aspectcalculator/images/glyph-planet-sun.png"
  },
  {
    id: "Moon",
    name: "Moon",
    today: "18:30:44",
    tomorrow: "32:33:44",
    icon:
      "http://www.antmandesign.com/portfolio/aspectcalculator/images/glyph-planet-moon.png"
  },
  {
    id: "Mercury",
    name: "Mercury",
    today: "20:10:13",
    tomorrow: "20:49:07",
    icon:
      "http://www.antmandesign.com/portfolio/aspectcalculator/images/glyph-planet-mercury.png"
  },
  {
    id: "Venus",
    name: "Venus",
    today: "7:39:48",
    tomorrow: "8:45:48",
    icon:
      "http://www.antmandesign.com/portfolio/aspectcalculator/images/glyph-planet-venus.png"
  },
  {
    id: "Mars",
    name: "Mars",
    today: "6:45:59",
    tomorrow: "6:32:03",
    icon:
      "http://www.antmandesign.com/portfolio/aspectcalculator/images/glyph-planet-mars.png"
  },
  {
    id: "Jupiter",
    name: "Jupiter",
    today: "13:24:15",
    tomorrow: "13:25:29",
    icon:
      "http://www.antmandesign.com/portfolio/aspectcalculator/images/glyph-planet-jupiter.png"
  },
  {
    id: "Saturn",
    name: "Saturn",
    today: "4:28:02",
    tomorrow: "4:24:03",
    icon:
      "http://www.antmandesign.com/portfolio/aspectcalculator/images/glyph-planet-saturn.png"
  },
  {
    id: "Uranus",
    name: "Uranus",
    today: "2:22:11",
    tomorrow: "2:23:12",
    icon:
      "http://www.antmandesign.com/portfolio/aspectcalculator/images/glyph-planet-uranus.png"
  },
  {
    id: "Neptune",
    name: "Neptune",
    today: "16:17:15",
    tomorrow: "16:16:23",
    icon:
      "http://www.antmandesign.com/portfolio/aspectcalculator/images/glyph-planet-neptune.png"
  },
  {
    id: "Pluto",
    name: "Pluto",
    today: "19:54:36",
    tomorrow: "19:53:08",
    icon:
      "http://www.antmandesign.com/portfolio/aspectcalculator/images/glyph-planet-pluto.png"
  },
  {
    id: "MeanNode",
    name: "Mean Node",
    today: "",
    tomorrow: "",
    icon:
      "http://www.antmandesign.com/portfolio/aspectcalculator/images/glyph-planet-mean-node.png"
  },
  {
    id: "TrueNode",
    name: "True Node",
    today: "",
    tomorrow: "",
    icon:
      "http://www.antmandesign.com/portfolio/aspectcalculator/images/glyph-planet-true-node.png"
  },
  {
    id: "Chiron",
    name: "Chiron",
    today: "2:21:42",
    tomorrow: "2:21:04",
    icon:
      "http://www.antmandesign.com/portfolio/aspectcalculator/images/glyph-planet-chiron.png"
  }
];

function onReady() {
  astralBodyPrecalculate();
  astralBodyDegreeSignInputsPopulate();
  
  $("#aspectInputs").show();
  $("#aspectResults").hide();
  
  // button handlers
	$("#random").click(function(){
		astralBodyDegreeSignInputsRandomize();
  })
  $("#calculate").click(function(){
    $("#aspectInputs").hide();
    $("#aspectResults").show();
  })
  $("#changeInputs").click(function(){
    $("#aspectInputs").show();
    $("#aspectResults").hide();
  })
  
}

function astralBodyPrecalculate() {
	var degreeInSeconds = 
	astralBodies.forEach(function(value, index, array) {
		var tomorrowSeconds = degreeToSeconds(value.tomorrow);
		var todaySeconds = degreeToSeconds(value.today);
		var speedSeconds = (tomorrowSeconds - todaySeconds)
		value.speed = degreeFromSeconds(degreeToSeconds
	}
}

function astralBodyDegreeSignInputsPopulate() {
  var table = $("#astralBodyDegreeSignInputs");

  //header
  var tr = $("<tr></tr>");
  var thIcon = $("<th></th>");
  var thName = $("<th></th>");
  var thDegree = $("<th>Degree</th>");
  var thSignSymbol = $("<th></th>");
  var thSign = $("<th>Sign</th>");
  tr.append(thIcon, thName, thDegree, thSignSymbol, thSign);
  table.append(tr);

  //rows
  astralBodies.forEach(function(value, index, array) {
    var tr = $("<tr></tr>");
    var tdIcon = $(
      '<td><img id="icon' + value.id + '" src="' + value.icon + '"></img></td>'
    );
    var tdName = $("<td>" + value.name + "</td>");
    var tdDegree = $('<td></td>');
    tdDegree.append(degreeInputCreate('Hours'+value.id));
    tdDegree.append(degreeInputCreate('Minutes'+value.id));
    tdDegree.append(degreeInputCreate('Seconds'+value.id));
    
    var tdSignSymbol = $('<td id="tdSign' + value.id + '"></td>');
    var signSymbol = $('<div id="signSymbol' + value.id + '">' + zodiacSymbols["ARI"] + "</div>");
		tdSignSymbol.append(signSymbol);
    
    var tdSign = $('<td id="tdSign' + value.id + '"></td>');
    //var tdSignInput=$('<input id="sign' + value.id + '" type="text" required>');
    var tdSignInput = signInputCreate(value.id);
    tdSign.append(tdSignInput);

    tr.append(tdIcon, tdName, tdDegree, tdSignSymbol, tdSign);
    table.append(tr);
  });
}

function astralBodyDegreeSignInputsRandomize() {
	astralBodies.forEach(function(value, index, array) {
		$('#degreeHours' + value.id).val(randomRangeInt(0,24));
		$('#degreeMinutes' + value.id).val(randomRangeInt(0,60));
		$('#degreeSeconds' + value.id).val(randomRangeInt(0,60));
		$('#sign' + value.id).val(zodiacSignIdFromName(randomFromArray(zodiacSignNames)));		
 		$('#sign' + value.id).change();
	});
}

function degreeInputCreate(id) {
	var $input = $('<input id="degree' + id + '" type="text" size="3" maxlength="3" required>');
	return $input;
}

function signInputCreate(id) {
  var div = $("<div></div>");

  var selector = $(
    '<select id="sign' + id + '" class="signSelector" required></select>'
  );
  zodiacSignNames.forEach(function(value, index, array) {
    var option = $(
      '<option value="' + zodiacSignIdFromName(value) + '">' + value + "</option>"
    );
    selector.append(option);
  });
  selector.change(function() {
    $("#signSymbol" + id).text(zodiacSymbols[$(this).val()]);
  });

  div.append(selector);
  return div;
}

function zodiacSignIdFromName(name) {
	return name.substr(0,3).toUpperCase();		
}

function degreeFromString(input) {
	var degree = input.split(':');
	while (degree.length < 3) {
		degree.unshift(0);
	}
	return degree;
}

function degreeFromSeconds(degree) {
	while (degree.length < 3) {
		degree.unshift(0);
	}
	int seconds = 0;
	seconds += degree[0];
	seconds *= 60;
	seconds += degree[1];
	seconds *= 60;
	seconds += degree[2];
	return seconds;
}

function degreeToSeconds(seconds) {
	var degree = [];
	var remainder;
	
	remainder = seconds % 60;
	degree.unshift(remainder);
	seconds -= remainder;
	seconds /= 60;
	
	remainder = seconds % 60;
	degree.unshift(remainder);
	seconds -= remainder;
	seconds /= 60;
	
	remainder = seconds;

	while (degree.length < 3) {
		degree.unshift(0);
	}
	return degree;
}

function randomRangeInt(min, max)
{
	return min + Math.floor(Math.random()*(max-min));
}

function randomFromArray(items) {
	return items[Math.floor(Math.random()*items.length)];
}
