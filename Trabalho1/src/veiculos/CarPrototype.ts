import IPrototype from "../Prototype/IPrototype";


export default class CarPrototype implements IPrototype{
    private _model: string;
    private _year : number;

    constructor(_model :string, _year : number){
        this._model= _model;
        this._year = _year;
    }
    
    get model() : string{
        return this._model;
    }

    set model(values : string){
        this._model = values;
    }

    get year() : number{
        return this._year;
    } 

    set year(values : number){
        this._year = values;
    }
    clonar():CarPrototype{
        const novo = new CarPrototype(this._model,this._year);
        return novo;
    }
}
