var Selector = e => document.querySelector(e);
window.addEventListener("keydown", e => {
    var dataKey = e.keyCode;
    console.log(dataKey)
    dataKey = "'" + dataKey + "'";
    const audio = Selector("audio[data-key=" + dataKey + "]");
    const Div = Selector("div[data-key=" + dataKey + "]");
    if (!audio) return;
    var intervals = setInterval(() => {
        Div.setAttribute("class","key playing");
        var intervals2 = setInterval(() => {
            Div.setAttribute("class","key bkey");    
            clearInterval(intervals);
            clearInterval(intervals2)
        }, 100); 
    }, 100)
    audio.currentTime = 0;
    audio.play();
})