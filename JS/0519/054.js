const parent = document.querySelector('.parent');
const targetImg = parent.querySelector('.figImg');
const targetTxt = parent.querySelector('.figCap'); //돔최적화를 위해 parent로 변경

targetImg.setAttribute('src', "https://file.mk.co.kr/meet/neds/2021/07/image_readtop_2021_654175_16256093474708254.jpg");

targetTxt.textContent = '유재석씨가 수상식에서 환하게 웃고있다.'

const parentEl = document.querySelector('body');
const frag = document.createDocumentFragment();


for (let i = 0; i < 10; i++) {
    const article = document.createElement('article');
    article.innerHTML = `<figure>
    <img class="figImg"
        src="https://pds.joongang.co.kr/news/component/htmlphoto_mmdata/202112/13/e4725896-2596-44f0-8b95-ab3faaa76d7d.jpg"
        alt="">
    <figcaption class="figCap">
        유재석씨가 코로나에 돌파 감염되었다는 소식입니다.
    </figcaption>
</figure>`;
    frag.appendChild(article);
    // parentEl.appendChild(article);

}

parentEl.appendChild(frag);