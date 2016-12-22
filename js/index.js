window.onload = function() {
    // alert();
    var oLi = document.getElementsByTagName("li");
    var oDiv = document.getElementsByTagName("div");
    // for (var i = 1; i < oLi.length; i++) {
    //     oLi.num = i;
    // }
    for (var i = 0; i < oLi.length; i++) {
        oLi[i].num = i;
        // alert(oLi[i].index);
        oLi[i].onclick = function() {
            // alert(this.num);
            for (var j = 0; j < oLi.length; j++) {
                oLi[j].style.background = "white";
                oDiv[j].style.display = "none";
            }
            this.style.background = "red";
            oDiv[this.num].style.display = "block";

        }
    }

};