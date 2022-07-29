import IPrototype from "../Prototype/IPrototype";
import CarPrototype from "./CarPrototype";


export default class FiatPrototype extends CarPrototype implements IPrototype{

    protected FiatPrototype(fiat_Prototype: FiatPrototype){
        this.model=this.model;
        this.year=this.year;

    }
    clone(): FiatPrototype{
        const novo = new FiatPrototype(this.model,this.year);
        return novo;
    }
}