/*
1. DOM에서 이미지와 버튼을 가져오기 => DOM생성이 된 후에 
2. 버튼 클릭이벤트를 만들기
3. 클릭을 하면 랜덤수가 생성 (1~6) => Math.floor(Math.random() * 6) + 1 -> 0.0부터 5.999.. 까지 만들어지는거고 floor는 소숫점을 버리는 것 그래서 1을 더해줌
4. 랜덤수에 해당하는 이미지를 이미지 src속성에 넣기
*/
document.addEventListener("DOMContentLoaded", () => {
//1.DOM에서 이미지와 버튼을 가져오기
    const img = document.querySelector('#btDiv > img');
    const bt = document.querySelector('#btDiv > button');
    //2. 버튼 Click 이벤트를 만들기
    bt.addEventListener('click', ()=>{    //bt에 클릭이벤트가 발생하면 랜덤수를 생성

        //3.랜덤수 생성 (1~6) 
        const n = Math.floor(Math.random() * 6) + 1;

        //4. 랜덤수에 해당하는 이미지를 src속성에 넣기
        img.setAttribute('src', `./img/${n}.png`);  //img의 src속성을 바꾼다. src는 경로를 쓴다. 그리고 n이 아니라 1,2,3,4,5,6이라 백팁을 쓴다. 얘는 n이아니고 변수 n이라는 것을 의미부여하기위해 백팁사용
        img.setAttribute('alt', `${n}`);  //$로시작하고 중괄호로 묶여있는걸 변수값으로 써라라는 기호다.  백틱과 큰,작은따옴표는 같은역할이나, 백틱에는 변수를 표현할수있다
    });

});