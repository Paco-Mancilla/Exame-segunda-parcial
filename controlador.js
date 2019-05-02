import {Corredor} from './corredor.js';
import {Dado} from './dado.js';

var c1=new Corredor;
var c2=new Corredor;
var dado=new Dado;

function iniciarCarrera(){
c1.setNombre=document.getElementById(1).value;
c2.setNombre=document.getElementById(2).value;
console.log("Inicia carrera!");
console.log("Turno "+0+" ,Corredor 1:"+c1.getPosition()+" ,Corredor 2:"+c2.getPosition());
do{
    console.log("------------------------------");
    let ld=dado.lanzar();
    if(y&2!=0){
        console.log("Turno"+ y + ", Corredor1: tiro"+ ld);
        c1.mover(ld);
        
            if(c1.getPosition()<100){
                console.log("Nueva posicion: "+c1.getPosition());  
            }
            else{
               return console.log("¡Felicidades el corredor"+c1.getNombre()+"has ganado!");
            }
        
    }
    else{
        console.log("Turno"+y+", Corredor2: tiro"+ ld);
        c2.mover(ld);
            if(p2.getPosition()<100){
                console.log("Nueva posicion: "+c2.getPosition());
            }
            else{
              return console.log("¡Felicidades el corredor"+c2.getNombre()+"has ganado!");
            }
    }
    y+=1;
}while(c1.getPosition()<100 && c2.getPosition()<100)

}

var carrera= new iniciarCarrera;
console.log(carrera);