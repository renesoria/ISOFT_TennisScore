class Tennis{

    puntosJugador1 = 0;

    jugador1_anota(){
        this.puntosJugador1++;
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
        return "Love - Love";
    }
}
export default Tennis;
