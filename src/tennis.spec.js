//Cuando se inicia elpartido debe estar en love love
import Tennis from "./tennis.js";

describe("Tennis", () => {
  it("deberia mostrar Love Love cuando ningun jugador anoto", () => {
    let tennis =new Tennis();
    expect(tennis.obtenerScore()).toEqual("Love - Love");
  });
});

