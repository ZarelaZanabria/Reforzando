let arr = [' Brasil', 'Chile', 'México', 'Perú'];


const hijos = document.querySelectorAll('div.container>button.btnHijo'); 



for (const unHijo of hijos) {
  unHijo.addEventListener('click', (evt)=>{
    let hijo = evt.target;
    if(hijo.innerText=='Primero'){
      alert(arr[0])

    }
    if(hijo.innerText=='Segundo'){
      alert(arr[1])

    }
    if(hijo.innerText=='Tercero'){
      alert(arr[2])

    }
    if(hijo.innerText=='Cuarto'){
      alert(arr[3])

    }
    /* console.log('se hizo click en', hijo); */
    console.log('Texto del enlace:', hijo.innerText); 
    
  });
  
}



