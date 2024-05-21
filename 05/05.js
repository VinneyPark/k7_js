/*
    1. DOM에서 제어할 노드를 가져 오기
    2. 확인 버튼이 눌러지면
    [확인 버튼일때] 
      - 랜덤수를 생성 => 랜덤수(1~100)는 다시하기 전까지 변경X
      - input 박스 값이 없으면 '값을 입력하세요' 메시지 출력
      - input 박스 값이 1~100사이 숫자가 아니면 '입력오류' 메시지 출력
      - input 박스 값이 랜덤수보다 작으면 up이미지
      - input 박스 값이 랜덤수보다 크면 down이미지
      - input 박스 값이 랜덤수와 같으면 good이미지 
      -- input 보이지 않아야 함
      -- 버튼의 캡션을 "숫자를 생성해 주세요"로 변경
    [숫자를 생성해 주세요 버튼일때]
      - 초기화: 랜덤수 다시 생성, input 박스 보이기 .. 
*/
const showImg = (imgName) =>{
    const updownImg = document.querySelector('#updownImg');

    updownImg.setAttribute('src', `./img/${imgName}.png`);
    updownImg.setAttribute('alt', `${imgName}`);

}


document.addEventListener('DOMContentLoaded', () => {
    //1. 노드 가져오기
    
    const input = document.querySelector('#txt1');
    const bt = document.querySelector('#bt');

    //랜덤수
    let n;
    let flag = true;   // flag가 false면 만들고, flag가 true면 안만들거다
    let imgName ;

    bt.addEventListener('click', () => {
        //form 태그 사용시 다시 호출되지 않도록
        // e.preventDefault();
        //랜덤수 생성 : flag가 true일 때만 생성
        if (flag) {
            flag = false
            n = Math.floor(Math.random() * 100) + 1;
            console.log('n=', n, flag);
            
            showImg('what');
            input.style.display = 'inline';
            bt.textContent = '확인';
            
        }

        //입력값 체크
        if (input.value == '') {
            alert('값을 입력하세요.');
            input.focus();
            console.log('alert');
            return; // 리턴을 만나면 함수가 종료된다. 폼태그의 값을 가져올때는 .value로 가져와야된다
        }
        //입력값 체크 : 1~100사이의 숫자

        const user = parseInt(input.value); //문자를 정수로 바꿀땐 parseInt로 바꿔짐
        console.log(user)
        if  (user < 1 || user > 100){
            alert('[입력오류] 1~100사이의 숫자를 입력하시오')
            input.focus();
            return; //함수를 종료할땐 return이지 break를 쓰진 않는다.
            
        }

        //   - input 박스 값이 랜덤수보다 작으면 up이미지
        //   - input 박스 값이 랜덤수보다 크면 down이미지
        //   - input 박스 값이 랜덤수와 같으면 good이미지 

        if (user < n) {         // 옆에 한줄이면 중괄호 안써도 된다. 여러개쓰면 중괄호 써야함
            imgName = 'up';
        }
        else if (user > n) {
            imgName = 'down';
        }
        else {
            imgName = 'good';

            input.style.display = 'none'; // input의 style의 display를 none을 
            bt.textContent = '숫자를 다시 생성해 주세요';
            flag = true;
        }

        if (imgName === 'up' || imgName === 'down') { // === 데이터 타입까지 같은지 안같은지 비교합니다.
            input.focus();
            input.value = '';
        }

        showImg (imgName)
        
        input.value = '' ;
        console.log(user);

    });

});