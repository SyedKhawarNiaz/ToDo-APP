"use strict";
let user_input = document.querySelector("#input-user");
let btn = document.querySelector(".submit-btn");
let result = document.querySelector(".result");
btn.addEventListener("click", (e) => {
  e.preventDefault();
  if (user_input.value == "") {
    alert("Opps! Please Enter Task");
  } else {
    let neweliment = document.createElement("ul");
    neweliment.innerHTML = `${user_input.value} <i class="fa-solid fa-trash"></i>`;
    result.appendChild(neweliment);
    user_input.value = "";
    //first method to remove
    // neweliment.addEventListener("click", (e) => {
    //   if (e.target.classList.contains("fa-trash")) {
    //     e.target.parentElement.remove();
    //   }
    // });

    // second method to remove
    // neweliment.querySelector("i").addEventListener("click", () => {
    //   neweliment.remove();
    // });

    neweliment.addEventListener("click", (e) => {
      if (e.target.classList.contains("fa-solid")) {
        e.target.parentElement.remove();
      }
    });
  }
});
