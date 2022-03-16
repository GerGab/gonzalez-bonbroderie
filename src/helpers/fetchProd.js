const productos = [
    {"id":"13001","nombre":"HILOS SUMMER","precio":1000,"stock":5,"categoria":"INSUMOS","descripcion":"Combo de hilos Mouliné marca Anchor, diferentes opciones de tonos para las distintas épocas del año.","image":"../images/Shop/HilosVerano.jpeg"},
    {"id":"13002","nombre":"HILOS WINTER","precio":1000,"stock":5,"categoria":"INSUMOS","descripcion":"Combo de hilos Mouliné marca Anchor, diferentes opciones de tonos para las distintas épocas del año.","image":"../images/Shop/HilosInvierno.jpg"},
    {"id":"13003","nombre":"HILOS SPRING","precio":1000,"stock":5,"categoria":"INSUMOS","descripcion":"Combo de hilos Mouliné marca Anchor, diferentes opciones de tonos para las distintas épocas del año.","image":"../images/Shop/HilosPrimavera.jpeg"},
    {"id":"13004","nombre":"HILOS AUTUMN","precio":1000,"stock":5,"categoria":"INSUMOS","descripcion":"Combo de hilos Mouliné marca Anchor, diferentes opciones de tonos para las distintas épocas del año.","image":"../images/Shop/HilosOtoño.jpeg"},
    {"id":"12001","nombre":"TELAS","precio":100,"stock":10,"categoria":"INSUMOS","descripcion":"Recorte de tela lienzo color crudo 25x25cm lista para colocar en bastidor y bordar.","image":"../images/Shop/Telas.jpg"},
    {"id":"11001","nombre":"TIJERAS","precio":1200,"stock":5,"categoria":"INSUMOS","descripcion":"Tijera con forma de cigüeña de acero inoxidable, ideal para cortar tela e hilos.","image":"../images/Shop/Tijera.jpeg"},
    {"id":"14001","nombre":"BASTIDOR BAMBÚ","precio":500,"stock":20,"categoria":"INSUMOS","descripcion":"Bastidor de madera de bambú para bordar. 15cm de diámetro, con tuerca de metal ajustable para tensar la tela.","image":"../images/Shop/BastidorBambu.jpeg"},
    {"id":"15001","nombre":"BASTIDOR FLEXI","precio":750,"stock":15,"categoria":"INSUMOS","descripcion":"Bastidor de plástico flexible simil madera para bordar. 15cm de diámetro, con hebilla arriba ideal para colgar. ","image":"../images/Shop/BastidorFlexi.jpeg"},
    {"id":"16001","nombre":"BORDADO SWEATERS","precio":3500,"stock":3,"categoria":"BORDADOS","descripcion":"Modelos de sweatercitos invernales bordados sobre tela lienzo color crudo, en bastidor ovalado de bambú de 15cm de alto. Cada bordado se encuentra hecho a mano con mucha dedicación por lo que puede llegar a tardar unos 10 días hábiles.","image":"../images/Shop/BordadoSWEATERS.jpg"},
    {"id":"16002","nombre":"BORDADO MARGARITAS","precio":3500,"stock":3,"categoria":"BORDADOS","descripcion":"Flores margaritas primaverales bordadas sobre tela lienzo color crudo, en bastidor flexi de 15cm. Cada bordado se encuentra hecho a mano con mucha dedicación por lo que puede llegar a tardar unos 10 días hábiles.","image":"../images/Shop/16002.jpg"},
    {"id":"16003","nombre":"BORDADO FLORES","precio":4000,"stock":3,"categoria":"BORDADOS","descripcion":"Colorida combinación de flores bordadas sobre tela lienzo color crudo, en bastidor flexi de 15cm. Cada bordado se encuentra hecho a mano con mucha dedicación por lo que puede llegar a tardar unos 10 días hábiles.","image":"../images/Shop/16003.jpg"},
    {"id":"17001","nombre":"KIT FLORES","precio":2500,"stock":5,"categoria":"KIT BORDADO","descripcion":"Kit de Bordado con todo lo necesario para ponerte manos a la obra: Tela lienzo color crudo, hilos mouliné, aguja y patrón de bordado, junto con la guía de puntadas. También tendrás acceso a un video tutorial para que vayas haciendo el paso a paso. Nivel: Intermedio.","image":"../images/Shop/17001.jpg"},
    {"id":"17002","nombre":"KIT FRASE","precio":2500,"stock":5,"categoria":"KIT BORDADO","descripcion":"Kit de Bordado con todo lo necesario para ponerte manos a la obra: Tela lienzo color crudo, hilos mouliné, aguja y patrón de bordado, junto con la guía de puntadas. También tendrás acceso a un video tutorial para que vayas haciendo el paso a paso. Nivel: Principiante.","image":"../images/Shop/17002.jpg"}
]



export const getFetch = new Promise((resolve,reject) => {
     setTimeout(()=> 
        {resolve(productos)},2500)
})