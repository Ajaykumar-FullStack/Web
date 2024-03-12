let form = document.querySelector("form");
let image = document.querySelector("img");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let input = document.querySelector("#qr").value;

  let qrurl = `https://chart.googleapis.com/chart?cht=qr&chs=400x400&chl=${input}`;
  //   console.log(input);
  image.src = qrurl;
});
