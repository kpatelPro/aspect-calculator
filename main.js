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

var aspectAngles = [
[0,0,0],[18,0,0],[22,30,0],
[30,0,0],[36,0,0],[40,0,0],[45,0,0],[51,26,0],
[60,0,0],[72,0,0],[75,0,0],
[90,0,0],[105,0,0],[108,0,0],
[120,0,0],[135,0,0],[144,0,0],[150,0,0],[165,0,0],
[180,0,0],[195,0,0],
[210,0,0],[225,0,0],[225,0,0],
[240,0,0],[252,0,0],[255,0,0],
[270,0,0],[285,0,0],[288,0,0],
[300,0,0],[308,34,0],[315,0,0],[320,0,0],[324,0,0],
[330,0,0],[337,30,0],[342,0,0]
];

var aspectAnglesInSeconds = [];

var kSecondsPerDegree = 60 * 60;
var kSecondsPer360Degrees = 360 * 60 * 60;

var calculateData = {
	auxiliaryBodiesAnglesSeconds : {},
	astralBodiesAnglesSeconds : {},
	aspectAnglesSecondsAdjusted : [],
};

function onReady() {
	zodiacSignsPrecalculate();
  astralBodyPrecalculate();
  positionInputsPopulate();
  
  $("#aspectInputs").show();
  $("#aspectResults").hide();
  
  // button handlers
	$("#random").click(function(){
		positionInputsRandomize();
  });
  $("#calculate").click(function(){
  	calculateWinner();
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
		var tomorrowSeconds = positionToSeconds(value.tomorrow);
		var todaySeconds = positionToSeconds(value.today);
		var speedSeconds = (tomorrowSeconds - todaySeconds);
		value.speed = positionToSeconds(Math.floor(speedSeconds / degreeInSeconds));
	});
}

function positionInputsPopulate() {
  var table = $("#positionInputs");

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
  	var tr = positionInputsCreateRow(value.id, value.name, value.icon);
    table.append(tr);
	});
  astralBodies.forEach(function(value, index, array) {
  	var tr = positionInputsCreateRow(value.id, value.name, value.icon);
    table.append(tr);
	});
}

function positionInputsCreateRow(id, name, icon) {	
	var tr = $("<tr></tr>");
	var tdIcon = $(
		'<td><img id="icon' + id + '" src="' + icon + '"></img></td>'
	);
	var tdName = $("<td>" + name + "</td>");
	var tdDegree = $('<td></td>');
	tdDegree.append(offsetInputCreate('Degrees'+id, 30));
	tdDegree.append(offsetInputCreate('Minutes'+id, 60));
	tdDegree.append(offsetInputCreate('Seconds'+id, 60));
	
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

function positionInputsGet(id) {
		var sign = $('#sign' + id).val();
		var degrees = $('#offsetDegrees' + id).val();
		var minutes = $('#offsetMinutes' + id).val();
		var seconds = $('#offsetSeconds' + id).val();
		var position = [sign, degrees, minutes, seconds];
}

function offsetInputCreate(id, valueRange) {
	var $input = $('<input id="offset' + id + '" type="number" min="0" max="' + (valueRange-1) + '" size="3" maxlength="3" required>');
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

function positionInputsRandomize() {
	auxiliaryBodies.forEach(function(value, index, array) {
		positionInputsRowRandomize(value.id);
	});
	astralBodies.forEach(function(value, index, array) {
		positionInputsRowRandomize(value.id);
	});
}

function positionInputsRowRandomize(id) {
		$('#offsetDegrees' + id).val(randomRangeInt(0,30));
		$('#offsetMinutes' + id).val(randomRangeInt(0,60));
		$('#offsetSeconds' + id).val(randomRangeInt(0,60));
		$('#sign' + id).val(randomFromArray(zodiacKeys));		
 		$('#sign' + id).change();
}

function calculateWinner() {
	// convert aspect angles into seconds
	aspectAnglesInSeconds = [];
	aspectAngles.forEach(function(value, index, array) {
		var angle = value;
		var angleInSeconds = positionToSeconds(angle);
		apectAnglesInSeconds.push(angleInSeconds);
	});

	// recalculate all data	
	calculateData = {};
	// convert auxiliary body positions to seconds
	calculateData.auxiliaryBodiesAnglesSeconds = {};
	auxiliaryBodies.forEach(function(value, index, array) {
			var position = positionInputsGet(value.id);
			calculateData.auxiliaryBodiesAnglesSeconds[value.id] = positionToSeconds(position);
	});
	astralBodies.forEach(function(value, index, array) {
			var position = positionInputsGet(value.id);
			calculateData.astralBodiesAnglesSeconds[value.id] = positionToSeconds(position);
	});
	
	// adjust aspects for cusp5 angle
	var cusp5PositionSeconds = calculateData.auxiliaryBodiesAnglesSeconds["CUSP5"];
	apectAnglesInSeconds.forEach(function(value, index, array) {
		var angleInSeconds = value;
		var adjustedSeconds = positionSecondsWrap(angleInSeconds + cusp5PositionSeconds);
		calculateData.aspectAnglesSecondsAdjusted.push(adjustedSeconds);
	});
}

function positionFromString(input) {
	var position = input.split(':');
	while (position.length < 3) {
		position.unshift(0);
	}
	return position;
}

function positionToSeconds(position) {
	
	// a position must include at least 3 parts
	while (position.length < 3) {
		position.unshift(0);
	}
		
	// get components
	var degree = position[position.length-3];
	// check if position includes zodiac sign
	if (position.length > 3) {
		// if so, add the degree offset for the zodiac sign
		var sign = position[position.length-4];
		if (sign in zodiacSigns) {
			var signAngle = zodiacSigns[sign].angle;
			degree += signAngle;
		}
	}
	var minutes = position[position.length-2];
	var seconds = position[position.length-1];
	
	// calculate totals
	var totalSeconds = 0;
	totalSeconds += degree; 
	totalSeconds *= 60;
	totalSeconds += minutes;
	totalSeconds *= 60;
	totalSeconds += seconds;
	
	// wrap
	totalSeconds = positionSecondsWrap(totalSeconds);
	
	// return
	return totalSeconds;
}
	
function positionSecondsWrap(seconds) {
	
	// make sure it is not negative
	while (seconds < 0) {
		seconds = seconds + kSecondsPer360Degrees;
	}
	// make sure it does not exceed 360'
	while (seconds >= kSecondsPer360Degrees) {
		seconds = seconds - kSecondsPer360Degrees;
	}
	
	// return
	return seconds;
}

function positionFromSeconds(totalSeconds) {
	
	// extract seconds
	var seconds = totalSeconds % 60;
	
	// extract minutes	
	var totalMinutes = (totalSeconds - seconds) / 60;
	var minutes = totalMinutes % 60;
	
	// extract degrees
	var degrees = (totalMinutes - minutes) / 60;
	while (degrees < 0) {
		degrees = degrees + 360;
	}
	while (degrees >= 360) {
		degrees = degrees - 360;
	}
	
	var position = [degrees, minutes, seconds];
	return position;
}

function randomRangeInt(min, max)
{
	return min + Math.floor(Math.random()*(max-min));
}

function randomFromArray(items) {
	return items[Math.floor(Math.random()*items.length)];
}
