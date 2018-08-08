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

var kSecondsPerMinute = 60;
var kSecondsPerDegree = 1 * 60 * 60;
var kSecondsPer180Degrees = 180 * 60 * 60;
var kSecondsPer360Degrees = 360 * 60 * 60;

var calculateData = {
	auxiliaryBodiesAnglesSeconds : {},
	astralBodiesAnglesSeconds : {},
	aspectAnglesSecondsAdjusted : [],
};

// TEST DATA
var testData_0 = {
	CUSP5: 		{ sign: "PIS", position: [28,46,0] },
	Sun: 			{ sign: "CAN", position: [17,36,17] },
	Moon: 		{ sign: "GEM", position: [2,33,22] },
	Mercury: 	{ sign: "LEO", position: [13,53,17] },
	Venus: 		{ sign: "LEO", position: [29,45,13] },
	Mars: 		{ sign: "AQU", position: [8,9,48] },
	Jupiter: 	{ sign: "SCO", position: [13,20,43] },
	Saturn: 	{ sign: "CAP", position: [4,57,31] },
	Uranus: 	{ sign: "TAU", position: [2,13,31] },
	Neptune:	{ sign: "PIS", position: [16,22,38] },
	Pluto: 		{ sign: "CAP", position: [20,5,3] },
	Chiron: 	{ sign: "ARI", position: [2,25,17] },
	Asteroid2:{ sign: "PIS", position: [0,0,0] },
}

function onReady() {
	zodiacSignsPrecalculate();
  //astralBodyPrecalculate();
  positionInputsPopulate();
  
  $("#aspectInputs").show();
  $("#aspectResults").hide();
  
  // button handlers
	$("#random").click(function(){
		onClickRandom();
  });
  $("#calculate").click(function(){
  	onClickCalculate();
  });
  $("#changeInputs").click(function(){
  	onClickChangeInputs();
  });
}

function onClickRandom() {
	positionInputsToTest(testData_0);
	//positionInputsRandomize();
}

function onClickCalculate() {
	//calculateUnitTest(); return;
  	
	calculateWinner();
	debugInfoAstralBodyPopulate();
  winnersPopulate();
  
  //$("#aspectInputs").hide();
  $("#aspectResults").show();
}

function onClickChangeInputs() {
  $("#aspectInputs").show();
  $("#aspectResults").hide();
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
	var tr = $('<tr id="row' + id + '">' + name + '</tr>');
	var tdIcon = $(
		'<td><img id="icon' + id + '" src="' + icon + '"></img></td>'
	);
	var tdName = $('<td id="name' + id + '">' + name + '</td>');
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
		var degrees = +$('#offsetDegrees' + id).val();
		var minutes = +$('#offsetMinutes' + id).val();
		var seconds = +$('#offsetSeconds' + id).val();
		var position = [sign, degrees, minutes, seconds];
		//console.log(id + '- ' + sign + ' ' + degrees + ':' + minutes + ':' + seconds);
    return position;
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

function positionInputsToTest(testData) {
	auxiliaryBodies.forEach(function(value, index, array) {
		positionInputsToTestRow(value.id, testData);
	});
	astralBodies.forEach(function(value, index, array) {
		positionInputsToTestRow(value.id, testData);
	});
}

function positionInputsToTestRow(id, testData) {
		$('#offsetDegrees' + id).val(testData[id].position[0]);
		$('#offsetMinutes' + id).val(testData[id].position[1]);
		$('#offsetSeconds' + id).val(testData[id].position[2]);
		$('#sign' + id).val(testData[id].sign);	
 		$('#sign' + id).change();
}

function positionInputsRandomize() {
	auxiliaryBodies.forEach(function(value, index, array) {
		positionInputsRandomizeRow(value.id);
	});
	astralBodies.forEach(function(value, index, array) {
		positionInputsRandomizeRow(value.id);
	});
}

function positionInputsRandomizeRow(id) {
		$('#offsetDegrees' + id).val(randomRangeInt(0,30));
		$('#offsetMinutes' + id).val(randomRangeInt(0,60));
		$('#offsetSeconds' + id).val(randomRangeInt(0,60));
		$('#sign' + id).val(randomFromArray(zodiacKeys));		
 		$('#sign' + id).change();
}

function calculateUnitTest() {
  var a;
  for (a=0; a<aspectAngles.length; ++a) {
    console.log(aspectAngles[a] + ':' + positionToString(aspectAngles[a]));
  }
return;
  var i;
  for (i=0; i<32; ++i) {
    var seconds0 = randomRangeInt(0, kSecondsPer360Degrees-1);
  	console.log(i+':'+seconds0);
    var position0 = positionFromSeconds(seconds0);
    var seconds1 = positionToSeconds(position0);
    var position1 = positionFromSeconds(seconds1);
    var string0 = positionToString(position1);
    var position2 = positionFromString(string0);
    var seconds2 = positionToSeconds(position2);
    if (seconds0 != seconds2) {
    	console.log([seconds0, position0, seconds1, position1, string0, position2, seconds2].join('\n'));
    }
  }
  
return;
	astralBodies.forEach(function(value, index, array) {
    //console.log('astralBodies['+index+']');
			// convert body positions to seconds
			var bodyPosition = positionInputsGet(value.id);
			var bodyPositionSeconds = positionToSeconds(bodyPosition);
			bodyPosition = positionFromSeconds(bodyPositionSeconds);
			var bodyPositionPretty = positionToString(bodyPosition);
			$('#name' + value.id).text(bodyPositionPretty);	
	});
}

function calculateWinner() {
	var a;
  
  // convert aspect angles into seconds
	aspectAnglesInSeconds = [];
	for (a=0; a<aspectAngles.length; a++) {
		//console.log('aspectAngles['+index+']');
    var aspectPosition = aspectAngles[a];
		var aspectPositionSeconds = positionToSeconds(aspectPosition);
		aspectAnglesInSeconds.push(aspectPositionSeconds);
	}
	//console.log('/aspectAngles');
  
	// recalculate all data	
	calculateData = {};
	
	// convert auxiliary body positions to seconds
	calculateData.auxiliaryBodiesAnglesSeconds = {};
	auxiliaryBodies.forEach(function(value, index, array) {
  		//console.log('auxiliaryBodies['+index+']');
			var position = positionInputsGet(value.id);
      var positionSeconds = positionToSeconds(position);
			calculateData.auxiliaryBodiesAnglesSeconds[value.id] = positionSeconds;
	});
	//console.log('/auxiliaryBodies');
	
	// adjust aspects for cusp5 angle
	var cusp5PositionSeconds = calculateData.auxiliaryBodiesAnglesSeconds["CUSP5"];
  console.log('CUSP5 position: ('+cusp5PositionSeconds+') ' + stringFromSeconds(cusp5PositionSeconds));
  calculateData.aspectAnglesSecondsAdjusted = [];
	for (a=0; a<aspectAnglesInSeconds.length; a++) {
    //console.log('aspectAnglesInSeconds['+a+']');
		var aspectSeconds = aspectAnglesInSeconds[a];
		var aspectSecondsAdjusted = aspectSeconds + cusp5PositionSeconds;
    aspectSecondsAdjusted = positionSecondsWrap(aspectSecondsAdjusted);
  	calculateData.aspectAnglesSecondsAdjusted.push(aspectSecondsAdjusted);
	}
	//console.log('/aspectAnglesInSeconds');

	// process astral bodies
  //console.log('astralBodies');
	calculateData.astralBodies = [];
	astralBodies.forEach(function(value, index, array) {
      //console.log('astralBodies['+index+']');
			// convert body positions to seconds
			var bodyPosition = positionInputsGet(value.id);
			var bodyPositionSeconds = positionToSeconds(bodyPosition);
     	// search for closest aspect (adjusted)
			var a;
			var closestPosition = 0;
			var closestPositionDifference = kSecondsPer360Degrees;
			for (a=0; a < calculateData.aspectAnglesSecondsAdjusted.length; a++) {
				var aspectPositionSeconds = calculateData.aspectAnglesSecondsAdjusted[a];
				var aspectDifference = positionSecondsDifference(bodyPositionSeconds, aspectPositionSeconds);
				if (aspectDifference < closestPositionDifference) {
					closestPosition = aspectPositionSeconds;
					closestPositionDifference = aspectDifference;
				}
			}
     	
			var bodyData = {};
			bodyData.id = value.id;
			bodyData.name = value.name;
			bodyData.positionSeconds = bodyPositionSeconds;
			bodyData.aspectSecondsDifference = closestPositionDifference;
			bodyData.aspectSecondsAdjusted = closestPosition;
			bodyData.aspectSeconds = closestPosition - cusp5PositionSeconds;
			bodyData.aspectSeconds = positionSecondsWrap(bodyData.aspectSeconds);
			bodyData.aspectSecondsMinor = bodyData.aspectSeconds;
			bodyData.aspectSecondsMinor = positionSecondsMinor(bodyData.aspectSecondsMinor);
			calculateData.astralBodies.push(bodyData);
	});

	calculateData.astralBodies.sort(function(a,b) {
		return a.aspectSecondsDifference - b.aspectSecondsDifference;
	});
  
  //console.log('/calculateWinner');  
}

function debugInfoAstralBodyPopulate() {
  var table = $("#positionInputs");
	var header = table.find("th").first().parent();
	if (header !== undefined) {
		var $th = $('<th>bodyPos</th>');
		header.append($th);
		header.append('<th>aspectDifference</th>');
		header.append('<th>aspectAdjusted</th>');
		header.append('<th>aspect</th>');
		header.append('<th>aspectMinor</th>');
	}
	
	var a;
	for (a=0; a < calculateData.astralBodies.length; ++a) {
		var bodyData = calculateData.astralBodies[a];
		var bodyRow = $('#row' + bodyData.id);
		bodyRow.append($('<td>' + stringFromSeconds(bodyData.positionSeconds) + '</td>'));
		bodyRow.append($('<td>' + stringFromSeconds(bodyData.aspectSecondsDifference) + '</td>'));
		bodyRow.append($('<td>' + stringFromSeconds(bodyData.aspectSecondsAdjusted) + '</td>'));
		bodyRow.append($('<td>' + stringFromSeconds(bodyData.aspectSeconds) + '</td>'));
		bodyRow.append($('<td>' + stringFromSeconds(bodyData.aspectSecondsMinor) + '</td>'));
	}
}

function winnersPopulate() {
  //console.log('winnersPopulate');  
  var table = $("#winnersTable");

  //header
  var tr = $("<tr></tr>");
  //var thIcon = $("<th></th>");
  //var thName = $("<th></th>");
  var thBody = $("<th>Body</th>");
  var thDifference = $("<th>Diff</th>");
  var thAspectMinor = $("<th>Aspect (minor)</th>");
  tr.append(thBody, thDifference, thAspectMinor);
  table.append(tr);
  //console.log('winnersPopulate:/header');  

  //rows
  //console.log('winnersPopulate:astralBodies');  
  calculateData.astralBodies.forEach(function(value, index, array) {
  //console.log('winnersPopulate:astralBodies['+index+']');  
  	var tr = winnersCreateRow(value.id, value.name, value.aspectSecondsDifference, value.aspectSecondsMinor);
    //var tr = winnersCreateRow(value.id, value.name, value.positionSeconds, value.aspectSecondsMinor);
    table.append(tr);
	});

  //console.log('/winnersPopulate');
}

function winnersCreateRow(id, name, aspectSecondsDifference, aspectSecondsMinor) {	
  //console.log('winnersPopulate:winnersCreateRow['+name+']');  
	var tr = $("<tr></tr>");
	var thBody = $("<td>" + name + "</td>");
	var thDifference = $("<td>" + positionToString(positionFromSeconds(aspectSecondsDifference)) + "</td>");
	var thAspectMinor = $("<td>" + positionToString(positionFromSeconds(aspectSecondsMinor)) + "</td>");
	tr.append(thBody, thDifference, thAspectMinor);
  //console.log('winnersPopulate:/winnersCreateRow['+name+']');  
 	return tr;
}

function stringFromSeconds(seconds) {
	var position = positionFromSeconds(seconds);
	var pretty = positionToString(position);
	return pretty;
}

function positionFromString(pretty) {
	var position = pretty.split(':');
	while (position.length < 3) {
		position.unshift(0);
	}
	// convert to numbers
	var p;
	for (p=position.length-1; p>=position.length-3; --p) {
		position[p] = +(position[p]);
	}
	return position;
}

function positionToString(position) {
	while (position.length < 3) {
		position.unshift(0);
	}
	// convert to string
	var pretty = position[0];
	var p;
	for (p=1; p<position.length; ++p) {
		pretty += ':';
		if (position[p] < 10) {
			pretty += '0';
		}
		pretty += position[p];
	}
	return pretty;
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
			//console.log('degree: '+degree+' + ' + signAngle+' ('+sign+')');
			degree += signAngle;
		}
	}
	var minutes = position[position.length-2];
	var seconds = position[position.length-1];
  
	// calculate totals
	var totalSeconds = degree * kSecondsPerDegree + minutes * kSecondsPerMinute + seconds;
	// wrap
	totalSeconds = positionSecondsWrap(totalSeconds);
	//console.log('['+degree+','+minutes+','+seconds+'] -> ' + totalSeconds)	
	
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

function positionSecondsDifference(seconds0, seconds1) {
	var lowSeconds;
	var highSeconds;
	if (seconds0 < seconds1) {
		lowSeconds = seconds0;
		highSeconds = seconds1;
	} else {
		lowSeconds = seconds1;
		highSeconds = seconds0;
	}	
	var secondsDifference = highSeconds - lowSeconds;

	// make sure we take the shorter of the two angles
	secondsDifference = positionSecondsMinor(secondsDifference);
	
	return secondsDifference;
}

function positionSecondsMinor(seconds) {
	if (seconds > kSecondsPer180Degrees) {
		seconds = kSecondsPer360Degrees - seconds;
	}	
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

function randomRangeInt(min, max) {
	return min + Math.floor(Math.random()*(max-min));
}

function randomFromArray(items) {
	return items[Math.floor(Math.random()*items.length)];
}
