//
// Cookie functions
//
var today = new Date();
var expiry = 365; // aantal dagen dat cookie geldig moet blijven

function getCookieVal (offset) {
	var endstr = document.cookie.indexOf (";", offset);
	if (endstr == -1) {
		endstr = document.cookie.length;
	}
	return unescape(document.cookie.substring(offset, endstr));
}

function GetCookie (name) {
	var arg = name + "=";
	var alen = arg.length;
	var clen = document.cookie.length;
	var i = 0;
	
	while (i < clen) {
		var j = i + alen;
		if (document.cookie.substring(i, j) == arg) {
			return getCookieVal (j);
		}
		i = document.cookie.indexOf(" ", i) + 1;
		if (i == 0)
			break;
	}	
	return null;
}

function DeleteCookie (name,path,domain) {
	if (GetCookie(name)) {
		document.cookie = name + "=" + ((path) ? "; path=" + path : "") + ((domain) ? "; domain=" + domain : "") + "; expires=Thu, 01-Jan-70 00:00:01 GMT";
	}
}

function SetCookie (name, value, expiredays, path, domain, secure) {
	var exdate = new Date();
	exdate.setDate(exdate.getDate() + expiredays);
	
	document.cookie = name + "=" + escape (value) +
		// ((expiredays) ? "; expires=" + exdate.toGMTString() : "") +
		((expiredays == null) ? "" : ";expires=" + exdate.toGMTString()) +
		((path) ? "; path=" + path : "") +
		((domain) ? "; domain=" + domain : "") +
		((secure) ? "; secure" : "");
}

function getAlleNieuws() {
	if (GetCookie('liferay_abvv_profile') == null) {
		  var getName = prompt('U heeft geen profiel geselecteerd.', 'algemeen');
		  document.getElementById("allnews").writeln('<H2>' + getName +'</H2>');
		  SetCookie('liferay_abvv_profile', (getName != '' ? getName : 'Anonymous profile'), expiry);
		  SetCookie('hit_count', '2', expiry);
		  }
		else {
		  var getName = GetCookie('liferay_abvv_profile');
		  var getHits = GetCookie('hit_count');
		  document.getElementById("allnews").writeln('<H2>' + getName +'</H2>');
		  getHits = parseInt(getHits) + 1;
		  SetCookie('hit_count', '' + getHits + '', expiry);
		  }
}
