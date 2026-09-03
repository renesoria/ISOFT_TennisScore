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
        const puntuaciones = ["Love", "15", "30", "40"];
        const diferencia = this.puntosJugador1 - this.puntosJugador2;

        if (Math.max(this.puntosJugador1, this.puntosJugador2) >= 4 && Math.abs(diferencia) >= 2) {
            if (diferencia > 0) {
                return "Game for Player 1";
            }
            return "Game for Player 2";
        }
        if (Math.min(this.puntosJugador1, this.puntosJugador2) >= 3) {
            return "Deuce";
        }

        return `${puntuaciones[this.puntosJugador1]} - ${puntuaciones[this.puntosJugador2]}`;
    }
}
export default Tennis;
