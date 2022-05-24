async function getUserEmail(id) {
  const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
  const user = await (response.json());
  const email = user.email;
  console.log(email)
}
getUserEmail(3)
//promise의 문법적 설탕

fetch('https://raw.githubusercontent.com/paullabkorea/coronaVaccinationStatus/main/data/data.json')
  .then(function (response) {
    console.log(1);
    return response.json();
  }).then(json => console.log(json.find(s => s['시·도별(1)'] == '전국')))
//

fetch('https://raw.githubusercontent.com/paullabkorea/coronaVaccinationStatus/main/data/data.json')
  .then(function (response) {
    console.log(1);
    return response.json();
  })
  .then(json => {
    let 지역 = json.find(s => s['시·도별(1)'] == '전국')
    console.log(지역)
    console.log(지역['1차 접종 누계'])
    console.log(지역['2차 접종 퍼센트'])
  })

//async await으로 바꾸기
async function 접종퍼센트(지역) {
  const response = await fetch(`https://raw.githubusercontent.com/paullabkorea/coronaVaccinationStatus/main/data/data.json`);
  const data = await (response.json());
  const 접종퍼센트 = data.find(s => s['시·도별(1)'] == 지역)['2차 접종 퍼센트'];
  console.log(접종퍼센트)
}
접종퍼센트('전국')

//이것만 알아두자
fetch('https://raw.githubusercontent.com/paullabkorea/coronaVaccinationStatus/main/data/data.json')
  .then(function (response) {
    console.log(1);
    return response.json();
  })
  .then(json => console.log(json))

//
const txt = fetch('https://reqres.in/api/products/3')
  .then(response => response.text())
  .then(text => console.log(text))

async function getImg() {
  const response = await fetch(`https://picsum.photos/200`);
  const blobImg = await (response.blob());
  console.log(blobImg);
}
getImg()
//
async function printImg() {
  const response = await fetch(`https://picsum.photos/200`);
  const blobImg = await (response.blob());

  //blob을 담을 img 태그를 만든다.
  const img = document.createElement('img');
  //html body에 위에서 만든 img 태그를 삽입한다.
  document.body.append(img);
  //img 태그의 주소를 설정한다.
  img.src = URL.createObjectURL(blobImg);
}
printImg()