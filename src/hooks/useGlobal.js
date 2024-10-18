// import { createContext, useContext, useReducer } from 'react';  //jsx에서 js로 파일명 변경
import { createContext, useContext } from 'react';

// const initState = { isMenu: false, isModal: false };
export const initState = { isMenu: false, isModal: false };

//컴포넌트에서 데이터 호출 시 action객체의 타입명의 오타를 방지하기 위해 앱션타입을 상수형태로 등록하면 컴포넌트에서 호출 가능하며 추구 액션타입명을 손쉽게 변경 가능
export const ACTIONS = {
	SET_MENU_TOGGLE: 'SET_MENU_TOGGLE',
	SET_MENU_CLOSE: 'SET_MENU_CLOSE',
	SET_MODAL_OPEN: 'SET_MODAL_OPEN',
	SET_MODAL_CLOSE: 'SET_MODAL_CLOSE'
};

//기존 if문을 아래와 같이 switch문으로 변환 가능
// const reducer = (state, action) => {
export const reducer = (state, action) => {
	// if (action.type === 'TOGGLE') return { ...state, isMenu: !state.isMenu };
	// if (action.type === 'CLOSE') return { ...state, isMenu: false };
	// if (action.type === 'OPEN_MODAL') return { ...state, isModal: true };
	// if (action.type === 'CLOSE_MODAL') return { ...state, isModal: false };
	// else return state;
	switch (action.type) {
		case ACTIONS.SET_MENU_TOGGLE:
			return { ...state, isMenu: !state.isMenu };
		case ACTIONS.SET_MENU_CLOSE:
			return { ...state, isMenu: false };
		case ACTIONS.SET_MODAL_OPEN:
			return { ...state, isModal: true };
		case ACTIONS.SET_MODAL_CLOSE:
			return { ...state, isModal: false };
		default:
			return state;
	}
};

//해당 전역 컨텍스트는 외부 컴포넌트에서 호출할 일이 없으므로 export 불필요
// const GlobalState = createContext();
// const GlobalDispatch = createContext();
export const GlobalState = createContext();
export const GlobalDispatch = createContext();

//state전역 컨텍스트와 dispatch전역 컨텍스트를 따로 분리해서 아래와같이 별로의 Provider로 중첩해서 루트 컴포넌트를 감싸도록 설정
//이유 : 별도의 Provider로 분리해놓으면 전역 dispatch, 전역 state만 사용하는 컴포넌트의 불필요한 재랜더링을 방지 가능
//기존 하나의 Provider로 전역 state, 전역 dispatch를 같이 전달하면 state만 변경되는 컴포넌트뿐만 아닌 dispatch를 활용하는 컴포넌트도 불필요하게 재랜더링됨
//결국 위와 같은 이유는 하나의 Provider에는 하나의 전역 컨텍스트를 전달해야지만 불필요한 컴포넌트의 재랜더링을 막을 수 있음
//하지만 위와 같이 작업을 하면 너무 과한 Provider 중첩관계로 인해 코드 가독성이 떨어지고 관리도 어려워짐
//위의 문제를 해결하기 위해 zustand라는 외부 라이브러리 사용 추천
// export const GlobalProvider = ({ children }) => {
// 	const [store, dispatch] = useReducer(reducer, initState);

// 	return (
// 		<GlobalState.Provider value={{ store }}>
// 			<GlobalDispatch.Provider value={{ dispatch }}>{children}</GlobalDispatch.Provider>
// 		</GlobalState.Provider>
// 	);
// };

//GlobalState만 호출하는 커스텀훅
export const useGlobalState = () => {
	const context = useContext(GlobalState);
	if (!context) throw new Error('해당 훅은 GlobalStateProvider안쪽에서 호출되어야 합니다.');
	return context;
};

//Global dispatch함수만 호출하는 커스텀훅
export const useGlobalDispatch = () => {
	const context = useContext(GlobalDispatch);
	if (!context) throw new Error('해당 훅은 GlobalDispatchProvider안쪽에서 호출되어야 합니다.');
	return context;
};

/*
	리액트에서 전역 상태관리의 개념 (context API 기반)
	store (객체): 컴포넌트 외부에서 전역으로 관리할 상태값이 담길 공간 (은행의 금고)
	reducer (함수): 전역 객체에 담겨있는 상태값을 변형해주는 변형자 함수 (금고에 접근할 수 있는 높은권한의 지점장)
	action (객체): 리듀서에게 전달할 변경할 데이터 요청값이 있는 객체정보 (입출금 요청서)
	dispatch (함수) : 리듀서에게 실제 action객체를 전달해주는 함수 (고객으로부터 입출금 요청서를 받아 지점장에게 전달해주는 은행 창구직원 )
	그럼 위와 같은 복잡한 흐름을 통해 전역 데이터를 관리하는 이유
	- 리액트로 구현되는 대단위 프로젝트에서는 상태(state) 정보의 관리가 중요함
	- 일반 컴포넌트 내부의 상태값은 해당 컴포넌트내에서만 사용되는 값이기 때문에 설사 문제가 발생을 해도 해당 컴포넌트로 오류 범위가 제한됨으로 큰 문제 발생안됨
	- 하지만 전역 상태값은 말그대로 무수하게 많은 하위컴포넌트들이 해당 전역 상태값을 공유하기 때문에 전역 상태값이 잘못되면 프로젝트 전반에 걸쳐 크리티컬한 오류 발생 가능
	- 전역 상태는 서로 다른 컴포넌트에서 데이터를 변경할 수 있는 리스크가 큰 만큼 쉽게 전역 데이터를 변경하지 못하도록 강제하기 위한 틀이 필요
	- 위와 같은 이유로 useReducer사용 권장 : 개발자들끼리 서로 약속된 방식(리듀서, 액션객체)으로만 전역 상태값을 변경할 수 있도록 강제한 시스템적인 틀
	useReducer를 통해서 전역 데이터를 변경하는 구조적인 흐름
	1.전역 데이터를 수정할 리듀서 함수 생성
	2.해당 리듀서를 어떤 방식으로 변경할지 정할 action객체 정보 구조화
	3.컴포넌트에서 변경할 데이터를 미리 약속한 구조에 맞게 액션객체를 생성
	4.컴포넌트에서 생성된 액션 객체를 dispatch함수를 통해서 전달
	---------------------
	미리 지정한 리듀서 함수가 action객체를 dispatch를 통해 전달 받은 뒤
	실제 action객체의 내용에 따라 전역 store의 데이터를 변경처리
*/

/*
react fast refresh란?
- 리액트 개발시에 특정 코드만 수정하면 전체 컴포넌트가 자동으로 새로고침되면서 수정이 일어나지 않는 모든 컴포넌트들이 전부 재랜더링
- 결과적으로 부분적인 사소한 코드 수정할때마다 모든 컴포넌트가 재호출되다보니 연산시간이 많이 걸리면서 개발시 불편함 발생
- 위와 같은 문제점을 보완하기 위해서 리액트는 자체적으로 fast refresh기능이 동작됨
- 해당 기능은 특정 코드 수정시 수정된 코드가 반영되는 컴포넌트만 변형사항이 업데이트되며 수정이 일어나지 않는 나머지 컴포넌트들은 불필요한 재랜더링 발생시키지 않음

react fast refresh의 동작 조건
- 해당 기능은 컴포넌트를 반환하는 함수가 export될 때만 적용 가능
- 커스텀훅같은 컴포넌트가 아닌 고차함수형태의 기능 함수나 상수값이 export 될 때는 적용되지 않음
- 컴포넌트 반환함수가 export 되더라도 내부에 고차함수나 상수값이 같이 export 될 때에도 fast refresh 기능이 적용되지 않음
*/
