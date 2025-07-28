//Event: User clicks the next btn
//Target:       next/prev btn
//Type:         click
//Handler:      go_next/prev

let img_element = document.querySelector("#img");

let img_urls = ["1.jpg", "2.jpg", "3.jpg", "4.jpg"];
let current_img_index = 0;

let next_btn = document.querySelector(".next-btn");
next_btn.addEventListener("click", go_next);
let prev_btn = document.querySelector(".prev-btn");
prev_btn.addEventListener("click", go_prev);

function go_next() {
  if (current_img_index < img_urls.length - 1) {
    current_img_index += 1;
  }
  img_element.src = img_urls[current_img_index];
}
function go_prev() {
  if (current_img_index > 0) {
    current_img_index -= 1;
  }
  img_element.src = img_urls[current_img_index];
}
