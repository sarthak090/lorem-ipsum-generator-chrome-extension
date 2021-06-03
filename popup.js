// Future JavaScript will go here

const generateBtn1 = document.getElementById("generate");
const optionSelcted = document.getElementById("optionSelcted");
const msg = document.getElementById("msg");
const quickBtn1 = document.getElementById("quick1");
const quickBtn = document.getElementById("quick");
const lengthInput = document.getElementById("length");
generateBtn1.addEventListener("click", async (e) => {
  e.preventDefault();

  let type = optionSelcted.value || "paragraph";
  let length = lengthInput.value || 2;
  const url = `http://asdfast.beobit.net/api/?type=${type}&length=${length}`;

  const textResp = await getLoremData(url);
  await copyToClipBoard(textResp.text);
});
const quickText1 = `Maurisd que ipsumma eratquis dapibus nisimor iam iquam. Faucib suscipit facilis posuered scum atein ecenas abitur mauris. Nislnam faucibus lus facili sduis facilis lum quamin. Ornareve uam uisque turpisn orciut sceleris feugiat lorem purusp. Uisque auctor sellus naeos convalli urient blandit que ent illa. Esent nisiinte afusce nean uada massacra liberos venenat liberoa. Quamsusp tudin ecenas dictumst lectusn ridicul rsed teger. Telluset scras egesta temporse nequesed tortorp fermen. Libero sapienv insuspen teger teger nequenu litora nibhphas. Integer leopelle metiam quamnunc tesque sapiendo.`;
const quickText = `Teger vallis loremin consec ullam elitpr purus iam vitaef eleifend. Lum consequa llam blandit nostra isque rosed orcivest ulum nulla. Miquis suscip bus telluss cras justov. Sodales loremin suspendi uamnam magnaqu leofusce morbi egesta ullam. Varius erdum nibhcras llus antenunc mauris felisq lacus ut iaculis. Arcucura lobortis cursus usce quam min sedinteg estmae sse lus. Nulla molestie lum iumsed vivamus senectus egestas. Diam tesque orci nunc lacinia nulla sellus primis. Iquam quam rproin tempor mollis ris enim. Liquam sed ut illa habitant eget. Esque himenaeo sellus nulla tcras consequa. Ellus lacusp quisut varius vitaenu faucibu unc. Suscipit eratquis orcisusp lectusa tesque orcivest metus suscip ulum sed. Lus ligula ipsumma metus sedinteg nascetur suscipit oin vitaenu. Cing rutrumnu liberofu faucibus arcu laoreetc msed pharetra liberos. Aesent llus dui pulvinar nean ligula.`;
const quick20 = `Natis eratetia quis potenti sse lacusp. Metusd potenti elemen quam auguesed tetiam sceler rrased lacini. Sce esent iaculi metusves min.`;
quickBtn.addEventListener("click", () => {
  copyToClipBoard(quickText);
  setTimeout(() => {
    msg.innerHTML = "";
  }, 3000);
});
quickBtn1.addEventListener("click", () => {
  copyToClipBoard(quickText1);
  setTimeout(() => {
    msg.innerHTML = "";
  }, 3000);
});
function copyToClipBoard(text) {
  window.navigator.clipboard
    .writeText(text)
    .then(() => (msg.innerHTML = "Copied To Clipboard"));
}

function getLoremData(url) {
  return fetch(url, {
    method: "GET",
  })
    .then((response) => response.json())
    .then((data) => data)
    .catch((err) => {
      console.error(err);
    });
}
