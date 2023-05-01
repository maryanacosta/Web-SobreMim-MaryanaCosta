const target2 = document.querySelectorAll('[data-menu]');
const backgroundClass2 = 'animate';


function backgroundScroll(){
  const windowTop = window.pageYOffset - 5;
  target2.forEach(function(element){
    if((windowTop) > element.offsetTop){
      element.classList.add(backgroundClass2);
      document.getElementById('menuham').classList.add('corzinha');
      document.getElementById('menuham').classList.remove('corzinha2');
    }else{
      element.classList.remove(backgroundClass2);
      document.getElementById('menuham').classList.add('corzinha');
      document.getElementById('menuham').classList.remove('corzinha2');
    }
  })
}

backgroundScroll();

if(target2.length){
  window.addEventListener('scroll', function(){
    backgroundScroll();
  })
}




////////////////////////////////MENU MOBILE//////////////////////////////////////////////

function button(){
    document.getElementById("demo").classList.add('slide');
  }

  function fecharMenu(){
    document.getElementById("demo").classList.remove('slide');
  }


///////////////////////////////////Imagens do carrossel////////////////////////////////////////////

$('#carouselExampleIndicators').on('slid.bs.carousel', function () {
  var elementoA = document.getElementById('activecar');
  if(elementoA.className.indexOf('active') != -1){
    $('#image1').addClass("animeimage");
    $('#image2').addClass("animeimage");
    $('#image3').addClass("animeimage");
  }else {
    $('#image1').removeClass("animeimage");
    $('#image2').removeClass("animeimage");
    $('#image3').removeClass("animeimage");
  }
});

/////////////////////////////////ANIMATION PARTE PRETA///////////////////////////////////////

const targetMenuPreto = document.querySelectorAll('[data-menu]');
const backgroundClass3 = 'animate22';

function menuPretoScroll(){
  const windowTop3 = window.pageYOffset -  $("#partepreta").offset().top + 150;
  targetMenuPreto.forEach(function(element){
    if((windowTop3) > element.offsetTop){
      element.classList.add(backgroundClass3);
      element.classList.remove('animate');
      document.getElementById('menuzinho').classList.remove('aparecer');
      document.getElementById('menuzinho').classList.add('mudationcolormenu');
      document.getElementById('menuham').classList.add('corzinha');
      document.getElementById('menuham').classList.remove('corzinha2');
    }else{
      element.classList.remove(backgroundClass3);
      document.getElementById('menuzinho').classList.add('aparecer');
      document.getElementById('menuzinho').classList.remove('mudationcolormenu');
      document.getElementById('menuham').classList.remove('corzinha');
      document.getElementById('menuham').classList.add('corzinha2');
    }
  })
}

menuPretoScroll();

if(targetMenuPreto.length){
  window.addEventListener('scroll', function(){
    menuPretoScroll();
  })
}


///////////////////////////

const targetMenuOtherColor = document.querySelectorAll('.cordomenu');
const backgroundClasMenuOhterColor = 'corpreta';

function MenuOtherColor(){
  const windowTop5 = window.pageYOffset -  $("#partepreta").offset().top + 150;
  targetMenuOtherColor.forEach(function(element03){
    if((windowTop5) > element03.offsetTop){
      document.getElementById('menuzada').classList.remove('cordomenu');
      element03.classList.add(backgroundClasMenuOhterColor);
    }else{
      element03.classList.remove(backgroundClasMenuOhterColor);
      document.getElementById('menuzada').classList.add('cordomenu');
    }
  })
}

MenuOtherColor();

if(backgroundClasMenuOhterColor.length){
  window.addEventListener('scroll', function(){
    MenuOtherColor();
  })
}

//////////////////////

const targetMenucinza = document.querySelectorAll('.cordomenu2');
const backgroudPreto = 'corpreta';

function MenucorPreta(){
  const windowTop6 = window.pageYOffset -  $("#partepreta2").offset().top + 150;
  targetMenucinza.forEach(function(element04){
    if((windowTop6) > element04.offsetTop){
      document.getElementById('menuzada2').classList.remove('cordomenu2');
      element04.classList.add(backgroudPreto);
    }else{
      element04.classList.remove(backgroudPreto);
      document.getElementById('menuzada2').classList.add('cordomenu2');
    }
  })
}

MenucorPreta();

if(targetMenucinza.length){
  window.addEventListener('scroll', function(){
    MenucorPreta();
  })
}

////////////////////////////////////ABRIR PÁGINAS//////////////////////////////////


function abrirArticles(){
  window.location.href = "./artigos.php";
}

function abrirAbout(){
  window.location.href = "./about.php";
}

function abrirCollection(){
  window.location.href = "./colecao_fem.php";
}






function abirirArtigos(){
  window.location.href = "./artigos.php";
}

function abirirSobre(){
  window.location.href = "./about.php";
}

function abrirColecao(){
  window.location.href = "./colecao_fem.php";
}

function abrirColecaoo(){
  window.location.href = "./colecao_masc.php";
}

function fazerLogin(){
  window.location.href = "./login.php";
}

function fazerLogout(){
  window.location.href = "./logout.php";
}


function abrirSingin(){
  window.location.href = "./login.php";
}
//
// function cadastrarAdmin(){
//   window.location.href = "./cadastrar_admin.php";
// }
//
// function cadastrarLivro(){
//   window.location.href = "./cadastrar_livro.php";
// }
//
// function adminarea(){
//   window.location.href = "./admin.php";
// }
//
// function logoutAdmin(){
//   window.location.href = "./logout_admin.php";
// }


//////////////////////////////////////////////////////////////////////////////////

function lusiadashover(){
  document.getElementById('lusiadas').classList.add('hover_image_animate');
}

function lusiadasouthover(){
  document.getElementById('lusiadas').classList.remove('hover_image_animate');
}

function exilioouthover(){
  document.getElementById('exilio').classList.remove('hover_image_animate');
}

function exiliohover(){
  document.getElementById('exilio').classList.add('hover_image_animate');
}



////////////////////////////////////////////////////////////////////////////////////////




//---------------------------------4--------------------------------------------------//

function habilitarInput4(){
  document.getElementById('inputprofile4').classList.remove('input_profile');
  document.getElementById('inputprofile4').classList.add('input_profile_animate');
  document.getElementById('editarprofile4').classList.add('editarprofile_animate');
  document.getElementById('editarprofile4').classList.remove('editarprofile');
  document.getElementById('pessoa_profile4').classList.add('pessoa_profile_animate');
  document.getElementById('pessoa_profile4').classList.remove('pessoa_profile');
}

function salvarInput4(){
  document.getElementById('inputprofile4').classList.add('input_profile');
  document.getElementById('inputprofile4').classList.remove('input_profile_animate');
  document.getElementById('editarprofile4').classList.remove('editarprofile_animate');
  document.getElementById('editarprofile4').classList.add('editarprofile');
  document.getElementById('pessoa_profile4').classList.remove('pessoa_profile_animate');
  document.getElementById('pessoa_profile4').classList.add('pessoa_profile');
}

function cancelarInput4(){
  document.getElementById('inputprofile4').classList.add('input_profile');
  document.getElementById('inputprofile4').classList.remove('input_profile_animate');
  document.getElementById('editarprofile4').classList.remove('editarprofile_animate');
  document.getElementById('editarprofile4').classList.add('editarprofile');
  document.getElementById('pessoa_profile4').classList.remove('pessoa_profile_animate');
  document.getElementById('pessoa_profile4').classList.add('pessoa_profile');
}

//////////////////////////////////////////////////////////////////////////////////////////////

function aparecerinfo(){
  document.getElementById('imagem_book').classList.remove('imagem_book');
  document.getElementById('imagem_book').classList.add('imagem_book_animate');
  document.getElementById('info_book').classList.remove('info_book');
  document.getElementById('info_book').classList.add('info_book_animate');
}

function sumirinfo(){
  document.getElementById('imagem_book').classList.add('imagem_book');
  document.getElementById('imagem_book').classList.remove('imagem_book_animate');
  document.getElementById('info_book').classList.add('info_book');
  document.getElementById('info_book').classList.remove('info_book_animate');
}

////////////////////2///////////////////////

function aparecerinfo2(){
  document.getElementById('imagem_book2').classList.remove('imagem_book');
  document.getElementById('imagem_book2').classList.add('imagem_book_animate');
  document.getElementById('info_book2').classList.remove('info_book');
  document.getElementById('info_book2').classList.add('info_book_animate');
}

function sumirinfo2(){
  document.getElementById('imagem_book2').classList.add('imagem_book');
  document.getElementById('imagem_book2').classList.remove('imagem_book_animate');
  document.getElementById('info_book2').classList.add('info_book');
  document.getElementById('info_book2').classList.remove('info_book_animate');
}

////////////////////3///////////////////////

function aparecerinfo3(){
  document.getElementById('imagem_book3').classList.remove('imagem_book');
  document.getElementById('imagem_book3').classList.add('imagem_book_animate');
  document.getElementById('info_book3').classList.remove('info_book');
  document.getElementById('info_book3').classList.add('info_book_animate');
}

function sumirinfo3(){
  document.getElementById('imagem_book3').classList.add('imagem_book');
  document.getElementById('imagem_book3').classList.remove('imagem_book_animate');
  document.getElementById('info_book3').classList.add('info_book');
  document.getElementById('info_book3').classList.remove('info_book_animate');
}

////////////////////4///////////////////////

function aparecerinfo4(){
  document.getElementById('imagem_book4').classList.remove('imagem_book');
  document.getElementById('imagem_book4').classList.add('imagem_book_animate');
  document.getElementById('info_book4').classList.remove('info_book');
  document.getElementById('info_book4').classList.add('info_book_animate');
}

function sumirinfo4(){
  document.getElementById('imagem_book4').classList.add('imagem_book');
  document.getElementById('imagem_book4').classList.remove('imagem_book_animate');
  document.getElementById('info_book4').classList.add('info_book');
  document.getElementById('info_book4').classList.remove('info_book_animate');
}

////////////////////2///////////////////////

function aparecerinfo5(){
  document.getElementById('imagem_book5').classList.remove('imagem_book');
  document.getElementById('imagem_book5').classList.add('imagem_book_animate');
  document.getElementById('info_book5').classList.remove('info_book');
  document.getElementById('info_book5').classList.add('info_book_animate');
}

function sumirinfo5(){
  document.getElementById('imagem_book5').classList.add('imagem_book');
  document.getElementById('imagem_book5').classList.remove('imagem_book_animate');
  document.getElementById('info_book5').classList.add('info_book');
  document.getElementById('info_book5').classList.remove('info_book_animate');
}
