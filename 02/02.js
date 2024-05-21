const btCreate = (bt, idTxt, captionNode, parentNode) => {
bt.setAttribute('id', idTxt);
bt.appendChild(captionNode);
parentNode.append(bt);
}

document.addEventListener("DOMContentLoaded", () => {    // () = > {할일});  ()=>{}; - 콜백함수라한다
    
    console.log('DOM 완성');
    
    const msg = document.querySelector('#msg');  // selector가 msg인것을 찾아서 가지고와라
    const btDiv = document.getElementById('btDiv');  //es6 변수선언은 const = const는 밑에서 다른거로 할당이 안되는 상수의 개념, let = 바뀔수있다. 두개밖에 없다.
    const bt1 = document.createElement('button');    //버튼 만들고, 03.js는 이미 03.html에서 버튼을 만들었기에 이 라인을 입력할필요 X //const가 상수변수다      //<button>버튼1</button> 여기서 버튼1이라는 글자를 캡션이라고 한다. 
    const bt1Txt = document.createTextNode('버튼11'); // 글자만듬
    const bt2 = document.createElement('button'); 
    const bt2Txt = document.createTextNode('버튼21');

    // bt1.setAttribute('id', 'bt11') ;
    // bt1.appendChild(bt1Txt) ;      //위 자식노드에 끼우기 위해 어펜드차일드를 씀
    // btDiv.append(bt1);

    // bt2.setAttribute('id', 'bt21')
    // bt2.appendChild(bt2Txt) ;
    // btDiv.append(bt2);
    btCreate(bt1, 'bt11', bt1Txt, btDiv);
    btCreate(bt2, 'bt21', bt2Txt, btDiv);

    bt1.addEventListener('click', ()=>{
        // if (msg.innerHTML == '')
        //     msg.innerHTML = '<h1>안녕하세요!!</h1>' ;
        // else
        //     msg.innerHTML = '';
        msg.innerHTML = '<h1>안녕하세요!!</h1>' ;

        
        bt2.addEventListener('click', ()=>{
            msg.innerHTML = '';
    
    });
    });
} ); //여기서()안에 ',' 그 다음은 인수가 들어온다. {}는 함수의 function에 해당 즉 body부분임. 자바도 중괄호 열고닫으니.   
//document라는 객체에 addEventListener라는 함수(method)를 쓴다. method니까 괄호 여닫는다() 그리고 괄호안에 파라미터가 들어간다.
// class에서 property(속성)에 값을 넣을때 = (할당). 객체는 행위를 가지고있다. method안에 파라미터가 그 method의 특징을 가진다. ex)먹는다 method에 파라미터를 추가하면 밥을 먹는다.

