let kittens = [0, 1, 2];

function loadKittens(){
  const app = document.getElementById("app");
  app.innerHTML = '';
  kittens.forEach(kitten => {
    app.innerHTML += `
    <div class="kitten" id="kitten_${kitten}">
      <img src="https://placekitten.com/200/150?image=${kitten}" height="150" width="200" alt="gatinho fofo"/>
      <i class="fa-solid fa-circle-xmark" onclick="actionRemoveKitten(${kitten})"></i>
      <span>${kitten}</span>
    </div>`
  });
}

function actionRemoveKitten(index){
  kittens = kittens.filter(k => k != index);
  loadKittens();
}

function actionAddKitten(){
  const buttonAddKitten = document.getElementById("add-kitten");
  buttonAddKitten.addEventListener('click', event => {
    kittens.push(kittens.length);
    loadKittens();
  });
}

function changeFlexPoperty(key, value){
  const app = document.getElementById("app");
  app.style[key] = value;

  loadCode();
}

function loadCode(){
  const app = document.getElementById("app");
  const code = document.getElementById('code');
  code.innerHTML = `
    #app {
      display: flex;
      ${app.getAttribute('style').split(';').join(';<br/>     ')}}
  `;
}

function toggleAside(){
  const aside = document.getElementById('aside');
  const buttonToggleAside = document.getElementById('button-toggle-aside');
  const icon = buttonToggleAside.querySelector("i");
  buttonToggleAside.addEventListener('click', event => {
    aside.classList.toggle('hidden-aside');
    icon.classList.toggle('fa-angles-right');
    icon.classList.toggle('fa-angles-left');
  });
}

(() => {
  loadKittens();
  actionAddKitten();
  toggleAside();
})();