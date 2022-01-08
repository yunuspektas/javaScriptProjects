var btnBold = document.getElementById("bold");
var btnItalik = document.getElementById("italik");
var btnUnderline = document.getElementById("underline");
var btnRed = document.getElementById("color");

// fonksiyon içideki execCommand() ların çalışması için
// text in bulunduğu div tagına  "contenteditable="true"
// eklenmesi lazım

btnBold.addEventListener("click", function () {
  document.execCommand("bold", false, null);
});

btnUnderline.addEventListener("click", function () {
  document.execCommand("underline", false, null);
});

btnItalik.addEventListener("click", function () {
  document.execCommand("italic", false, null);
});

btnRed.addEventListener("click", function () {
  document.execCommand("foreColor", false, "ff0000");
});
