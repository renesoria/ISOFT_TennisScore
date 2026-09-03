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
  //Cuando jugador 1 anota 2 veces --> "30-Love"
  it("deberia mostrar 30-Love cuando el jugador 1 anota dos veces", () => {
    let tennis =new Tennis();
    tennis.jugador1_anota();
    tennis.jugador1_anota();
    expect(tennis.obtenerScore()).toEqual("30 - Love");
  });
  //Cuando jugador 1 anota 3 veces --> "40-Love"
  it("deberia mostrar 40-Love cuando el jugador 1 anota tres veces", () => {
    let tennis =new Tennis();
    tennis.jugador1_anota();
    tennis.jugador1_anota();
    tennis.jugador1_anota();
    expect(tennis.obtenerScore()).toEqual("40 - Love");
  });
  //Cuando jugador 1 anota 4 veces --> "Game for Player 1"
  it("deberia mostrar Game for Player 1 cuando el jugador 1 anota cuatro veces", () => {
    let tennis =new Tennis();
    tennis.jugador1_anota();
    tennis.jugador1_anota();
    tennis.jugador1_anota();
    tennis.jugador1_anota();
    expect(tennis.obtenerScore()).toEqual("Game for Player 1");
  });
  //Cuando jugador 2 anota 1 vez --> "Love-15"
  it("deberia mostrar Love-15 cuando el jugador 2 anota", () => {
    let tennis =new Tennis();
    tennis.jugador2_anota();
    expect(tennis.obtenerScore()).toEqual("Love - 15");
  });
  //Cuando jugador 2 anota 2 veces --> "Love-30"
  it("deberia mostrar Love-30 cuando el jugador 2 anota dos veces", () => {
    let tennis =new Tennis();
    tennis.jugador2_anota();
    tennis.jugador2_anota();
    expect(tennis.obtenerScore()).toEqual("Love - 30");
  });
  //Cuando jugador 2 anota 3 veces --> "Love-40"
  it("deberia mostrar Love-40 cuando el jugador 2 anota tres veces", () => {
    let tennis =new Tennis();
    tennis.jugador2_anota();
    tennis.jugador2_anota();
    tennis.jugador2_anota();
    expect(tennis.obtenerScore()).toEqual("Love - 40");
  });
  //Cuando jugador 2 anota 4 veces --> "Game for Player 2"
  it("deberia mostrar Game for Player 2 cuando el jugador 2 anota cuatro veces", () => {
    let tennis =new Tennis();
    tennis.jugador2_anota();
    tennis.jugador2_anota();
    tennis.jugador2_anota();
    tennis.jugador2_anota();
    expect(tennis.obtenerScore()).toEqual("Game for Player 2");
  });
  //Cuando jugador 1 anota 2 veces y jugador 2 anota 1 vez --> "30-15"
  it("deberia mostrar 30-15 cuando jugador 1 anota dos veces y jugador 2 una vez", () => {
    let tennis =new Tennis();
    tennis.jugador1_anota();
    tennis.jugador1_anota();
    tennis.jugador2_anota();
    expect(tennis.obtenerScore()).toEqual("30 - 15");
  });
});
