export class Dado{
    constructor (){
        this.lados=[1,1,-1,-1,2,2,2,2,3,3]
    }

    lanzar (laods){
        return lados[Math.floor(Math.random()*(11-1))+1]
    }
    getLados(){
        return this.lados;
    }
}
