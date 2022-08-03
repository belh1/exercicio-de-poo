import IPrototype from "../Prototype/IPrototype";
import CarPrototype from "./CarPrototype";

export default class VolktPrototype extends CarPrototype implements IPrototype{

    //use protected para que o construtor possa ser acessível pelas classes que extendem sua classe mae,no caso Car.
    protected VolktPrototype(volks_Prototype: VolktPrototype){
        this.model=this.model;
        this.year=this.year;

    }
    clone(): VolktPrototype{
        //cria um novo objeto
        const novo = new VolktPrototype(this.model,this.year);
        return novo;
    }
}
