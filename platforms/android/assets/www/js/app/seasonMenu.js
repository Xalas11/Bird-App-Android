/**
 * @author Robert
 */
var abra2 = "file:///data/data/de.birds.XuanThuy/files/";
var sPmenuToggle = 0;
// spring == 1, summer == 2 .....
function springMenu() {
	if (sPmenuToggle != 1) {
		$('#sPSpring').addClass("sPImg-change");
		$('.sPSelect').addClass("sPSelect-change");
		$('#sPSummer').hide();
		$('#sPAutumn').hide();
		$('#sPWinter').hide();
		setTimeout(sPtransition, 1);
		sPmenuToggle = 1;
	} else if (sPmenuToggle == 1) {
		$('#sPSpring').removeClass("sPImg-change");
		$('.sPSelect').removeClass("sPSelect-change");
		$('#sPSummer').show();
		$('#sPAutumn').show();
		$('#sPWinter').show();
		setTimeout(sPtransition, 1);
		sPmenuToggle = 0;
	}
}

function summerMenu() {
	if (sPmenuToggle != 2) {
		$('#sPSummer').addClass("sPImg-change");
		$('.sPSelect').addClass("sPSelect-change");
		$('#sPSummer').removeClass("sPmargin");
		$('#sPSpring').hide();
		$('#sPAutumn').hide();
		$('#sPWinter').hide();
		setTimeout(sPtransition, 1);
		sPmenuToggle = 2;
	} else if (sPmenuToggle == 2) {
		$('#sPSummer').removeClass("sPImg-change");
		$('.sPSelect').removeClass("sPSelect-change");
		$('#sPSummer').addClass("sPmargin");
		$('#sPSpring').show();
		$('#sPAutumn').show();
		$('#sPWinter').show();
		setTimeout(sPtransition, 1);
		sPmenuToggle = 0;
	}
}

function autumnMenu() {
	if (sPmenuToggle != 3) {

		$('#sPAutumn').addClass("sPImg-change");
		$('.sPSelect').addClass("sPSelect-change");
		$('#sPSpring').hide();
		$('#sPSummer').hide();
		$('#sPWinter').hide();
		setTimeout(sPtransition, 1);
		sPmenuToggle = 3;
	} else if (sPmenuToggle == 3) {
		$('#sPAutumn').removeClass("sPImg-change");
		$('.sPSelect').removeClass("sPSelect-change");
		$('#sPSpring').show();
		$('#sPSummer').show();
		$('#sPWinter').show();
		setTimeout(sPtransition, 1);
		sPmenuToggle = 0;
	}
}

function winterMenu() {
	if (sPmenuToggle != 4) {
		$('#sPWinter').addClass("sPImg-change");
		$('.sPSelect').addClass("sPSelect-change");
		$('#sPWinter').removeClass("sPmargin");
		$('#sPSpring').hide();
		$('#sPSummer').hide();
		$('#sPAutumn').hide();
		setTimeout(sPtransition, 1);
		sPmenuToggle = 4;
	} else if (sPmenuToggle == 4) {
		$('#sPWinter').removeClass("sPImg-change");
		$('.sPSelect').removeClass("sPSelect-change");
		$('#sPWinter').addClass("sPmargin");
		$('#sPSpring').show();
		$('#sPSummer').show();
		$('#sPAutumn').show();
		setTimeout(sPtransition, 1);
		sPmenuToggle = 0;
	}
}

function sPtransition() {
	if (sPmenuToggle != 0) {
		$("#backButtonHref").attr("href", "#seasonMenu");
		document.getElementById("backButtonHref").addEventListener("click", historyChange);
		$('.sPSelect').addClass("sPSelect-change-transit");
		if (lang == false) {
			if (sPmenuToggle == 1) {
				document.getElementById("sPmonth1").innerHTML = "TẤT CẢ";
				document.getElementById("sPmonth2").innerHTML = "THÁNG 3";
				document.getElementById("sPmonth3").innerHTML = "THÁNG 4";
				document.getElementById("sPmonth4").innerHTML = "THÁNG 5";
			} else if (sPmenuToggle == 2) {
				document.getElementById("sPmonth1").innerHTML = "TẤT CẢ";
				document.getElementById("sPmonth2").innerHTML = "THÁNG 6";
				document.getElementById("sPmonth3").innerHTML = "THÁNG 7";
				document.getElementById("sPmonth4").innerHTML = "THÁNG 8";
			} else if (sPmenuToggle == 3) {
				document.getElementById("sPmonth1").innerHTML = "TẤT CẢ";
				document.getElementById("sPmonth2").innerHTML = "THÁNG 9";
				document.getElementById("sPmonth3").innerHTML = "THÁNG 10";
				document.getElementById("sPmonth4").innerHTML = "THÁNG 11";
			} else if (sPmenuToggle == 4) {
				document.getElementById("sPmonth1").innerHTML = "TẤT CẢ";
				document.getElementById("sPmonth2").innerHTML = "THÁNG 12";
				document.getElementById("sPmonth3").innerHTML = "THÁNG 1";
				document.getElementById("sPmonth4").innerHTML = "THÁNG 2";
			}
		} else if (lang == true) {
			if (sPmenuToggle == 1) {
				document.getElementById("sPmonth1").innerHTML = "ALL";
				document.getElementById("sPmonth2").innerHTML = "MARCH";
				document.getElementById("sPmonth3").innerHTML = "APRIL";
				document.getElementById("sPmonth4").innerHTML = "MAY";
			} else if (sPmenuToggle == 2) {
				document.getElementById("sPmonth1").innerHTML = "ALL";
				document.getElementById("sPmonth2").innerHTML = "JUNE";
				document.getElementById("sPmonth3").innerHTML = "JULY";
				document.getElementById("sPmonth4").innerHTML = "AUGUST";
			} else if (sPmenuToggle == 3) {
				document.getElementById("sPmonth1").innerHTML = "ALL";
				document.getElementById("sPmonth2").innerHTML = "SEPTEMBER";
				document.getElementById("sPmonth3").innerHTML = "OCTOBER";
				document.getElementById("sPmonth4").innerHTML = "NOVEMBER";
			} else if (sPmenuToggle == 4) {
				document.getElementById("sPmonth1").innerHTML = "ALL";
				document.getElementById("sPmonth2").innerHTML = "DECEMBER";
				document.getElementById("sPmonth3").innerHTML = "JANUARY";
				document.getElementById("sPmonth4").innerHTML = "FEBRUARY";
			}
		}
	} else {
		$('.sPSelect').removeClass("sPSelect-change-transit");
		document.getElementById("backButtonHref").removeEventListener("click", historyChange);
		$("#backButtonHref").attr("href", "#");
	}
}

function historyChange() {
	$('#sPSpring').removeClass("sPImg-change");
	$('#sPSummer').removeClass("sPImg-change");
	$('#sPAutumn').removeClass("sPImg-change");
	$('#sPWinter').removeClass("sPImg-change");
	$('.sPSelect').removeClass("sPSelect-change");
	$('#sPWinter').addClass("sPmargin");
	$('#sPSpring').show();
	$('#sPSummer').show();
	$('#sPAutumn').show();
	$('#sPWinter').show();
	setTimeout(sPtransition, 1);
	sPmenuToggle = 0;
}

var month = 1;

function monthALL() {
	if (sPmenuToggle == 1) {
		month = 1;
	} else if (sPmenuToggle == 2) {
		month = 5;
	} else if (sPmenuToggle == 3) {
		month = 9;
	} else if (sPmenuToggle == 4) {
		month = 13;
	}
}

function month1() {
	if (sPmenuToggle == 1) {
		month = 2;
	} else if (sPmenuToggle == 2) {
		month = 6;
	} else if (sPmenuToggle == 3) {
		month = 10;
	} else if (sPmenuToggle == 4) {
		month = 14;
	}
}

function month2() {
	if (sPmenuToggle == 1) {
		month = 3;
	} else if (sPmenuToggle == 2) {
		month = 7;
	} else if (sPmenuToggle == 3) {
		month = 11;
	} else if (sPmenuToggle == 4) {
		month = 15;
	}
}

function month3() {
	if (sPmenuToggle == 1) {
		month = 4;
	} else if (sPmenuToggle == 2) {
		month = 8;
	} else if (sPmenuToggle == 3) {
		month = 12;
	} else if (sPmenuToggle == 4) {
		month = 16;
	}
}


$("#fixedShow").on("click", "#navBarArrowBack", function() {
	if (month != 1) {
		month--;
		seasonBirdLoad();
	} else {
		month = 16;
		seasonBirdLoad();
	}

});
$("#fixedShow").on("click", "#navBarArrowNext", function() {
	if (month != 16) {
		month++;
		seasonBirdLoad();
	} else {
		month = 1;
		seasonBirdLoad();
	}

});
function seasonBirdLoad() {
	var a = "images/birds/";
	if (lang == false) {
		var out = '<div class="marginTop"></div>';
		if (month == 1) {
			document.getElementById("navBarMonthText").innerHTML = "MÙA XUÂN";
			$.each(birdInformation, function(key, val) {
				if ((val.may == 1) || (val.april == 1) || (val.march == 1)) {
					out += '<li>';
					out += '<a href="#detailedPage">';
					out += '<div class="birdBox" data-id="' + val.birdSerialnumber + '"  onclick="grabID(this)">';
					out += '<img class="birdImg" src="' +abra2+ val.birdImgPath +  '"/>';
					out += '<div class="birdTitel"><p id="' + val.birdSerialnumber + '">' + val.birdTitelViet + '</p></div>';
					out += '</div>';
					out += '</a>';
					out += '</li>';
				}
			});
		} else if (month == 2) {
			document.getElementById("navBarMonthText").innerHTML = "THÁNG 3";
			$.each(birdInformation, function(key, val) {
				if (val.march == 1) {
					out += '<li>';
					out += '<a href="#detailedPage">';
					out += '<div class="birdBox" data-id="' + val.birdSerialnumber + '"  onclick="grabID(this)">';
					out += '<img class="birdImg" src="' +abra2+ val.birdImgPath +  '"/>';
					out += '<div class="birdTitel"><p id="' + val.birdSerialnumber + '">' + val.birdTitelViet + '</p></div>';
					out += '</div>';
					out += '</a>';
					out += '</li>';
				}
			});
		} else if (month == 3) {
			document.getElementById("navBarMonthText").innerHTML = "THÁNG 4";
			$.each(birdInformation, function(key, val) {
				if (val.april == 1) {
					out += '<li>';
					out += '<a href="#detailedPage">';
					out += '<div class="birdBox" data-id="' + val.birdSerialnumber + '"  onclick="grabID(this)">';
					out += '<img class="birdImg" src="' +abra2+ val.birdImgPath +  '"/>';
					out += '<div class="birdTitel"><p id="' + val.birdSerialnumber + '">' + val.birdTitelViet + '</p></div>';
					out += '</div>';
					out += '</a>';
					out += '</li>';
				}
			});
		} else if (month == 4) {
			document.getElementById("navBarMonthText").innerHTML = "THÁNG 5";
			$.each(birdInformation, function(key, val) {
				if (val.may == 1) {
					out += '<li>';
					out += '<a href="#detailedPage">';
					out += '<div class="birdBox" data-id="' + val.birdSerialnumber + '"  onclick="grabID(this)">';
					out += '<img class="birdImg" src="' +abra2+ val.birdImgPath +  '"/>';
					out += '<div class="birdTitel"><p id="' + val.birdSerialnumber + '">' + val.birdTitelViet + '</p></div>';
					out += '</div>';
					out += '</a>';
					out += '</li>';
				}
			});
		} else if (month == 5) {
			document.getElementById("navBarMonthText").innerHTML = "MÙA HÈ";
			$.each(birdInformation, function(key, val) {
				if ((val.august == 1) || (val.july == 1) || (val.june == 1)) {
					out += '<li>';
					out += '<a href="#detailedPage">';
					out += '<div class="birdBox" data-id="' + val.birdSerialnumber + '"  onclick="grabID(this)">';
					out += '<img class="birdImg" src="' +abra2+ val.birdImgPath +  '"/>';
					out += '<div class="birdTitel"><p id="' + val.birdSerialnumber + '">' + val.birdTitelViet + '</p></div>';
					out += '</div>';
					out += '</a>';
					out += '</li>';
				}
			});
		} else if (month == 6) {
			document.getElementById("navBarMonthText").innerHTML = "THÁNG 6";
			$.each(birdInformation, function(key, val) {
				if (val.june == 1) {
					out += '<li>';
					out += '<a href="#detailedPage">';
					out += '<div class="birdBox" data-id="' + val.birdSerialnumber + '"  onclick="grabID(this)">';
					out += '<img class="birdImg" src="' +abra2+ val.birdImgPath +  '"/>';
					out += '<div class="birdTitel"><p id="' + val.birdSerialnumber + '">' + val.birdTitelViet + '</p></div>';
					out += '</div>';
					out += '</a>';
					out += '</li>';
				}
			});
		} else if (month == 7) {
			document.getElementById("navBarMonthText").innerHTML = "THÁNG 7";
			$.each(birdInformation, function(key, val) {
				if (val.july == 1) {
					out += '<li>';
					out += '<a href="#detailedPage">';
					out += '<div class="birdBox" data-id="' + val.birdSerialnumber + '"  onclick="grabID(this)">';
					out += '<img class="birdImg" src="' +abra2+ val.birdImgPath +  '"/>';
					out += '<div class="birdTitel"><p id="' + val.birdSerialnumber + '">' + val.birdTitelViet + '</p></div>';
					out += '</div>';
					out += '</a>';
					out += '</li>';
				}
			});
		} else if (month == 8) {
			document.getElementById("navBarMonthText").innerHTML = "THÁNG 8";
			$.each(birdInformation, function(key, val) {
				if (val.august == 1) {
					out += '<li>';
					out += '<a href="#detailedPage">';
					out += '<div class="birdBox" data-id="' + val.birdSerialnumber + '"  onclick="grabID(this)">';
					out += '<img class="birdImg" src="' +abra2+ val.birdImgPath +  '"/>';
					out += '<div class="birdTitel"><p id="' + val.birdSerialnumber + '">' + val.birdTitelViet + '</p></div>';
					out += '</div>';
					out += '</a>';
					out += '</li>';
				}
			});
		} else if (month == 9) {
			document.getElementById("navBarMonthText").innerHTML = "MÙA THU";
			$.each(birdInformation, function(key, val) {
				if ((val.november == 1) || (val.october == 1) || (val.september == 1)) {
					out += '<li>';
					out += '<a href="#detailedPage">';
					out += '<div class="birdBox" data-id="' + val.birdSerialnumber + '"  onclick="grabID(this)">';
					out += '<img class="birdImg" src="' +abra2+ val.birdImgPath +  '"/>';
					out += '<div class="birdTitel"><p id="' + val.birdSerialnumber + '">' + val.birdTitelViet + '</p></div>';
					out += '</div>';
					out += '</a>';
					out += '</li>';
				}
			});
		} else if (month == 10) {
			document.getElementById("navBarMonthText").innerHTML = "THÁNG 9";
			$.each(birdInformation, function(key, val) {
				if (val.september == 1) {
					out += '<li>';
					out += '<a href="#detailedPage">';
					out += '<div class="birdBox" data-id="' + val.birdSerialnumber + '"  onclick="grabID(this)">';
					out += '<img class="birdImg" src="' +abra2+ val.birdImgPath +  '"/>';
					out += '<div class="birdTitel"><p id="' + val.birdSerialnumber + '">' + val.birdTitelViet + '</p></div>';
					out += '</div>';
					out += '</a>';
					out += '</li>';
				}
			});
		} else if (month == 11) {
			document.getElementById("navBarMonthText").innerHTML = "THÁNG 10";
			$.each(birdInformation, function(key, val) {
				if (val.october == 1) {
					out += '<li>';
					out += '<a href="#detailedPage">';
					out += '<div class="birdBox" data-id="' + val.birdSerialnumber + '"  onclick="grabID(this)">';
					out += '<img class="birdImg" src="' +abra2+ val.birdImgPath +  '"/>';
					out += '<div class="birdTitel"><p id="' + val.birdSerialnumber + '">' + val.birdTitelViet + '</p></div>';
					out += '</div>';
					out += '</a>';
					out += '</li>';
				}
			});
		} else if (month == 12) {
			document.getElementById("navBarMonthText").innerHTML = "THÁNG 11";
			$.each(birdInformation, function(key, val) {
				if (val.november == 1) {
					out += '<li>';
					out += '<a href="#detailedPage">';
					out += '<div class="birdBox" data-id="' + val.birdSerialnumber + '"  onclick="grabID(this)">';
					out += '<img class="birdImg" src="' +abra2+ val.birdImgPath +  '"/>';
					out += '<div class="birdTitel"><p id="' + val.birdSerialnumber + '">' + val.birdTitelViet + '</p></div>';
					out += '</div>';
					out += '</a>';
					out += '</li>';
				}
			});
		} else if (month == 13) {
			document.getElementById("navBarMonthText").innerHTML = "MÙA ÐÔNG";
			$.each(birdInformation, function(key, val) {
				if ((val.december == 1) || (val.january == 1) || (val.febuary == 1)) {
					out += '<li>';
					out += '<a href="#detailedPage">';
					out += '<div class="birdBox" data-id="' + val.birdSerialnumber + '"  onclick="grabID(this)">';
					out += '<img class="birdImg" src="' +abra2+ val.birdImgPath +  '"/>';
					out += '<div class="birdTitel"><p id="' + val.birdSerialnumber + '">' + val.birdTitelViet + '</p></div>';
					out += '</div>';
					out += '</a>';
					out += '</li>';
				}
			});
		} else if (month == 14) {
			document.getElementById("navBarMonthText").innerHTML = "THÁNG 12";
			$.each(birdInformation, function(key, val) {
				if (val.december == 1) {
					out += '<li>';
					out += '<a href="#detailedPage">';
					out += '<div class="birdBox" data-id="' + val.birdSerialnumber + '"  onclick="grabID(this)">';
					out += '<img class="birdImg" src="' +abra2+ val.birdImgPath +  '"/>';
					out += '<div class="birdTitel"><p id="' + val.birdSerialnumber + '">' + val.birdTitelViet + '</p></div>';
					out += '</div>';
					out += '</a>';
					out += '</li>';
				}
			});
		} else if (month == 15) {
			document.getElementById("navBarMonthText").innerHTML = "THÁNG 1";
			$.each(birdInformation, function(key, val) {
				if (val.january == 1) {
					out += '<li>';
					out += '<a href="#detailedPage">';
					out += '<div class="birdBox" data-id="' + val.birdSerialnumber + '"  onclick="grabID(this)">';
					out += '<img class="birdImg" src="' +abra2+ val.birdImgPath +  '"/>';
					out += '<div class="birdTitel"><p id="' + val.birdSerialnumber + '">' + val.birdTitelViet + '</p></div>';
					out += '</div>';
					out += '</a>';
					out += '</li>';
				}
			});
		} else if (month == 16) {
			document.getElementById("navBarMonthText").innerHTML = "THÁNG 2";
			$.each(birdInformation, function(key, val) {
				if (val.febuary == 1) {
					out += '<li>';
					out += '<a href="#detailedPage">';
					out += '<div class="birdBox" data-id="' + val.birdSerialnumber + '"  onclick="grabID(this)">';
					out += '<img class="birdImg" src="' +abra2+ val.birdImgPath +  '"/>';
					out += '<div class="birdTitel"><p id="' + val.birdSerialnumber + '">' + val.birdTitelViet + '</p></div>';
					out += '</div>';
					out += '</a>';
					out += '</li>';
				}
			});
		}
		$('.birdWindow').html(out);
		$('.birdWindow').append('<div class="birdWindowFooter-change"></div>');
	} else if (lang == true) {
		var out = '<div class="marginTop"></div>';
		if (month == 1) {
			document.getElementById("navBarMonthText").innerHTML = "SPRING";
			$.each(birdInformation, function(key, val) {
				if ((val.may == 1) || (val.april == 1) || (val.march == 1)) {
					out += '<li>';
					out += '<a href="#detailedPage">';
					out += '<div class="birdBox" data-id="' + val.birdSerialnumber + '"  onclick="grabID(this)">';
					out += '<img class="birdImg" src="' +abra2+ val.birdImgPath +  '"/>';
					out += '<div class="birdTitel"><p id="' + val.birdSerialnumber + '">' + val.birdTitel + '</p></div>';
					out += '</div>';
					out += '</a>';
					out += '</li>';
				}
			});
		} else if (month == 2) {
			document.getElementById("navBarMonthText").innerHTML = "MARCH";
			$.each(birdInformation, function(key, val) {
				if (val.march == 1) {
					out += '<li>';
					out += '<a href="#detailedPage">';
					out += '<div class="birdBox" data-id="' + val.birdSerialnumber + '"  onclick="grabID(this)">';
					out += '<img class="birdImg" src="' +abra2+ val.birdImgPath +  '"/>';
					out += '<div class="birdTitel"><p id="' + val.birdSerialnumber + '">' + val.birdTitel + '</p></div>';
					out += '</div>';
					out += '</a>';
					out += '</li>';
				}
			});
		} else if (month == 3) {
			document.getElementById("navBarMonthText").innerHTML = "APRIL";
			$.each(birdInformation, function(key, val) {
				if (val.april == 1) {
					out += '<li>';
					out += '<a href="#detailedPage">';
					out += '<div class="birdBox" data-id="' + val.birdSerialnumber + '"  onclick="grabID(this)">';
					out += '<img class="birdImg" src="' +abra2+ val.birdImgPath +  '"/>';
					out += '<div class="birdTitel"><p id="' + val.birdSerialnumber + '">' + val.birdTitel + '</p></div>';
					out += '</div>';
					out += '</a>';
					out += '</li>';
				}
			});
		} else if (month == 4) {
			document.getElementById("navBarMonthText").innerHTML = "MAY";
			$.each(birdInformation, function(key, val) {
				if (val.may == 1) {
					out += '<li>';
					out += '<a href="#detailedPage">';
					out += '<div class="birdBox" data-id="' + val.birdSerialnumber + '"  onclick="grabID(this)">';
					out += '<img class="birdImg" src="' +abra2+ val.birdImgPath +  '"/>';
					out += '<div class="birdTitel"><p id="' + val.birdSerialnumber + '">' + val.birdTitel + '</p></div>';
					out += '</div>';
					out += '</a>';
					out += '</li>';
				}
			});
		} else if (month == 5) {
			document.getElementById("navBarMonthText").innerHTML = "SUMMER";
			$.each(birdInformation, function(key, val) {
				if ((val.august == 1) || (val.july == 1) || (val.june == 1)) {
					out += '<li>';
					out += '<a href="#detailedPage">';
					out += '<div class="birdBox" data-id="' + val.birdSerialnumber + '"  onclick="grabID(this)">';
					out += '<img class="birdImg" src="' +abra2+ val.birdImgPath +  '"/>';
					out += '<div class="birdTitel"><p id="' + val.birdSerialnumber + '">' + val.birdTitel + '</p></div>';
					out += '</div>';
					out += '</a>';
					out += '</li>';
				}
			});
		} else if (month == 6) {
			document.getElementById("navBarMonthText").innerHTML = "JUNE";
			$.each(birdInformation, function(key, val) {
				if (val.june == 1) {
					out += '<li>';
					out += '<a href="#detailedPage">';
					out += '<div class="birdBox" data-id="' + val.birdSerialnumber + '"  onclick="grabID(this)">';
					out += '<img class="birdImg" src="' +abra2+ val.birdImgPath +  '"/>';
					out += '<div class="birdTitel"><p id="' + val.birdSerialnumber + '">' + val.birdTitel + '</p></div>';
					out += '</div>';
					out += '</a>';
					out += '</li>';
				}
			});
		} else if (month == 7) {
			document.getElementById("navBarMonthText").innerHTML = "JULY";
			$.each(birdInformation, function(key, val) {
				if (val.july == 1) {
					out += '<li>';
					out += '<a href="#detailedPage">';
					out += '<div class="birdBox" data-id="' + val.birdSerialnumber + '"  onclick="grabID(this)">';
					out += '<img class="birdImg" src="' +abra2+ val.birdImgPath +  '"/>';
					out += '<div class="birdTitel"><p id="' + val.birdSerialnumber + '">' + val.birdTitel + '</p></div>';
					out += '</div>';
					out += '</a>';
					out += '</li>';
				}
			});
		} else if (month == 8) {
			document.getElementById("navBarMonthText").innerHTML = "AUGUST";
			$.each(birdInformation, function(key, val) {
				if (val.august == 1) {
					out += '<li>';
					out += '<a href="#detailedPage">';
					out += '<div class="birdBox" data-id="' + val.birdSerialnumber + '"  onclick="grabID(this)">';
					out += '<img class="birdImg" src="' +abra2+ val.birdImgPath +  '"/>';
					out += '<div class="birdTitel"><p id="' + val.birdSerialnumber + '">' + val.birdTitel + '</p></div>';
					out += '</div>';
					out += '</a>';
					out += '</li>';
				}
			});
		} else if (month == 9) {
			document.getElementById("navBarMonthText").innerHTML = "AUTUMN";
			$.each(birdInformation, function(key, val) {
				if ((val.november == 1) || (val.october == 1) || (val.september == 1)) {
					out += '<li>';
					out += '<a href="#detailedPage">';
					out += '<div class="birdBox" data-id="' + val.birdSerialnumber + '"  onclick="grabID(this)">';
					out += '<img class="birdImg" src="' +abra2+ val.birdImgPath +  '"/>';
					out += '<div class="birdTitel"><p id="' + val.birdSerialnumber + '">' + val.birdTitel + '</p></div>';
					out += '</div>';
					out += '</a>';
					out += '</li>';
				}
			});
		} else if (month == 10) {
			document.getElementById("navBarMonthText").innerHTML = "SEPTEMBER";
			$.each(birdInformation, function(key, val) {
				if (val.september == 1) {
					out += '<li>';
					out += '<a href="#detailedPage">';
					out += '<div class="birdBox" data-id="' + val.birdSerialnumber + '"  onclick="grabID(this)">';
					out += '<img class="birdImg" src="' +abra2+ val.birdImgPath +  '"/>';
					out += '<div class="birdTitel"><p id="' + val.birdSerialnumber + '">' + val.birdTitel + '</p></div>';
					out += '</div>';
					out += '</a>';
					out += '</li>';
				}
			});
		} else if (month == 11) {
			document.getElementById("navBarMonthText").innerHTML = "OCTOBER";
			$.each(birdInformation, function(key, val) {
				if (val.october == 1) {
					out += '<li>';
					out += '<a href="#detailedPage">';
					out += '<div class="birdBox" data-id="' + val.birdSerialnumber + '"  onclick="grabID(this)">';
					out += '<img class="birdImg" src="' +abra2+ val.birdImgPath +  '"/>';
					out += '<div class="birdTitel"><p id="' + val.birdSerialnumber + '">' + val.birdTitel + '</p></div>';
					out += '</div>';
					out += '</a>';
					out += '</li>';
				}
			});
		} else if (month == 12) {
			document.getElementById("navBarMonthText").innerHTML = "NOVEMBER";
			$.each(birdInformation, function(key, val) {
				if (val.november == 1) {
					out += '<li>';
					out += '<a href="#detailedPage">';
					out += '<div class="birdBox" data-id="' + val.birdSerialnumber + '"  onclick="grabID(this)">';
					out += '<img class="birdImg" src="' +abra2+ val.birdImgPath +  '"/>';
					out += '<div class="birdTitel"><p id="' + val.birdSerialnumber + '">' + val.birdTitel + '</p></div>';
					out += '</div>';
					out += '</a>';
					out += '</li>';
				}
			});
		} else if (month == 13) {
			document.getElementById("navBarMonthText").innerHTML = "WINTER";
			$.each(birdInformation, function(key, val) {
				if ((val.december == 1) || (val.january == 1) || (val.febuary == 1)) {
					out += '<li>';
					out += '<a href="#detailedPage">';
					out += '<div class="birdBox" data-id="' + val.birdSerialnumber + '"  onclick="grabID(this)">';
					out += '<img class="birdImg" src="' +abra2+ val.birdImgPath +  '"/>';
					out += '<div class="birdTitel"><p id="' + val.birdSerialnumber + '">' + val.birdTitel + '</p></div>';
					out += '</div>';
					out += '</a>';
					out += '</li>';
				}
			});
		} else if (month == 14) {
			document.getElementById("navBarMonthText").innerHTML = "DECEMBER";
			$.each(birdInformation, function(key, val) {
				if (val.december == 1) {
					out += '<li>';
					out += '<a href="#detailedPage">';
					out += '<div class="birdBox" data-id="' + val.birdSerialnumber + '"  onclick="grabID(this)">';
					out += '<img class="birdImg" src="' +abra2+ val.birdImgPath +  '"/>';
					out += '<div class="birdTitel"><p id="' + val.birdSerialnumber + '">' + val.birdTitel + '</p></div>';
					out += '</div>';
					out += '</a>';
					out += '</li>';
				}
			});
		} else if (month == 15) {
			document.getElementById("navBarMonthText").innerHTML = "JANUARY";
			$.each(birdInformation, function(key, val) {
				if (val.january == 1) {
					out += '<li>';
					out += '<a href="#detailedPage">';
					out += '<div class="birdBox" data-id="' + val.birdSerialnumber + '"  onclick="grabID(this)">';
					out += '<img class="birdImg" src="' +abra2+ val.birdImgPath +  '"/>';
					out += '<div class="birdTitel"><p id="' + val.birdSerialnumber + '">' + val.birdTitel + '</p></div>';
					out += '</div>';
					out += '</a>';
					out += '</li>';
				}
			});
		} else if (month == 16) {
			document.getElementById("navBarMonthText").innerHTML = "FEBUARY";
			$.each(birdInformation, function(key, val) {
				if (val.febuary == 1) {
					out += '<li>';
					out += '<a href="#detailedPage">';
					out += '<div class="birdBox" data-id="' + val.birdSerialnumber + '"  onclick="grabID(this)">';
					out += '<img class="birdImg" src="' +abra2+ val.birdImgPath +  '"/>';
					out += '<div class="birdTitel"><p id="' + val.birdSerialnumber + '">' + val.birdTitel + '</p></div>';
					out += '</div>';
					out += '</a>';
					out += '</li>';
				}
			});
		}
		$('.birdWindow').html(out);
		$('.birdWindow').append('<div class="birdWindowFooter-change"></div>');
	}
	if (birdListScroll != null) {
		console.log("zerstört");
		birdListScroll.destroy();
		birdListScroll = null;
		loaded1();
	} else {
		console.log("gab nichts zum destroyeeenn");
		loaded1();
	}
	
}
