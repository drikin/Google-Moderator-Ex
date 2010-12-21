function enableHyperlinks() {
    var ql = document.getElementsByClassName("text text-less paragraph moderator-question-text-panel");
    for (var i = 0; i < ql.length; i+=1) {
        var html = ql[i].innerHTML;
        html = html.replace(/<wbr>/g, "");
        ql[i].innerHTML = html.replace(/(https?:\/\/[^\s<>]+)/g, "<a href=\"$1\">$1</a>");
    }
}

function check() {
    var ql = document.getElementsByClassName("text text-less paragraph moderator-question-text-panel");
    if (ql.length > 0) {
        enableHyperlinks();
    } else {
        setTimeout(check, 1000);
    }
}

check();
