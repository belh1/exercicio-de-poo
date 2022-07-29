import CarPrototype from "./veiculos/CarPrototype";
import FiatPrototype from "./veiculos/FiatPrototype";
import VolktPrototype from "./veiculos/VolksPrototype";

const car = new CarPrototype('sla',9);
const fiat = new FiatPrototype('Argo',11);
const volks = new VolktPrototype(' Fox',2021);

const fiat1 = fiat.clonar();
fiat1.model ="Cronos";
fiat1.year = 2011;

console.log(car);
console.log(fiat);
console.log(fiat1);
console.log(volks);