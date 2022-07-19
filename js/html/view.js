import Tree from "../views/tree/components/tree.js";
import { parse } from "../helper/jsurl.js";
import Button from "../views/other/button.js";

const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const treeConfig = parse(urlParams.get("t")) || {};
const editModeHref = "./e.html";

const t = new Tree(treeConfig, false);
document.body.appendChild(t.html());

const editModeButtonHtml = () => {
  const editModeButton = new Button("cog", 28, 28).html();
  editModeButton.classList.add("modeToggle", "right");

  editModeButton.onclick = () => {
    window.location.href = editModeHref + queryString;
  };
  return editModeButton;
};

document.body.appendChild(editModeButtonHtml());

window.onload = function() {
  clock();  
    function clock() {
    var now = new Date();
    var weekday = new Array('sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday');
    var dayOfWeek = weekday[now.getDay()];
    var months = new Array('january', 'february', 'march', 'april', 'may', 'june', 'july', 'august', 'september', 'october', 'november', 'december');
    curMonth = months[now.getMonth()];
    var TwentyFourHour = now.getHours();
    var hour = now.getHours();
    var min = now.getMinutes();
    var sec = now.getSeconds();
    var mid = 'pm';
    if (min < 10) {
      min = "0" + min;
    }
    if (sec < 10) {
      sec = "0" + sec;
    }
    if (hour > 12) {
      hour = hour - 12;
    }    
    if(hour==0){ 
      hour=12;
    }
    if(TwentyFourHour < 12) {
       mid = 'am';
    }     
  document.getElementById('currentTime').innerHTML = dayOfWeek+' '+curMonth+' '+now.getDate()+', '+hour+':'+min+':'+sec +' '+mid ;
    setTimeout(clock, 1000);
    }
}
