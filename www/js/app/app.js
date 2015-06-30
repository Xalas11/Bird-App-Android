/**
 * @author Robert
 */
var abra = "file:///data/data/de.birds.XuanThuy/files/";
var arrayLegth = birdInformation.length;

function init() {
	document.addEventListener("deviceready", onDeviceReady, false);
}

function onDeviceReady() {
	console.log("jou ready herere");
	device = device.platform;
	path = window.location.pathname;
	path = path.replace('main.html', '');
	if (allDonwloaded == "downloaded") {
		$("#downWrapID").hide();
	} else {
		checkConnection();
	}
}

birdInformationABC.sort(function(a, b) {
	if (a.birdTitel < b.birdTitel)
		return -1;
	if (a.birdTitel > b.birdTitel)
		return 1;
	return 0;
});
/* Device detection */
var mainPage = $.trim($('#mainPageTemplate').html());
var aboutPage = $.trim($('#aboutTemplate').html());
var birdWindow = $.trim($('#birdWindowTemplate').html());
var birdDetail = $.trim($('#birdDetailTemplate').html());
var birdDetailGallery = $.trim($('#birdDetailGalleryTemplate').html());
var birdWindowABC = $.trim($('#birdWindowTemplateAppend').html());
var seasonMenu = $.trim($('#birdSeasonMenuTemplate').html());

var nameScroll = 0;
// Gallery need
var slider = new PageSlider($("#templateShower"));
$(window).on('hashchange', route);
function route(event) {
	var page,
	    hash = window.location.hash;
	if (hash === "#season") {
		page = asd;
		robertLevelUP();
		//        slider.slide($(page), "right");
	} else if (hash === "#name") {
		bird = 10;
		page = birdWindow;
		robertLevelUP();
		//        slider.slide($(page), "right");
	} else if (hash === "#about") {
		page = aboutPage;
		robertLevelUP();
		//        slider.slide($(page), "right");
	} else if (hash === "#detailedPage") {
		if (lang == false) {
			page = birdDetail.replace(/{{birdTitel}}/ig, birdInformation[bsa].birdTitelViet).replace(/{{Description}}/ig, "MÔ TẢ").replace(/{{DescriptionText}}/ig, birdInformation[bsa].birdDescriptionViet).replace(/{{Habitat}}/ig, "SINH CẢNH SỐNG").replace(/{{HabitatText}}/ig, birdInformation[bsa].birdHabitatViet).replace(/{{Observation}}/ig, "QUAN SÁT").replace(/{{ObservationText}}/ig, birdInformation[bsa].birdObservationViet).replace(/{{Conversation}}/ig, "TÌNH TRẠNG").replace(/{{ConversationText}}/ig, birdInformation[bsa].birdConversationViet);
		} else {
			page = birdDetail.replace(/{{birdTitel}}/ig, birdInformation[bsa].birdTitel).replace(/{{Description}}/ig, "DESCRIPTION").replace(/{{DescriptionText}}/ig, birdInformation[bsa].birdDescription).replace(/{{Habitat}}/ig, "HABITAT").replace(/{{HabitatText}}/ig, birdInformation[bsa].birdHabitat).replace(/{{Observation}}/ig, "OBSERVATION").replace(/{{ObservationText}}/ig, birdInformation[bsa].birdObservation).replace(/{{Conversation}}/ig, "CONSERVATION").replace(/{{ConversationText}}/ig, birdInformation[bsa].birdConversation);
		}
		robertLevelUP();
		//        slider.slide($(page), "right");
	} else if (hash === "#detailedPageGallery") {
		page = birdDetailGallery;
		robertLevelUP();
		//        slider.slide($(page), "right");
	} else if (hash === "#seasonMenu") {
		page = seasonMenu;
		robertLevelUP();
		//        slider.slide($(page), "right");
	} else if (hash === "#seasonMonth") {
		page = birdWindow;
		robertLevelUP();
		//        slider.slide($(page), "right");
	} else {
		page = mainPage;
		robertLevelUP();
		//        slider.slide($(homePage), "left");
	}
	slider.slidePage($(page));
	function robertLevelUP() {
		if (hash === "#season") {
			$('.aboutPageBack').hide();
			$('#navBarShower').hide();
		} else if (hash === "#name") {
			document.addEventListener('touchmove', preventDefault, false);
			menuChoosen = 1;
			$('#navBarShower').show();
			$('#fixedShow').show();
			$('#backButton').addClass("nameColor");
			$('.languageButton').addClass("nameColor");
			$('#backButton').removeClass("seasonColor");
			$('.languageButton').removeClass("seasonColor");
			$('#searchButton').show();
			$("#backButtonHref").attr("href", "#");
			$('#searchButton').removeClass("searchButton-change");
			setTimeout(loadBirdsEngFunction, 1);
		} else if (hash === "#about") {
			$('.aboutPageBack').show();
			$('#fixedShow').show();
			$('#navBarShower').hide();
			setTimeout(function() {document.getElementById("photoCreditNames").innerHTML = photoGrapher;}, 10);
			document.removeEventListener('touchmove', preventDefault, false);
		} else if (hash === "#detailedPage") {
			document.removeEventListener('touchmove', preventDefault, false);
			$('#navBarSeasonShow').hide();
			$('.languageButton').removeClass("languageButton-change");
			if (menuChoosen == 1) {
				$('.languageButton').addClass("nameColor");
				$('.languageButton').removeClass("seasonColor");
				$("#backButtonHref").attr("href", "#name");
			} else if (menuChoosen == 2) {
				$('.languageButton').removeClass("nameColor");
				$('.languageButton').addClass("seasonColor");
				$("#backButtonHref").attr("href", "#seasonMonth");
			}
			$('#searchButton').addClass("searchButton-change");
			searchBarToggleFunction();
			setTimeout(documentComplexReady, 1);
		} else if (hash === "#detailedPageGallery") {
			$('.languageButton').removeClass("nameColor");
			$('.languageButton').removeClass("seasonColor");
			$('.languageButton').addClass("languageButton-change");
			$("#backButtonHref").attr("href", "#detailedPage");
			setTimeout(loadImgGallery, 1);
		} else if (hash === "#seasonMenu") {
			menuChoosen = 2;
			$('#navBarSeasonShow').hide();
			$('#navBarShower').show();
			$('#fixedShow').show();
			$('#backButton').addClass("seasonColor");
			$('.languageButton').addClass("seasonColor");
			$('#backButton').removeClass("nameColor");
			$('.languageButton').removeClass("nameColor");
			$('#searchButton').addClass("searchButton-change");
			$("#backButtonHref").attr("href", "#");
			setTimeout(laguageSeasonMenu, 1);
		} else if (hash === "#seasonMonth") {
			document.addEventListener('touchmove', preventDefault, false);
			$("#backButtonHref").attr("href", "#seasonMenu");
			$('#navBarSeasonShow').show();
			setTimeout(seasonBirdLoad, 1);
		} else {
			$('.aboutPageBack').hide();
			$('#navBarShower').hide();
			$('#fixedShow').hide();
			searchBarToggleFunction();
			//document.addEventListener('touchmove', preventDefault, false);
			setTimeout(laguageMainPage, 1);
		}
	}

}

route();
$('.aboutPageBack').hide();

// BIRD WINDOW / GALLERY //
function scrollToBird() {
	birdListScroll.scrollTo(0, nameScroll);
}

function loadBirdsEngFunction() {
	var hashName = window.location.hash;

	if (hashName == "#name") {
		if (lang == false) {
			$('.birdWindow').html("");
			var out = '<li class="marginTop"></li>';
			$('.birdWindow').append(out);
			for (var obj = 0; obj < 30; obj++) {
				var temp = birdWindowABC.replace(/{{birdImgPath}}/ig, abra + birdInformationABC[obj].birdImgPath).replace(/{{birdTitel}}/ig, birdInformationABC[obj].birdTitelViet).replace(/{{birdID}}/ig, birdInformationABC[obj].birdSerialnumber);
				$('.birdWindow').append(temp);
			}
			out = '<div id="birdWindowFooter"></div>';
			setTimeout(function() {
				for (var obj = 30; obj < arrayLegth; obj++) {
					var temp = birdWindowABC.replace(/{{birdImgPath}}/ig, abra + birdInformationABC[obj].birdImgPath).replace(/{{birdTitel}}/ig, birdInformationABC[obj].birdTitelViet).replace(/{{birdID}}/ig, birdInformationABC[obj].birdSerialnumber);
					$('.birdWindow').append(temp);
				}
				out = '<div id="birdWindowFooter"></div>';
				$('.birdWindow').append(out);
			}, 250);
			if (birdListScroll != null) {
				console.log("zerstört");
				birdListScroll.destroy();
				birdListScroll = null;
				loaded1();
			} else {
				console.log("gab nichts zum destroyeeenn");
				loaded1();
			}
		} else {
			$('.birdWindow').html("");
			var out = '<li class="marginTop"></li>';
			$('.birdWindow').append(out);
			for (var obj = 0; obj < 30; obj++) {
				var temp = birdWindowABC.replace(/{{birdImgPath}}/ig, abra + birdInformationABC[obj].birdImgPath).replace(/{{birdTitel}}/ig, birdInformationABC[obj].birdTitel).replace(/{{birdID}}/ig, birdInformationABC[obj].birdSerialnumber);
				$('.birdWindow').append(temp);
			}
			out = '<div id="birdWindowFooter"></div>';
			setTimeout(function() {
				for (var obj = 30; obj < arrayLegth; obj++) {
					var temp = birdWindowABC.replace(/{{birdImgPath}}/ig, abra + birdInformationABC[obj].birdImgPath).replace(/{{birdTitel}}/ig, birdInformationABC[obj].birdTitel).replace(/{{birdID}}/ig, birdInformationABC[obj].birdSerialnumber);
					$('.birdWindow').append(temp);
				}
				out = '<div id="birdWindowFooter"></div>';
				$('.birdWindow').append(out);
			}, 250);
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
	}
}

/* Searchbar || Search function */
var searchbarToggle = false;
$("#navContainer").on("click", "#searchButton", function() {
	console.log("search");
	var hashSearch = window.location.hash;
	console.log(hashSearch);
	if (hashSearch == "#name") {
		console.log(hashSearch);
		if (searchbarToggle == false) {
			$('.languageButton').removeClass("nameColor");
			$(".searchPositionFixed").addClass("searchPositionFixed-change");
			$(".searchInputStyle").addClass("searchInputStyle-change");
			$(".marginTop").addClass("marginTop-change");
			$('.searchInputStyle').focus();
			$('.languageButton').addClass("languageButton-change");
			searchbarToggle = true;
		} else {
			console.log("hi");
			searchBarToggleFunction();
		}
	}
});
function searchBarToggleFunction() {
	$(".searchPositionFixed").removeClass("searchPositionFixed-change");
	$(".marginTop").removeClass("marginTop-change");
	$(".searchInputStyle").removeClass("searchInputStyle-change");
	$('.languageButton').removeClass("languageButton-change");
	loadBirdsEngFunction();
	searchbarToggle = false;

}


$('#searchInput').keyup(function() {
	birdListScroll.destroy();
	birdListScroll = null;
	loaded1();
	if (lang == false) {
		searchTerm = $('#searchInput').val();
		var myExp = new RegExp(searchTerm, "i");
		var out = '<div class="marginTop marginTop-change"></div>';
		$.each(birdInformation, function(key, val) {
			if (val.birdTitelViet.search(myExp) != -1) {
				out += '<a href="#detailedPage">';
				out += '<div class="birdBox" data-id="' + val.birdSerialnumber + '"  onclick="grabID(this)">';
				out += '<img class="birdImg" src="' + abra + val.birdImgPath + '"/>';
				out += '<div class="birdTitel"><p id="' + val.birdSerialnumber + '">' + val.birdTitelViet + '</p></div>';
				out += '</div>';
				out += '</a>';
			}
		});
		$('.birdWindow').html(out);
		$('.birdWindow').append('<div id="birdWindowFooter"></div>');
	} else {
		searchTerm = $('#searchInput').val();
		var myExp = new RegExp(searchTerm, "i");
		var out = '<div class="marginTop marginTop-change"></div>';
		$.each(birdInformation, function(key, val) {
			if (val.birdTitel.search(myExp) != -1) {
				out += '<a href="#detailedPage">';
				out += '<div class="birdBox" data-id="' + val.birdSerialnumber + '"  onclick="grabID(this)">';
				out += '<img class="birdImg" src="' + abra + val.birdImgPath + '"/>';
				out += '<div class="birdTitel"><p id="' + val.birdSerialnumber + '">' + val.birdTitel + '</p></div>';
				out += '</div>';
				out += '</a>';
			}
		});
		$('.birdWindow').html(out);
		$('.birdWindow').append('<div id="birdWindowFooter"></div>');
	}
});
/* Searchbar || Search function  */
/* Langswitch Namelist */

$("#navContainer").on("click", ".languageButton", function() {
	laguageChangeAll();
});
$("#templateShower").on("click", "#mPLangChange", function() {
	laguageChangeAll();
});
function laguageChangeAll() {
	var hashlang = window.location.hash;

	// NameList language switch add the others here! //
	if (hashlang == "#name" && lang == true && searchbarToggle == false) {
		for (var i = 1; i <= 214; i++) {
			document.getElementById(i).innerHTML = birdNameChange[i - 1].birdTitelViet;
		};
		document.getElementById("langb").innerHTML = "ENG";
		lang = false;
	} else if (hashlang == "#name" && lang == false && searchbarToggle == false) {
		for (var i = 1; i <= 214; i++) {
			document.getElementById(i).innerHTML = birdNameChange[i - 1].birdTitel;
		};
		document.getElementById("langb").innerHTML = "VIET";
		lang = true;
	}// NameList language switch add the others here! //
	else if (hashlang == "#detailedPage" && lang == true) {
		$('#dPTitel').html('<p>' + birdInformationABC[bsa].birdTitelViet + '</p>');
		$('#dPDescription').html('MÔ TẢ');
		$('#dPDescriptionText').html('' + birdInformationABC[bsa].birdDescriptionViet + '');
		$('#dPHabitat').html('SINH CẢNH SỐNG');
		$('#dPHabitatText').html('' + birdInformationABC[bsa].birdHabitatViet + '');
		$('#dPObservation').html('QUAN SÁT');
		$('#dPObservationText').html('' + birdInformationABC[bsa].birdObservationViet + '');
		$('#dPConservation').html('TÌNH TRẠNG');
		$('#dPConservationText').html('' + birdInformationABC[bsa].birdConversationViet + '');
		document.getElementById("langb").innerHTML = "ENG";
		lang = false;
	} else if (hashlang == "#detailedPage" && lang == false) {
		$('#dPTitel').html('<p>' + birdInformationABC[bsa].birdTitel + '</p>');
		$('#dPDescription').html('DESCRIPTION');
		$('#dPDescriptionText').html('' + birdInformationABC[bsa].birdDescription + '');
		$('#dPHabitat').html('HABITAT');
		$('#dPHabitatText').html('' + birdInformationABC[bsa].birdHabitat + '');
		$('#dPObservation').html('OBSERVATION');
		$('#dPObservationText').html('' + birdInformationABC[bsa].birdObservation + '');
		$('#dPConservation').html('CONSERVATION');
		$('#dPConservationText').html('' + birdInformationABC[bsa].birdConversation + '');
		document.getElementById("langb").innerHTML = "VIET";
		lang = true;
	} else if (hashlang == "#seasonMenu" && lang == true) {
		document.getElementById("springImgText").innerHTML = "XUÂN";
		document.getElementById("summerImgText").innerHTML = "HÈ";
		document.getElementById("autumnImgText").innerHTML = "THU";
		document.getElementById("winterImgText").innerHTML = "ĐÔNG";
		document.getElementById("langb").innerHTML = "ENG";
		lang = false;
		sPtransition();
	} else if (hashlang == "#seasonMenu" && lang == false) {
		document.getElementById("springImgText").innerHTML = "SPRING";
		document.getElementById("summerImgText").innerHTML = "SUMMER";
		document.getElementById("autumnImgText").innerHTML = "AUTUMN";
		document.getElementById("winterImgText").innerHTML = "WINTER";
		document.getElementById("langb").innerHTML = "VIET";
		lang = true;
		sPtransition();
	} else if (hashlang == "#seasonMonth" && lang == true) {
		document.getElementById("langb").innerHTML = "ENG";
		lang = false;
		seasonBirdLoad();
	} else if (hashlang == "#seasonMonth" && lang == false) {
		document.getElementById("langb").innerHTML = "VIET";
		lang = true;
		seasonBirdLoad();
	} else if (hashlang == "" && lang == false) {
		$('#mainPageSeason').html("SEASON");
		$('#mainPageName').html("NAME");
		$('#mPLang').html("VIET");
		$('#langb').html("VIET");
		lang = true;
	} else if (hashlang == "" && lang == true) {
		$('#mainPageSeason').html("MÙA");
		$('#mainPageName').html("TÊN");
		$('#mPLang').html("ENG");
		$('#langb').html("ENG");
		lang = false;
	}
}

function laguageSeasonMenu() {
	if (lang == false) {
		document.getElementById("springImgText").innerHTML = "XUÂN";
		document.getElementById("summerImgText").innerHTML = "HÈ";
		document.getElementById("autumnImgText").innerHTML = "THU";
		document.getElementById("winterImgText").innerHTML = "ĐÔNG";
		document.getElementById("langb").innerHTML = "ENG";
	} else if (lang == true) {
		document.getElementById("springImgText").innerHTML = "SPRING";
		document.getElementById("summerImgText").innerHTML = "SUMMER";
		document.getElementById("autumnImgText").innerHTML = "AUTUMN";
		document.getElementById("winterImgText").innerHTML = "WINTER";
		document.getElementById("langb").innerHTML = "VIET";
	}
}

function laguageMainPage() {
	if (lang == false) {
		document.getElementById("mainPageSeason").innerHTML = "MÙA";
		document.getElementById("mainPageName").innerHTML = "TÊN";
		document.getElementById("mPLang").innerHTML = "ENG";
	} else if (lang == true) {
		document.getElementById("mainPageSeason").innerHTML = "SEASON";
		document.getElementById("mainPageName").innerHTML = "NAME";
		document.getElementById("mPLang").innerHTML = "VIET";
	}
}

/* Langswitch Namelist */

var bsa;
var numberAN;

var bip1;
var bip2;
var bip3;
var bip4;
var bip5;
var bip6;
function grabID(e) {
	nameScroll = birdListScroll.y;
	numberAN = 1;
	var birdSelector = e.getAttribute("data-id");
	birdInformationABC.some(function(entry, i) {
		if (entry.birdSerialnumber == birdSelector) {
			bsa = i;
			return true;
		}
	});
	var bip = birdInformation[bsa].birdImgPath0;
	bip1 = birdInformation[bsa].birdImgPath1;
	bip2 = birdInformation[bsa].birdImgPath2;
	bip3 = birdInformation[bsa].birdImgPath3;
	bip4 = birdInformation[bsa].birdImgPath4;
	bip5 = birdInformation[bsa].birdImgPath5;
	bip6 = birdInformation[bsa].birdImgPath6;

	if (bip1 != 0) {
		numberAN++;
		if (bip2 != 0) {
			numberAN++;
			if (bip3 != 0) {
				numberAN++;
				if (bip4 != 0) {
					numberAN++;
					if (bip5 != 0) {
						numberAN++;
						if (bip6 != 0) {
							numberAN++;
						}
					}
				}
			}
		}
	}
}

function documentComplexReady() {
	var out = "";

	if (numberAN >= 1) {
		out += '<div class="swiper-slide"><span class="dPImgZoom"></span><img class="dPImg" src="' + abra + birdInformation[bsa].birdImgPath + '" /></div>';
		if (numberAN >= 2) {
			out += '<div class="swiper-slide"><span class="dPImgZoom"></span><img class="dPImg" src="' + abra + birdInformation[bsa].birdImgPath1 + '" /></div>';
			if (numberAN >= 3) {
				out += '<div class="swiper-slide"><span class="dPImgZoom"></span><img class="dPImg" src="' + abra + birdInformation[bsa].birdImgPath2 + '" /></div>';
				if (numberAN >= 4) {
					out += '<div class="swiper-slide"><span class="dPImgZoom"></span><img class="dPImg" src="' + abra + birdInformation[bsa].birdImgPath3 + '" /></div>';
					if (numberAN >= 5) {
						out += '<div class="swiper-slide"><span class="dPImgZoom"></span><img class="dPImg" src="' + abra + birdInformation[bsa].birdImgPath4 + '" /></div>';
						if (numberAN >= 6) {
							out += '<div class="swiper-slide"><span class="dPImgZoom"></span><img class="dPImg" src="' + abra + birdInformation[bsa].birdImgPath5 + '" /></div>';
							if (numberAN >= 7) {
								out += '<div class="swiper-slide"><span class="dPImgZoom"></span><img class="dPImg" src="' + abra + birdInformation[bsa].birdImgPath6 + '" /></div>';
							}
						}
					}
				}
			}
		}
		$('#birdDetailGallery').html(out);
	}
	console.log(detailedSwiper);
	var detailedSwiper = new Swiper('.swiper-container', {
		// Optional parameters
		direction : 'horizontal',
		pagination : '.swiper-pagination',
		paginationClickable : true,
		spaceBetween : 30,
		onSlideChangeEnd : function(detailedSwiper) {
			document.getElementById("photoCopyRight").innerHTML = birdInformation[bsa].birdCopyRight[detailedSwiper.activeIndex];
		}
	});
	document.getElementById("photoCopyRight").innerHTML = birdInformation[bsa].birdCopyRight[0];
}

function loadImgGallery() {
	var out = "";

	var thumb = "";

	if (numberAN >= 1) {
		out += '<div id="zoom0" class="swiper-slide"><img id="bild0" class="dpImgZoomImg" src="' + abra + birdInformation[bsa].birdImgPath + '"/><span class="dPImgZoom"></span></div>';
		if (numberAN >= 2) {
			out += '<div id="zoom1" class="swiper-slide"><img id="bild1" class="dpImgZoomImg" src="' + abra + birdInformation[bsa].birdImgPath1 + '"/><span class="dPImgZoom"></span></div>';
			if (numberAN >= 3) {
				out += '<div id="zoom2" class="swiper-slide"><img id="bild2" class="dpImgZoomImg" src="' + abra + birdInformation[bsa].birdImgPath2 + '"/><span class="dPImgZoom"></span></div>';
				if (numberAN >= 4) {
					out += '<div id="zoom3" class="swiper-slide"><img id="bild3" class="dpImgZoomImg" src="' + abra + birdInformation[bsa].birdImgPath3 + '"/><span class="dPImgZoom"></span></div>';
					if (numberAN >= 5) {
						out += '<div id="zoom4" class="swiper-slide"><img id="bild4" class="dpImgZoomImg" src="' + abra + birdInformation[bsa].birdImgPath4 + '"/><span class="dPImgZoom"></span></div>';
						if (numberAN >= 6) {
							out += '<div id="zoom5" class="swiper-slide"><img id="bild5" class="dpImgZoomImg" src="' + abra + birdInformation[bsa].birdImgPath5 + '"/><span class="dPImgZoom"></span></div>';
							if (numberAN >= 7) {
								out += '<div id="zoom6" class="swiper-slide"><img id="bild6" class="dpImgZoomImg" src="' + abra + birdInformation[bsa].birdImgPath6 + '"/><span class="dPImgZoom"></span></div>';
							}
						}
					}
				}
			}
		}
		$('#imgZoomGallery').html(out);
	}
	var thumb = "";
	if (numberAN >= 1) {
		thumb += '<div class="swiper-slide"><span class="dPImgZoom"></span><img class="dpImgZoomImgThumb" src="' + abra + birdInformation[bsa].birdImgPath + '"/></div>';
		if (numberAN >= 2) {
			thumb += '<div class="swiper-slide"><span class="dPImgZoom"></span><img class="dpImgZoomImgThumb" src="' + abra + birdInformation[bsa].birdImgPath1 + '"/></div>';
			if (numberAN >= 3) {
				thumb += '<div class="swiper-slide"><span class="dPImgZoom"></span><img class="dpImgZoomImgThumb" src="' + abra + birdInformation[bsa].birdImgPath2 + '"/></div>';
				if (numberAN >= 4) {
					thumb += '<div class="swiper-slide"><span class="dPImgZoom"></span><img class="dpImgZoomImgThumb" src="' + abra + birdInformation[bsa].birdImgPath3 + '"/></div>';
					if (numberAN >= 5) {
						thumb += '<div class="swiper-slide"><span class="dPImgZoom"></span><img class="dpImgZoomImgThumb" src="' + abra + birdInformation[bsa].birdImgPath4 + '"/></div>';
						if (numberAN >= 6) {
							thumb += '<div class="swiper-slide"><span class="dPImgZoom"></span><img class="dpImgZoomImgThumb" src="' + abra + birdInformation[bsa].birdImgPath5 + '"/></div>';
							if (numberAN >= 7) {
								thumb += '<div class="swiper-slide"><span class="dPImgZoom"></span><img class="dpImgZoomImgThumb" src="' + abra + birdInformation[bsa].birdImgPath6 + '"/></div>';
							}
						}
					}
				}
			}
		}
		$('#imgThumbGallery').html(thumb);
	}
	galleryTop = new Swiper('.zoom-gallery', {
		nextButton : '.swiper-button-next',
		prevButton : '.swiper-button-prev',
		spaceBetween : 10,
		onSlideChangeEnd : function(swiper) {
			var imageID = "zoom" + galleryTop.activeIndex;
			var bildID = "bild" + galleryTop.activeIndex;
			var topCopy = galleryTop.activeIndex;
			loaded(imageID, bildID);
			copyRightImgTop(topCopy);
		}
	});
	var imageID = "zoom" + galleryTop.activeIndex;
	var bildID = "bild" + galleryTop.activeIndex;
	loaded(imageID, bildID);
	var galleryThumbs = new Swiper('.zoom-galleryBottom', {
		spaceBetween : 0,
		centeredSlides : true,
		slidesPerView : 'auto',
		touchRatio : 0.2,
		slideToClickedSlide : true,
		onSlideChangeStart : function(swiper) {
			var navImg = "bild" + galleryThumbs.previousIndex;
			var transf = "translate3d(0, 0, 0) scale(1)";
			document.getElementById(navImg).style.transform = transf;
			document.getElementById(navImg).style.webkitTransform = transf;
			var imageID = "zoom" + galleryThumbs.activeIndex;
			var bildID = "bild" + galleryThumbs.activeIndex;
			loaded(imageID, bildID);
		},
		onSlideChangeEnd : function(swiper) {
			var thumpCopy = galleryThumbs.activeIndex;
			copyRightImg(thumpCopy);
		}
	});
	galleryTop.params.control = galleryThumbs;
	galleryThumbs.params.control = galleryTop;
	document.getElementById("DpPhotoCopyRight").innerHTML = birdInformation[bsa].birdCopyRight[0];
}

function copyRightImgTop(topCopy) {
	document.getElementById("DpPhotoCopyRight").innerHTML = birdInformation[bsa].birdCopyRight[topCopy];
}

function copyRightImg(thumpCopy) {
	document.getElementById("DpPhotoCopyRight").innerHTML = birdInformation[bsa].birdCopyRight[thumpCopy];
}

// audio joloko

$('#templateShower').on('click', '#dPTitel', function() {
	audioFunction();
});
var isPlaying = false;
function audioFunction() {

	if (isPlaying == false) {
		isPlaying = true;
		var audiopath = path + "audio/name/" + birdInformation[bsa].birdSerialnumber + ".mp3";
		console.log(audiopath);
		var media = new Media(audiopath,
		// success callback
		function() {
			isPlaying = false;
			console.log("playAudio():Audio Success");
		},
		// error callback
		function(err) {
			isPlaying = false;
			console.log("playAudio():Audio Error: " + err);
		});
		media.play();
	}
}

/// gimiks !! !!
var birdSpinnToggle = false;
var birdAway = 0;
function birdSpinn1() {
	if (birdSpinnToggle == false) {
		birdSpinnToggle = true;
		$("#backgroundBirdImg").addClass("birdSpin");
	} else if (birdAway == 5) {
		$("#backgroundBirdImg").addClass("birdAway");
		birdAway = 0;
	} else {
		birdAway++;
		$("#backgroundBirdImg").removeClass("birdSpin");
		birdSpinnToggle = false;
	}
}
