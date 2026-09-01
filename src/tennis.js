class Tennis{

    puntosJugador1 = 0;

    jugador1_anota(){
        this.puntosJugador1++;
    }

    obtenerScore(){
        if (this.puntosJugador1 == 1) {
            return "15 - Love";
        }
        return "Love - Love";
    }
}
export default Tennis;