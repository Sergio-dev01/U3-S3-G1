// 1) String, number, boolean, null, undefined, symbol, bigint
// 2)
let nome: string = "Sergio";
let eta: number = 23;
let knowTypeScript: boolean = true;
// 3)
const greet = (name: string): string => {
  return "Ciao " + name;
  console.log(greet("Sergio"));
};
// 4)
const sum = (a: number, b: number): number => {
  return a + b;
  console.log(sum(5, 10));
};
// 5)
const priceWithIVA = (prezzo: number): number => {
  return prezzo * 1.22;
  console.log(priceWithIVA(100));
};
// 6)
const concatLength = (a: string, b: string): number => {
  return (a + b).length;
  console.log(concatLength("Hello", "World"));
};
// 7) Permette ad una variabile di avere due tipi:
// let valore: string | number;
// 8)
let variabile: number | null | undefined;
// 9)
type GiornoSettimana = "Lunedì" | "Martedì" | "Mercoledì" | "Giovedì" | "Venerdì" | "Sabato" | "Domenica";
// 10)
const numbers: number[] = [1, 2, 3];
const numbersAlt: Array<number> = [1, 2, 3];
// 11)
let tupla: [string, string, string, number, number] = ["a", "b", "c", 1, 2];
// 12)
// "type" può rappresentare anche union, primitive, tuple, ecc.
// "interface" è pensata per strutture a oggetti e supporta estendibilità.
// In generale, interface è preferita per oggetti, type per unioni o tipi complessi.
// 13)
interface Persona {
  firstname: string;
  lastname: string;
  age: number;
}
// 14)
interface Utente {
  email: string;
  telefono?: string;
}
// 15)
interface Studente {
  nome: string;
  voto: number;
}
const studenti: Studente[] = [
  { nome: "Anna", voto: 28 },
  { nome: "Luca", voto: 30 },
];
// 16)
interface Veicolo {
  marca: string;
  modello: string;
}
interface Auto extends Veicolo {
  porte: number;
}
// 17)
const miaAuto: Auto = {
  marca: "Fiat",
  modello: "Punto",
  porte: 5,
};
// 18)
// I Generics permettono di definire tipi riutilizzabili che funzionano con tipi diversi, mantenendo la tipizzazione forte.
// 19) Si
// 20)
interface ApiResponse<T> {
  success: boolean;
  data: T;
  message?: string;
}
