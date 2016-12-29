function checkTime(i) {
    if (i < 10) {
        i = "0" + i
    }
    return i
}

function time(){
var today = new Date()
var hours = today.getHours()
var minutes = today.getMinutes()
var sec = today.getSeconds()

if(hours > 12) {
	hours = hours - 12 
} else if(hours < 10){
	hours = "0" + hours
}
minutes = checkTime(minutes)
sec = checkTime(sec)
hours = checkTime(hours)

document.getElementById('divSnow').innerHTML = hours + " : " + minutes + " : " + sec


setTimeout(function(){
	time()
}, 1000)
}

document.getElementById('divSnow').addEventListener('onload', time(), false)
