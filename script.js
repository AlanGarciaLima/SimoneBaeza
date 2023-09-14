
$(document).ready(function(){
    $('.carousel').slick({
        autoplay: true,
        dots: true,
        arrows: false
    });
});

function abrirLightbox(imagem, descricao) {
    var lightbox = document.getElementById('lightbox');
    var lightboxImg = document.getElementById('lightbox-img');
    var lightboxCaption = document.getElementById('lightbox-caption');

    lightboxImg.src = imagem;
    lightboxCaption.innerHTML = descricao;
    lightbox.style.display = 'flex';
}

function fecharLightbox() {
    var lightbox = document.getElementById('lightbox');
    lightbox.style.display = 'none';
}

const whatsappIcon = document.querySelector('.whatsapp-icon');
whatsappIcon.addEventListener('click', () => {
  window.open('https://api.whatsapp.com/send?phone=5511997762313', '_blank');
});
