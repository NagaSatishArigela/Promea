const facebookBtn=document.querySelector(".facebook-btn"),twitterBtn=document.querySelector(".twitter-btn"),whatsappBtn=document.querySelector(".whatsapp-btn");function init(){let t=encodeURI(document.location.href),e=encodeURI(document.title);facebookBtn.setAttribute("href",`https://www.facebook.com/sharer.php?u=${t}`),whatsappBtn.setAttribute("href",`https://api.whatsapp.com/send?text=${e} ${t}`),twitterBtn.setAttribute("href",`https://twitter.com/share?url=${t}&text=${e}&via=[via]&hashtags=PromeaLtd`)}init();