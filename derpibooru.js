// ==UserScript==
// @name         Derpibooru Header bar
// @downloadURL  https://raw.githubusercontent.com/chao-master/UserScripts/master/derpibooru.js
// @namespace    http://chao-master.github.com
// @version      0.1
// @description  Adjusts the header bar and navigation bar on derpibooru so they sit on one line
// @match        https://derpiboo.ru/*
// @grant        none
// ==/UserScript==

$("#navigation").insertAfter(".home");
$("#header>*").css("display","inline");

var mapping = {
	"Derpibooru":"",
	"Images":"picture-o",
	"Activity":"bolt",
	"Random":"random",
	"Forums":"comments",
	"Tags":"tags",
	"Donate":"money",
	"Filters":"filter",
	"Watched":"",
	"Faves":"",
	"Upvotes":"",
	"Uploads":"",
	"Comments":"",
	"Posts":"",
	"Messages":"",
	"Links":"",
	"Settings":"",
	"Account":""
}

$("#header a").contents().filter(function() {return this.nodeType == 3;}).replaceWith(function(){
	var t = String(this.nodeValue).trim(),
		m = mapping[t];
	console.log(t,t.substr(0,4))
	if (m === ""){
		return "";
	} else if (m !== undefined){
		return $("<i>").addClass("fa fa-"+m).attr("title",t)
	} else if (t.substr(0,4) == "Live"){
		$("<i>").addClass("fa fa-video-camera").attr("title",t).insertBefore(this);
		return t.substr(4);
	}
});

