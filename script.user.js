// ==UserScript==
// @name MetaTopBarLight
// @description The light side of the meta.
// @namespace TravisJ
// @author TravisJ
// @license GNU GPL v3 (http://www.gnu.org/copyleft/gpl.html)
// @include http://meta.stackoverflow.com/*
// forked from: https://github.com/Undo1/SE-Topbar-MainMeta

function $$(f) {
    var script = document.createElement("script");
    script.type = "text/javascript";
    script.textContent = "(" + f.toString() + ")(jQuery)";
    document.body.appendChild(script).parentNode.removeChild(script);
};

//Main Link
$$(function(){
 //main link script authored by @Undo
 $(".topbar-menu-links").prepend("<a href='http://" + document.location.host.slice(5) + "'>main</a>");
});

//Replace gravatar with name
$$(function($) {
 $(".profile-me > div:first").append("<span class='links-container' style='padding-right:2px;'>" + $(".profile-me > div:first").attr('title') + "</span>");
 $('.reputation').css({fontWeight:'bold'});
});

//adjusting styles which were being overriden from the css file
$$(function($){
 $('.topbar .topbar-links .topbar-flair .reputation, .topbar .topbar-links .topbar-flair .badgecount').css('color','inherit');
 $('.topbar .topbar-links .topbar-menu-links a, .topbar .topbar-links .topbar-menu-links a:visited').css('color','inherit');
 $('.topbar .icon-site-switcher').css('background-position','10px -51px');
});

//Docking button - Places a small oval in the top right to toggle the top bar "sticky"
$$(function($){
 $('.topbar').css({zIndex:10,position:"relative",top:0,left:0});
 var ol = $('<div id="barToggle">');
 $("body").append(ol);
 var pos = false;
 ol.click(function(){
  pos = !pos;
  var t = $(this);
  if( pos ){
   $('.topbar').css("position","fixed");
   t.css({zIndex:15,backgroundColor:"blue"});
   $('.container').css('margin-top','34px');
  }else{
   $('.topbar').css("position","relative");
   t.css({zIndex:5,backgroundColor:"#000"});
   $('.container').css('margin-top','');
  }
 });
 ol[0].oncontextmenu = function(){ window.scrollTo(0); };
});
