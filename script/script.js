// 문서가 모두 로딩이 끝났을때 아래와같은일을 시작하겠다.
$(document).ready(function(){

    // 스크롤체크하기란 이런 것이다!
        // 얼마나 스크롤했는지 알아내서 그값을 scr이라고 부르자
        // 만약에 그 scr이라는 값이 0보다 크면
            // header를 위로 올려버리기
        // 만약에 그렇지 않으면 (scr 값이 0보다 크지 않다면)
            // header를 원래 위치로 내리기
    function scrchk(){
        var scr = $(document).scrollTop();
        if(scr > 0){
            $("header").css("top","-60px");
        }else{
            $("header").css("top","0px");
        }
    }

    // 페이지를 열자마자 아래와같은 일을 시작하겠다.
        // 스크롤체크하기
    // 문서를 스크롤할때마다 아래와같은일을 시작하겠다.
        // 스크롤체크하기
    scrchk();
    $(document).scroll(function(){
        scrchk();
    });

});