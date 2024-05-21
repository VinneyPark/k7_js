/*1.DOM에서 제어할 노드를 가져오기 ex)이미지와 버튼
2. 6개 버튼 Click 이벤트를 만들기
3. 버튼 클릭이 작동되면
    - 해당하는 버튼의 숫자를 추출 => 사용자 선택 숫자
    - 이미지 변경
    - 랜덤수를 생성 => 컴퓨터 숫자
    - 이미지 변경
    - 사용자 선택숫자와 컴퓨터 숫자를 비교
    - 비교 결과 출력
*/



document.addEventListener("DOMContentLoaded", () => {
    //1.DOM에서 제어할 노드를 가져오기 ex)이미지와 버튼
        const comImg = document.querySelector('#com');
        /* - const comImg = document.getElementById('com'); 이렇게 써도됨
         쿼리 실렉터가 뒤에 만들어졌고 주로 쓴다*/
        const userImg = document.querySelector('#user');
        const resultMsg = document.querySelector('#msg');

        const bts = document.querySelectorAll('button');
        console.log(bts); //검사 섹션에 콘솔보면 6개 다 뜸

        
        // //반복문1
        // console.log('**반복문1**')
        // for(let i = 0; i < bts.length; i++) {
        //     console.log(bts[i])
        // }

        // //반복문2
        // console.log('**반복문2**')
        // for(let i in bts){
        //     console.log(bts[i])
        // }

        // //반복문3
        // console.log('**반복문3**')
        // bts.forEach(bt => {
        //     console.log(bt)
        // })

        // //반복문4
        // console.log('**반복문4**')
        // for (let bt of bts) {
        //     console.log(bt)
        // }

        // for (let [i,bt] of bts.entries()) {
        //     console.log(i,bt)
        // }

        //2. 6개 버튼 Click 이벤트를 만들기
        
        //2. 6개 버튼 Click 이벤트 달기,  선언한 bt는 for 문장 안에서만 bt를 쓸 수가있다. 
        for (let bt of bts) {
            bt.addEventListener('click', () =>{
        /*3. 버튼 클릭이 작동되면
        - 해당하는 버튼의 숫자를 추출 => 사용자 선택 숫자
        - 이미지 변경
        - 랜덤수를 생성 => 컴퓨터 숫자
        - 이미지 변경
        - 사용자 선택숫자와 컴퓨터 숫자를 비교
        - 비교 결과 출력*/

            const user = parseInt(bt.textContent.slice(-1));
            const com = Math.floor(Math.random() * 6) + 1;
            

            console.log(bt.textContent.slice(-1),com)
            comImg.setAttribute('src', `../03/img/${com}.png`);
            comImg.setAttribute('alt', `${com}`);
                        
            userImg.setAttribute('src', `../03/img/${user}.png`);
            userImg.setAttribute('alt', `${user}`);
            
            if (com == user) resultMsg.innerHTML = "맞음";
            else resultMsg.innerHTML = "틀림";

            });
            
        }

});


        // bt.addEventListener('click', ()=>{    //bt에 클릭이벤트가 발생하면 랜덤수를 생성
            
        //     const msg = document.querySelector('#msg');  // selector가 msg인것을 찾아서 가지고와라
        //     const btDiv = document.getElementById('btDiv');  //es6 변수선언은 const = const는 밑에서 다른거로 할당이 안되는 상수의 개념, let = 바뀔수있다. 두개밖에 없다.
        //     const bt1 = document.createElement('button');    //버튼 만들고, 03.js는 이미 03.html에서 버튼을 만들었기에 이 라인을 입력할필요 X //const가 상수변수다      //<button>버튼1</button> 여기서 버튼1이라는 글자를 캡션이라고 한다. 
        //     const bt1Txt = document.createTextNode('버튼11'); // 글자만듬
        //     const bt2 = document.createElement('button'); 
        //     const bt2Txt = document.createTextNode('버튼21');

        //     //3.랜덤수 생성 (1~6) 
        //     const n = Math.floor(Math.random() * 6) + 1;
    
        //     //4. 랜덤수에 해당하는 이미지를 src속성에 넣기
        //     img.setAttribute('src', `../03/img/${n}.png`);  //img의 src속성을 바꾼다. src는 경로를 쓴다. 그리고 n이 아니라 1,2,3,4,5,6이라 백팁을 쓴다. 얘는 n이아니고 변수 n이라는 것을 의미부여하기위해 백팁사용
        //     img.setAttribute('alt', `${n}`);  //$로시작하고 중괄호로 묶여있는걸 변수값으로 써라라는 기호다.  백틱과 큰,작은따옴표는 같은역할이나, 백틱에는 변수를 표현할수있다
            
        //     const m = Math.floor(Math.random() * 6) + 1;

        //     img.setAttribute('src', `../03/img/${m}.png`);
        //     img.setAttribute('alt', `${m}`);
        
        
    
    