/* 함수 안에 
 document.getElementById("check").src="KHJ_LION_img/icon_check.png"
사용해도 되지만 const를 같이 넣어주는게 좋음*/

/* match함수 일치하는지 안하는지 확인 */

/* 로그인 체크 함수*/
function onClick (){
    const check = document.getElementById("check");
    if (check.src.match("KHJ_LION_img/icon_check_empty.png")){
        check.src="KHJ_LION_img/icon_check.png";
    }else {
        check.src="KHJ_LION_img/icon_check_empty.png"}
    }
    
/* 로그인 버튼 클릭 함수*/
 function Click (){
     const login = document.getElementById("login");
     alert("로그인 되었습니다.")

 }   