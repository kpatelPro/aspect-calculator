var zodiacKeys = [
  "ARI",
  "TAU",
  "GEM",
  "CAN",
  "LEO",
  "VIR",
  "LIB",
  "SCO",
  "SAG",
  "CAP",
  "AQU",
  "PIS"
];

var zodiacSigns = {
  ARI: { name: "Aries", symbolCharacter: "♈", angle: 0 },
  TAU: { name: "Taurus", symbolCharacter: "♉", angle: 30 },
  GEM: { name: "Gemini", symbolCharacter: "♊", angle: 60 },
  CAN: { name: "Cancer", symbolCharacter: "♋", angle: 90 },
  LEO: { name: "Leo", symbolCharacter: "♌", angle: 120 },
  VIR: { name: "Virgo", symbolCharacter: "♍", angle: 150 },
  LIB: { name: "Libra", symbolCharacter: "♎", angle: 180 },
  SCO: { name: "Scorpio", symbolCharacter: "♏", angle: 210 },
  SAG: { name: "Sagittarius", symbolCharacter: "♐", angle: 240 },
  CAP: { name: "Capricorn", symbolCharacter: "♑", angle: 270 },
  AQU: { name: "Aquarius", symbolCharacter: "♒", angle: 300 },
  PIS: { name: "Pisces", symbolCharacter: "♓", angle: 330 }
};

var auxiliaryBodies = [
  {
    id: "CUSP5",
    name: "CUSP 5",
    icon: ""
  },
];

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
/*
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
*/
];

function onReady() {
	zodiacSignsPrecalculate();
  astralBodyPrecalculate();
  degreeSignInputsPopulate();
  
  $("#aspectInputs").show();
  $("#aspectResults").hide();
  
  // button handlers
	$("#random").click(function(){
		degreeSignInputsRandomize();
  });
  $("#calculate").click(function(){
    $("#aspectInputs").hide();
    $("#aspectResults").show();
  });
  $("#changeInputs").click(function(){
    $("#aspectInputs").show();
    $("#aspectResults").hide();
  });
}

function zodiacSignsPrecalculate() {
	for (var key in zodiacSigns) {
    var value = zodiacSigns[key];
		var degree = [value.angle, 0, 0];
		value.degree = degree;
	}
}

function astralBodyPrecalculate() {
	var degreeInSeconds = 60 * 60;
	astralBodies.forEach(function(value, index, array) {
		var tomorrowSeconds = degreeToSeconds(value.tomorrow);
		var todaySeconds = degreeToSeconds(value.today);
		var speedSeconds = (tomorrowSeconds - todaySeconds);
		value.speed = degreeFromSeconds(Math.floor(speedSeconds / degreeInSeconds));
	});
}

function degreeSignInputsPopulate() {
  var table = $("#degreeSignInputs");

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
  auxiliaryBodies.forEach(function(value, index, array) {
  	var tr = degreeSignInputsCreateRow(value.id, value.name, value.icon);
    table.append(tr);
	});
  astralBodies.forEach(function(value, index, array) {
  	var tr = degreeSignInputsCreateRow(value.id, value.name, value.icon);
    table.append(tr);
	});
}

function degreeSignInputsCreateRow(id, name, icon) {	
	var tr = $("<tr></tr>");
	var tdIcon = $(
		'<td><img id="icon' + id + '" src="' + icon + '"></img></td>'
	);
	var tdName = $("<td>" + name + "</td>");
	var tdDegree = $('<td></td>');
	tdDegree.append(degreeInputCreate('Degrees'+id));
	tdDegree.append(degreeInputCreate('Minutes'+id));
	tdDegree.append(degreeInputCreate('Seconds'+id));
	
	var tdSignSymbol = $('<td id="tdSign' + id + '"></td>');
	var signSymbol = $('<div id="signSymbol' + id + '">' + zodiacSigns["ARI"].symbolCharacter + "</div>");
	tdSignSymbol.append(signSymbol);
	
	var tdSign = $('<td id="tdSign' + id + '"></td>');
	//var tdSignInput=$('<input id="sign' + id + '" type="text" required>');
	var tdSignInput = signInputCreate(id);
	tdSign.append(tdSignInput);

	tr.append(tdIcon, tdName, tdDegree, tdSignSymbol, tdSign);
 	return tr;
}

function degreeSignInputsRandomize() {
	auxiliaryBodies.forEach(function(value, index, array) {
		degreeSignInputsRowRandomize(value.id);
	});
	astralBodies.forEach(function(value, index, array) {
		degreeSignInputsRowRandomize(value.id);
	});
}

function degreeSignInputsRowRandomize(id) {
		$('#degreeDegrees' + id).val(randomRangeInt(0,30));
		$('#degreeMinutes' + id).val(randomRangeInt(0,60));
		$('#degreeSeconds' + id).val(randomRangeInt(0,60));
		$('#sign' + id).val(randomFromArray(zodiacKeys));		
 		$('#sign' + id).change();
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
  zodiacKeys.forEach(function(value, index, array) {
    var option = $(
      '<option value="' + value + '">' + zodiacSigns[value].name + "</option>"
    );
    selector.append(option);
  });
  selector.change(function() {
    $("#signSymbol" + id).text(zodiacSigns[$(this).val()].symbolCharacter);
  });

  div.append(selector);
  return div;
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
	var seconds = 0;
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
