//rfce : 선언적함수 형태로 컴포넌트 생성
//rafce : 함수표현식 형태로 컴포넌트 생성
function Btn() {
  return (
    <div>Btn</div>
  )
}

export default Btn



// // 거의 잘 안쓰는 코드
// // 아토믹 필터에서 사용, 같은 버튼인데 여러가지 종류가 있을 때 사용

// function BtnA() {
//   return <div className="btnA">BtnA</div>;
// }

// function BtnB() {
//   return <div className="btnB">BtnB</div>;
// }

// //하나의 jsx파일에서 복수개의 컴포넌트 함수를 export 가능
// export {BtnA, BtnB};



