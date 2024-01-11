 const imagenes = document.querySelectorAll(".img-galeria");
 const imagenesLight = document.querySelector(".agregar-imagen");
 const contenedorLight = document.querySelector(".imagen-light");
 const hamburgesa1 = document.querySelector(".hamburgesa");

 imagenes.forEach(imagen=>{
    imagen.addEventListener("click",()=>{
        aparecerImagen(imagen.getAttribute("src"));
        
    })
 });

 contenedorLight.addEventListener("click",(e)=>{
    contenedorLight.classList.toggle("show");
    imagenesLight.classList.toggle("showImage");
    hamburgesa1.style.opacity = "1";
 })

 const aparecerImagen = (imagen) =>{
    imagenesLight.src = imagen;
    contenedorLight.classList.toggle("show");
    imagenesLight.classList.toggle("showImage");
    hamburgesa1.style.opacity = "0";
 }