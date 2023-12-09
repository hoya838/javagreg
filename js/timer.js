function dateTimer() { 
    let now = new Date();
    let year = new Date('January 1, 2024');
    let diff = year - now;
    let milliseconds = Math.floor(diff % 1000);
    diff = diff / 1000;
    let seconds = Math.floor (diff % 60);
    diff = diff / 60;
    let minutes = Math.floor(diff % 60);
    diff = diff / 60;
    let hours = Math.floor (diff % 24);
    diff = diff / 24;
    let days = Math.floor (diff);
    let outStr = "크리스마스 이벤트 종료 까지 "+ days + '일 : ' + hours + '시간 : ' + minutes +'분 : ' + seconds +'초 남았습니다.';
    document.getElementById('main_timer').innerHTML = outStr;
    setTimeout("dateTimer()",1000);
}
dateTimer();