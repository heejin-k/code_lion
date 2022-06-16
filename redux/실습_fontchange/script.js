// state는 현재 상태, action은 주문 받은 것! 
function reducer(state, action) {
    console.log(state, action);
    if (state === undefined) {
        return { font: 'Arial' }
    }
    var newState;
    if (action.type === 'CHANGE_FONT') {
        //복제해야 합니다. 그냥 {color:'red'}이런 식으로 리턴해줘도 되긴 하는데 리덕스의 고급기능을 쓰지 못합니다.
        newState = { ...state, font: action.font }

        console.log(state)
        console.log(newState)

    }
    return newState;
}

function reducer2(state, action) {
    console.log(state, action);
    if (state === undefined) {
        return { color: 'yellow' }
    }
    var newState;
    if (action.type === 'CHANGE_COLOR') {
        console.log(state)
        newState = { ...state, color: action.color };
        console.log(`newState : ${newState}`)
        console.log(newState)

    }
    return newState;
}
// Redux는 cdn으로 생깁니다.
var store = Redux.createStore(
    reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() // redux dev tools를 사용하기 위한 코드
);

function nanum() {
    var state = store.getState();
    //type은 반드시 있어야 합니다.
    // 바뀔 때마다 console에 store.getState()를 실행해보세요.
    document.querySelector('#nanum').innerHTML = `
        <div class="container" id="component_nanum" style="font-family:${state.font}">
                <h1>Nanum Pen Script</h1>
                <input type="button" value="click" onclick="
                    store.dispatch({type:'CHANGE_FONT', font-family: 'Nanum Pen Script'});
                ">
        </div>
    `;
}
// 값이 바뀔 때마다 red 함수를 호출
store.subscribe(nanum);
nanum();

function hiMelody() {
    var state = store.getState();
    document.querySelector('#hiMelody').innerHTML = `
        <div class="container" id="component_hiMelody" style="font-family:${state.font}">
            <h1>Hi Melody</h1>
            <input type="button" value="click" onclick="
                store.dispatch({type:'CHANGE_FONT', font-family: 'Hi Melody'});
            ">
        </div>
    `;
}
store.subscribe(hiMelody);
hiMelody();

function dokdo() {
    var state = store.getState();
    document.querySelector('#dokdo').innerHTML = `
        <div class="container" id="component_dokdo" style="font-family:${state.font}">
            <h1>Dokdo</h1>
            <input type="button" value="click" onclick="
                store.dispatch({type:'CHANGE_FONT', font-family: 'Dokdo'});
            ">
        </div>
    `;
}
store.subscribe(dokdo);
dokdo();

function gamja() {
    var state = store.getState();
    document.querySelector('#gamja').innerHTML = `
        <div class="container" id="component_gamja" style="font-family:${state.font}">
            <h1>Gamja Flower</h1>
            <input type="button" value="click" onclick="
                store.dispatch({type:'CHANGE_FONT', font-family: 'Gamja Flower'});
            ">
        </div>
    `;
}
store.subscribe(gamja);
gamja();

function gaegu() {
    var state = store.getState();
    document.querySelector('#gaegu').innerHTML = `
        <div class="container" id="component_gaegu" style="font-family:${state.font}">
            <h1>Gaegu</h1>
            <input type="button" value="click" onclick="
                store.dispatch({type:'CHANGE_FONT', font-family: 'Gaegu'});
            ">
        </div>
    `;
}
store.subscribe(gaegu);
gaegu();

function east() {
    var state = store.getState();
    document.querySelector('#east').innerHTML = `
        <div class="container" id="component_east" style="font-family:${state.font}">
            <h1>East Sea Dokdo</h1>
            <input type="button" value="click" onclick="
                store.dispatch({type:'CHANGE_FONT', font-family: 'East Sea Dokdo'});
            ">
        </div>
    `;
}
store.subscribe(east);
east();