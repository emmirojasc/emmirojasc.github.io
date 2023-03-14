let datos=document.getElementById('contacto')
let texto=document.getElementById('contenedor-texto')
let email=document.getElementById('correo')
let tel=document.getElementById('phone')
let work=document.getElementById('trabajos')
datos.addEventListener('click',()=>{
texto.innerHTML=document.createElement="<h3><u>INFORMACIÓN PERSONAL</u></h3><li><b>Nombre:</b> Guillermo Héctor Francella</li><li><b>Nacionalidad:</b> Argentina</li><li><b>Provincia:</b> Buenos Aires</li> <li><b>Fecha de nacimiento:</b>14/02/1955(68 años)</li><li><b>Estado civil:</b> Casado</li><li><b>Hijos:</b> 3</li>"
})

email.addEventListener('click',()=>{
    texto.innerHTML=document.createElement="<h3><u>Correo Electrónico:</u></h3><p>guillermof68@outlook.com.ar</p>"
})

tel.addEventListener('click',()=>{
    texto.innerHTML=document.createElement="<h3><u>Teléfono de Contacto:</u></h3><p>011 1234-5678</p>"
})

work.addEventListener('click',()=>{
    texto.innerHTML=document.createElement="<h3><u>Acerca de Mí:</u></h3><p> Soy un actor, comediante, humorista y director argentino de teatro, cine y televisión. Algunas de las  películas en las cuales trabaje fueron :Un argentino en Nueva York, Rudo y Cursi, El secreto de sus ojos (ganadora del premio Óscar a la Mejor película de habla no inglesa),​Corazón de León, El robo del siglo y El Clan.Me concideran como uno de los actores más influyentes de mi país.​ He trabajado en series y programas de televisión como Brigada Cola, La familia Benvenuto, Poné a Francella y Casados con hijos.</p>"
})