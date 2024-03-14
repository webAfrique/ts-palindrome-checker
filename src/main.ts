const header = document.querySelector("h1") as HTMLHeadingElement;
const input = document.querySelector("input") as HTMLInputElement;
const submitBtn = document.querySelector(".submit-btn") as HTMLButtonElement;
const svgTrue = document.querySelector(".svg-true") as HTMLDivElement;
const svgFalse = document.querySelector(".svg-false") as HTMLDivElement;
let word = "";

function isPalindrome(text: string): boolean {
  let tmp = text;
  const reversed = tmp.split("").reverse().join("");
  return text.toLowerCase() === reversed.toLowerCase();
}

function submitHandler() {
  word = input.value;
  
  if (isPalindrome(word)) {
    svgTrue.style.display = "block";
    svgFalse.style.display = "none";
  } else {
    svgFalse.style.display = "block";
    svgTrue.style.display = "none";
  }
}

function inputHandler(event: Event) {
  const target = event.target as HTMLInputElement;
  const text = target.value;
  header.textContent = `is ${text} a palindrome?`;
  }

input.addEventListener("input", inputHandler);
input.addEventListener("focus", () => {
  svgFalse.style.display = "none";
  svgTrue.style.display = "none";
  });
submitBtn.addEventListener("click", submitHandler);
