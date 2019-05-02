export class Corredor{
        constructor (){
            this.position=null;
            this.nombre=null;
        }
    
        setPosition(position){
            this.position=position;
        }
    
        getPosition(){
            return this.position;
        }
        setNombre(nombre){
            this.nombre=nombre;
        }
        getNombre(){
            return this.nombre;
        }
        mover(dado){
            position+=dado;
        }
}
    
    
