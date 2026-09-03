class Tennis{

    puntosJugador1 = 0;
    puntosJugador2 = 0;

    jugador1_anota(){
        this.puntosJugador1++;
    }

    jugador2_anota(){
        this.puntosJugador2++;
    }

    obtenerScore(){
        if (this.puntosJugador1 == 4) {
            return "Game for Player 1";
        }
        if (this.puntosJugador1 == 3) {
            return "40 - Love";
        }
        if (this.puntosJugador1 == 2) {
            return "30 - Love";
        }
        if (this.puntosJugador1 == 1) {
            return "15 - Love";
        }
        if (this.puntosJugador2 == 4) {
            return "Game for Player 2";
        }
        if (this.puntosJugador2 == 3) {
            return "Love - 40";
        }
        if (this.puntosJugador2 == 2) {
            return "Love - 30";
        }
        if (this.puntosJugador2 == 1) {
            return "Love - 15";
        }
        return "Love - Love";
    }
}
export default Tennis;
