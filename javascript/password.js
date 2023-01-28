const btn = document.getElementById("btn");
const input = document.getElementById("input");
const copyEl = document.querySelector(".fa-copy");
const view = document.querySelector(".view");
const message = document.querySelector(".div-box");
const savePassword = document.getElementById("save");
const url = document.getElementById("url");
const user = document.getElementById("user");
const list = document.getElementById("list");
const h1 = document.querySelector("h1");

console.log(input);

btn.addEventListener("click", function () {
  createPassword();
});
console.log(btn);

function createPassword() {
  if (!url.value && !user.value) {
    h1.classList.add("block");
    setTimeout(() => {
      h1.classList.remove("block");
    }, 2000);
    url.classList.add("add");
    user.classList.add("add");
    input.value = "";
  } else {
    h1.classList.remove("block");
    url.classList.remove("add");
    user.classList.remove("add");
    const codeValue =
      "ABCDEFGHIJKMLNOPQRSTUVWXYZ0123456789abcdefghijkmnopqrstuvwxyz";
    const codeLength = 9;
    let password = "";
    for (let i = 0; i < codeLength; i++) {
      let random = Math.floor(Math.random() * codeValue.length);
      password += codeValue.substring(random, random + 1);
      input.value = password;
    }
  }
}

copyEl.addEventListener("click", function () {
  copyText();
});
function copyText() {
  input.select();
  input.setSelectionRange(0, 9999);
  navigator.clipboard.writeText(input.value);
  message.innerHTML = `${input.value} password copied!`;
  if (input.value) message.classList.add("active");

  setTimeout(() => {
    message.classList.remove("active");
  }, 2000);
}

savePassword.addEventListener("click", () => {
  const obj = {
    website: url.value,
    userName: user.value,
    password: input.value,
  };

  let myObj = JSON.stringify(obj);

  localStorage.setItem("store", myObj);

  let string = JSON.parse(localStorage.getItem("store"));
  console.log(string.website);
});

view.addEventListener("click", function () {
  localStorage.getItem("store");
  const open = JSON.parse(localStorage.getItem("store"));
  console.log(open);

  list.innerHTML = `URL:  ${open.website} <br>
  USERNAME:  ${open.userName} </br>
   PASSWORD:  ${open.password}`;
});
