var DragonsImages = {
  Tohru: {human: "TohruBG.jfif",dragon: "Tohru_dragon_form.jpg",HumanPosition:"3%",DragonPosition:"0px 0px"},
  kanna: {human: "KannaBG.webp",dragon: "Kanna_dragon_form.jpg",HumanPosition:"30%",DragonPosition:"0px 0px"},
  Coatl: {human: "CoatlBG.webp",dragon: "Lucoa_dragon_form.jpg",HumanPosition:"0px 0px",DragonPosition:"0px 80%"},
  Fafnir: {human: "FafnirBG.webp",dragon: "Fafnir_dragon_form.jpg",HumanPosition:"0px 0px",DragonPosition:"0px 0px"},
  Elma: {human: "ElmaBG.webp",dragon: "Elma_dragon_form.jpg",HumanPosition:"0px 0px",DragonPosition:"0px 0px"},
  Ilulu: {human: "Ilulu.BG.webp",dragon: "Ilulu_dragon_form.jpg",HumanPosition:"25%",DragonPosition:"0px 60%"},
}

function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
  document.getElementById("main").style.marginLeft = "250px";
  document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  document.getElementById("main").style.marginLeft = "0";
  document.body.style.backgroundColor = "white";
}
var pageName = window.location.pathname.split("/").pop().split(".")[0];
console.log(pageName);

function changeForm(Dragon) {
  if (Dragon) {
    document.getElementById("FormIndicator").style.left = "130px";
    document.body.style.backgroundImage = `url('${DragonsImages[pageName].dragon}')`;
    document.body.style.backgroundPosition = DragonsImages[pageName].DragonPosition;
    console.log(document.body.style.backgroundImage);
  }
  else { 
    document.getElementById("FormIndicator").style.left = "-53px";
   document.body.style.backgroundImage = `url('${DragonsImages[pageName].human}')`;
    document.body.style.backgroundPosition = DragonsImages[pageName].HumanPosition;
    console.log(document.body.style.backgroundImage);
  }
}