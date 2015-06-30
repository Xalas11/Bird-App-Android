// sahne am ende noch ma gucken!
var downloadWebPage = "http://xuanthuy.lima-city.de/images/birds/";
var dataUrl;
var fileNameDirectory;
var a = 1;
var b = 0;
var c = a;
var count = 0;
var birdDownloadPath;
var progress = 2;
var progressInfo = 98.5 / birdNameChange.length;
var downloading = false;
var somethingWentWrong = false;

function downReset() {
	$("#downWrapID").show(); dataUrl;fileNameDirectory;
	a = 1;
	b = 0;
	c = a;
	count = 0; birdDownloadPath;
	progress = 2;
	progressInfo = 98.5 / birdNameChange.length;
	downloading = false;
	somethingWentWrong = false;
	downDemAlll();
}


function checkConnection() {
    var networkState = navigator.connection.type;

    var states = {};
    states[Connection.UNKNOWN]  = 'exp';
    states[Connection.ETHERNET] = 'wifi';
    states[Connection.WIFI]     = 'wifi';
    states[Connection.CELL_2G]  = 'exp';
    states[Connection.CELL_3G]  = 'exp';
    states[Connection.CELL_4G]  = 'exp';
    states[Connection.CELL]     = 'exp';
    states[Connection.NONE]     = 'check';
    console.log(states);
    console.log(states[networkState]);
	if (states[networkState] == "check") {
		alert('Please check the internet connection and click ok!');
		checkConnection();
	} else if (states[networkState] == "exp") {
		alert('You are Connected to the Mobilenetwork, that could be expensive the content to download is around 70MB. Click ok if you dont mind!');
		downDemAlll();
	} else {
		downDemAlll();
	}
    
}

function downDemAlll() {
	b = 0;
	if (downloading == false) {
		downloading = true;
		if (lang == true) {
			document.getElementById("downStop").innerHTML = "STOP";
		} else {
			document.getElementById("downStop").innerHTML = "VSTOP";
		}

	} else if (downloading == true) {
		downloading = false;
		if (lang == true) {
			document.getElementById("downStop").innerHTML = "START";
		} else {
			document.getElementById("downStop").innerHTML = "VSTART";
		}
	}
	if (allDonwloaded != "downloaded") {
		downDemAlllSchleife();
	}
}

function downLang() {

	if (lang == true) {
		if (downloading == true) {
			document.getElementById("downStop").innerHTML = "VSTOP";
		} else {
			document.getElementById("downStop").innerHTML = "VSTART";
		}
		document.getElementById("downLang").innerHTML = "ENG";
		document.getElementById("downHeader").innerHTML = "DOWNLOADING BIRD PICTURES PLEASE WAIT...";
		document.getElementById("downHeader").innerHTML = "MAKE SURE YOUR WIFI IS ON, THE CONTENT IS AROUND 60MB.";
		document.getElementById("downInfo").innerHTML = "KAMEHAMEHA";
		lang = false;
	} else if (lang == false) {
		if (downloading == true) {
			document.getElementById("downStop").innerHTML = "STOP";
		} else {
			document.getElementById("downStop").innerHTML = "START";
		}
		document.getElementById("downLang").innerHTML = "VIET";
		document.getElementById("downHeader").innerHTML = "DOWNLOADING BIRD PICTURES PLEASE WAIT...";
		document.getElementById("downInfo").innerHTML = "MAKE SURE YOUR WIFI IS ON, THE CONTENT IS AROUND 60MB.";
		lang = true;
	}
}

function downDemAlllSchleife() {
	if (downloading == true) {
		if (b <= 7) {
			b++;
		} else {
			count = 0;
			a++;
			b = 1;
		}
		if (birdNameChange.length >= a) {
			// if array index exists "c" var use

			c = a - 1;
			console.log(count);
			if (birdNameChange[c].birdImgPath != 00 && count == 0) {
				console.log("major" + a + "minor" + b);
				console.log("hier bild1");
				downloadInit();
				progressInfoBar();
				count++;
			} else if (birdNameChange[c].birdImgPath1 != 00 && count == 1) {
				console.log("hier bild2");
				downloadInit();
				progressInfoBar();
				count++;
			} else if (birdNameChange[c].birdImgPath2 != 00 && count == 2) {
				console.log("hier bild3");
				downloadInit();
				progressInfoBar();
				count++;
			} else if (birdNameChange[c].birdImgPath3 != 00 && count == 3) {
				console.log("hier bild4");
				downloadInit();
				progressInfoBar();
				count++;
			} else if (birdNameChange[c].birdImgPath4 != 00 && count == 4) {
				console.log("hier bild5");
				downloadInit();
				progressInfoBar();
				count++;
			} else if (birdNameChange[c].birdImgPath5 != 00 && count == 5) {
				console.log("hier bild6");
				downloadInit();
				progressInfoBar();
				count++;
			} else if (birdNameChange[c].birdImgPath6 != 00 && count == 6) {
				console.log("hier bild7");
				downloadInit();
				progressInfoBar();
				count++;
			} else if (birdNameChange[c].birdImgPath7 != 00 && count == 7) {
				console.log("hier bild6");
				downloadInit();
				progressInfoBar();
				count++;
			} else {
				progressInfoBar();
				downDemAlllSchleife();
			}
		} else {
			if (somethingWentWrong == true) {
				alert("DOWNLOAD IS FINISHED BUT SOME IMAGES ARE MISSING, IN THE ABOUT MENU YOU CAN TRY IT AGAIN");
				$("#downWrapID").hide();
			} else {
				alert("ALL IMAGES ARE DOWNLOADED");
				$("#downWrapID").hide();
				allDonwloaded = "downloaded";
				localStorage.setItem("isAllDownloaded", "downloaded");
			}
		}
	}
}

function progressInfoBar() {
	if (a == progress) {
		progressInfo += 98.5 / birdNameChange.length;
		progress++;
		$("#progress-bar").css("width", progressInfo + "%");
		var integerNumber = parseInt(progressInfo);
		$("#progressTEXT").html(integerNumber + "%");
		console.log(progress + "progress");
	}
}

function downloadInit() {

	if (a <= 216) {
		if (b == 1) {
			birdDownloadPath = downloadWebPage + a + ".jpg";
			console.log(birdDownloadPath + " download next bird progress");
			fileNameDirectory = cordova.file.dataDirectory + a + ".jpg";
		} else {
			birdDownloadPath = downloadWebPage + a + "_" + b + ".jpg";
			fileNameDirectory = cordova.file.dataDirectory + a + "_" + b + ".jpg";
		}
		window.resolveLocalFileSystemURL(fileNameDirectory, downDemAlllSchleife, downloadTheNext);
	}
}

var anotherTry = 0;
function downloadTheNext() {
	var fileTransfer = new FileTransfer();
	var trustHosts = true;
	var ecodeURL = encodeURI(birdDownloadPath);
	fileTransfer.download(ecodeURL, fileNameDirectory, function(entry) {
		console.log(fileNameDirectory);
		downDemAlllSchleife();
	}, function(error) {
		console.log("download error source " + error.source);
		console.log("download error target " + error.target);
		console.log("upload error code" + error.code);
		if (anotherTry == 0) {
			anotherTry++;
			downloadTheNext();
		} else {
			if (anotherTry <= 1) {
				anotherTry++;
				downloadTheNext();
			} else {
				downDemAlllSchleife();
				somethingWentWrong = true;
			}
		}

	});
}
