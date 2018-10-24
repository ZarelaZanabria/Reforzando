let arr = [' Brasil', 'Chile', 'México', 'Perú'];

/* const contPadre = document.getElementsByClassName('container');
const array2D = new Array(); 
/*  */

const hijos = document.querySelectorAll('div.container>button.btnHijo'); 

/* paisB.addEventListener('click',function mensaje () {
  for (let i = 0; i < arr.length; i++) {

    const elemento= arr[i];
    alert(elemento);
  }
  
}); */

for (const unHijo of hijos) {
  unHijo.addEventListener('click', (evt)=>{
    let hijo = evt.target;
    console.log('se hizo click en', hijo);
    console.log('Texto del enlace:', hijo.innerText);
    
  });
  
}



