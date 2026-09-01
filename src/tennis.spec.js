//Cuando se inicia elpartido debe estar en love love
import Tennis from "./tennis.js";

describe("Tennis", () => {
  it("deberia mostrar Love Love cuando ningun jugador anoto", () => {
    let tennis =new Tennis();
    expect(tennis.obtenerScore()).toEqual("Love - Love");
  });
  //Cuando jugador 1 anota 1 vez --> "15-Love""
    it("deberia mostrar 15-Love cuando el jugador 1 anota", () => {
    let tennis =new Tennis();
    tennis.jugador1_anota();
    expect(tennis.obtenerScore()).toEqual("15 - Love");
});
});