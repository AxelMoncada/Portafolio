valores.js

    Numero = 40
    Texto = "Diego de granda"
    Bulliano = true , false 
    vacios= null , undefined 
    objetos= 
    array= {} []

Variables=
 var nombre = "Axel Moncada"

    // Declarar 
    var edad;
    // Inicializar
    edad = 30; 

    edad

    var elementos = ["computadores","celular","cocina"];
    var persona = {
        nombres: "diego",
        edad:30
    }

    persona;

//FUNCIONES

    //DECLARATIVAS
        function miFuncion() {
            return 3;
        }
        miFuncion();
        
    //EXPRECION 
        var miFuncion = function(){
            return a + b;
        }

        miFuncion();


        //if.js

        if (true) {
            console.log("Hola")
        }


        var edad = 18;

        if (edad === 18) {
           console.log(" Hey puedes votar es tu primera votacion");
        }else if ( edad > 18) {
            console.log("Puedes votar denuevo");
        }else {
            console.log("aun no puedes votar")
        }

        condition ? true : false ;

        var numero = 1;
        var resultado = numero === 1 ? "Si soy un uno" : "No no soy uno"; 


        var jugador = "papel";
        var cpu = "papel"
     
            if (jugador === "papel"){
                if(cpu === "papel"){
                console.log("Empate")
                 }else if (cpu === "tijeras"){
                console.log("perdiste")
                 }else {
                console.log("ganaste")
                  }
             } else if (jugador === "piedra"){
                if(cpu === "piedra"){
                    console.log("Empate")
                     }else if (cpu === "papel"){
                    console.log("perdiste")
                     }else {
                    console.log("ganaste")
                      }
             }else {
                if(cpu === "tijeras"){
                    console.log("Empate")
                     }else if (cpu === "piedra"){
                    console.log("perdiste")
                     }else {
                    console.log("ganaste")
                      }
             }

             var numero = 1 ; 

             switch (numero){
                 case 1 :
                     console.log("Soy uno");
                     break;
                 case 10 :
                     console.log("Soy un Diez");
                     break;
                default:
                    console.log("No soy nada")
             } 

             // DEFINO LAS VARIABLES DE LOS JUGADORES
             var jugador = "papel" ;
             var cpu = "papel";

             //COMIENZO A USAR CONDICIONAL SWITCH DEPENDIENDO DEL VALOR DEL CPU
         switch (cpu) {

                // Si el valor de cpu es papel, entra a esta condicional
             case "papel" :       
                switch (jugador){

                    //y aca hago las condicionas con el valor del jugador teniendo en cuenta que el cpu eligio el valor de arriba
                 case "papel" :
                    console.log("Empataste");
                  break

                  case "tijeras" :
                    console.log("Ganaste");
                  break

                  case "piedra" :
                    console.log("Perdiste");
                  break
                }
            break
             // Si el valor de cpu es tijeras, entra a esta condicional

             case "tijeras" :       
                 switch (jugador){
                    
               case "papel" :
                   console.log("Perdiste");
               break

               case "tijeras" :
                   console.log("Empataste");
               break

               case "piedra" :
                   console.log("Ganaste");
               break
            } 
            break
            // Si el valor de cpu es piedra, entra a esta condicional

            case "piedra" :       
            switch (jugador){

               case "papel" :
                   console.log("Ganaste");
               break

               case "tijeras" :
                   console.log("Perdiste");
               break

               case "piedra" :
                   console.log("Empataste");
               break
            } 
           break; }
        

           // arrays  []
           
           var frutas = ["Manzana","Pera","guayaba","platano","cereza","mora"];
            console.log(frutas)  ;           

            //con push agrego elementos 
            //y con pop elimino elementos

            // unshift agrega al perimer campo
            // shift eliminas el primer campo

            //Loops
            var estudiantes = ["Maria","Sergio","Rosa","Daniel"];

            function SaludarEstudiantes(estudiante){
                 console.log(`Hola, ${estudiante}`)
            }
             
            for(var i = 0; i < estudiantes.length; i++){
                SaludarEstudiantes(estudiantes[i])
            }

            //Loop 2
            var estudiantes = ["Maria","Sergio","Rosa","Daniel"];

            function SaludarEstudiantes(estudiante){
                 console.log(`Hola, ${estudiante}`)
            }
             
            for(var estudiante of estudiante){
                SaludarEstudiantes(estudiante);
            }

            //LOOP WHILE 
            var estudiantes = ["Maria","Sergio","Rosa","Daniel"];

            function saludarestudiantes(estudiante){
                console.log('Hola, ${estudiante}');
            }
            while(estudiantes.length > 0 ){
                var estudiante = estudiante.shift();
                SaludarEstudiantes(estudiante);

            }
 
            //OBJETOS  con un . u la plabara clave trae ese valor
                var miAuto = {
                    marca: "Toyota",
                    modelo: "Corolla",
                    annio: 2020,
                    detalleDelAuto: function(){
                        console.log('Auto ${this.modelo} ${this.annio}')
                    }
                };
                


// FUNCION CONTRUCTORA
function auto (marca,modelo,annio){  
    this.marca = marca;
    this.modelo = modelo;
    this.annio = annio;
 }

 var AutoNuevo = new auto("Tesla","Model 3 ", 2020);

 var marca = [
    "Abarth",
    "Alfa Romeo",
    "Aston Martin",
    "Audi",
    "Bentley",
    "BMW",	
   "Cadillac",
    "Caterham",
    "Chevrolet",
    "Citroen",
    "Dacia",
    "Ferrari",
    "Fiat",
    "Ford",
    "Honda",
    "Infiniti",
    "Isuzu",
    "Iveco",
    "Jaguar"   	 	 
]

var modelo = [
    "C-Max",
    "Fiesta",
    "Focus",
    "Mondeo",
    "Ka",
    "S-MA",
   " B-MAX",
    "Grand C-Max",
    "Tourneo Custom",
    "Kuga",
    "Galaxy",
    "Grand Tourneo Connect",
    "Tourneo Connect",
    "EcoSport",
    "Tourneo Courier",
    "Mustang",
    "Transit Connect",
    "Edge",
    "Ka+"
]

var annio = [
    "1988",
    "1989",
    "1978",
    "1989",
    "1928",
    "1989",
    "1968",
    "1989",
    "1888",
    "1989",
    "1288",
    "1989",
    "1938",
    "1989",
    "1988",
    "1999",
    "1983",
    "1989",
    "1918"
]

function auto(marca,modelo,annio){
    this.marca = marca ;
    this.modelo = modelo ;
    this.annio = annio ;
}

for(var i = 0; marca.length > i && modelo.length > i && annio.length >i; i++ ){
    var nuevoAuto = new auto (marca[i],modelo[i],annio[i]);
    console.log(nuevoAuto)

}


var articulos = [ 
    {nombre: "bici", costo: 3000},
    {nombre: "tv", costo: 2500},
    {nombre: "libro", costo: 320},
    {nombre: "celular", costo: 10000},
    {nombre: "laptop", costo: 20000},
    {nombre: "teclado", costo: 500},
    {nombre: "audifonos", costo: 1700}
];

 // filter y map 
 // find ()