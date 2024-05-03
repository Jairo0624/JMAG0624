for(let x=0; x<5; x++){
    if(x==2) //Omite el 2 pero continua lo demas
        continue;
    console.log(x)
}

    let a = 10;
    a = a + 5;
    a +=5;

    let x =10;
    x **= 2; //Eleva a la 2
    console.log(x);

    // tipo fecha
    const fecha = new Date();
    console.log(fecha);

    function myFunction(p1=3,p2=5){
        return p1 * p2
    }

    console.log(myFunction(5,6));
    console.log(myFunction())
    console.log(myFunction(5))
    console.log(myFunction)

    let otraFuncion =(a,b) => a * b //Sin ;
    
    
    console.log(otraFuncion(5,11));

    function myFunction2(p1,p2){
        return p1 * p2
    }

    let otraFuncion2 = (a,b) => {
        return a * b;
    }

    console.log(otraFuncion2(5,11));

    //Funcion autoejecutable
    //Funcion anonima
    (() =>
        console.log("Esta es una funcion anónima autoejecutable")
    )();   

    let personaje = {
        nombre: "Colt",
        arma: "Pistola",
        Id: 3,
        disparar: function() { 
           return this.nombre + " hace prrr " + this.arma + this.Id
        }
    }

    console.log(personaje.disparar());


    