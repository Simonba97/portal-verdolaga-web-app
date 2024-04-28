import { IPredictionsResponse } from "../models/IPredictionsItem";
import { ApiFootballService } from "./core/ApiFootballService";

/**
 * Servicio que contiene los metodos necesarios para gestionar un Match
 * @copyright 2023 - El uso de esta libreria esta reservador para este sitio y cualquier cambio o reutilización debe ser autorizado por el autor.
 * @author Simón Bustamante Alzate <simonba97@hotmail.com> / Fecha: 26.10.2023 - Creado
 *
 * @export
 * @class PredictionsService
 */
export class PredictionsService extends ApiFootballService {

    /**
     * Obtiene la información de las predicciones de un partido específico
     * @returns {Promise<IInfoMatchItem>} - Una promesa que se resuelve con la información del partido.
     */
    public async getPredictionsByMatchId(matchId: number): Promise<IPredictionsResponse | undefined> {
        try {
            const endpoint = `predictions?fixture=${matchId}`;
            const data: any = await this.makeRequest(endpoint);

            return data?.response?.[0] || undefined;
        } catch (error) {
            console.error(`Error fetching predictions by match Id: ${matchId}:`, error);
            return undefined;
        }
    } // end getNextMatch

}