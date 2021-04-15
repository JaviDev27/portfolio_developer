const userIdEmail = "user_Po7ItWHY653wWASNZDZJZ";

//========================
const NAME_CV = "CV_Javier_Manobanda";
const URL_CV =
  "https://drive.google.com/file/d/1NAUR5L3rdA4A8-pJubRYgOhiqPUQd7J3/view?usp=sharing";
const btn_download_cv = document.getElementById("download_cv");

btn_download_cv.onclick = downloadCV;

function downloadCV(e) {
  window.open(URL_CV, "_blanck");
  console.log(e);
}
//=================
