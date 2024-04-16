import { IStandingsResponse } from "../models/IFixturesItem";
import { ApiFootballService } from "./core/ApiFootballService";

/**
 * Servicio que contiene los metodos necesarios para gestionar un Match
 * @copyright 2023 - El uso de esta libreria esta reservador para este sitio y cualquier cambio o reutilización debe ser autorizado por el autor.
 * @author Simón Bustamante Alzate <simonba97@hotmail.com> / Fecha: 26.10.2023 - Creado
 *
 * @export
 * @class StandingsService
 */
export class StandingsService extends ApiFootballService {

    private _currentYearSeason = new Date().getFullYear();

    /**
     * Obtiene la información de la tabla de clasificación de una liga específica bajo el año actual
     * @returns {Promise<IInfoMatchItem>} - Una promesa que se resuelve con la información del partido.
     */
    public async getFullStandingByLeagueId(leagueId: number): Promise<IStandingsResponse | undefined> {
        try {
            const endpoint = `standings?season=${this._currentYearSeason}&league=${leagueId}`;
            const data: any = await this.makeRequest(endpoint);

            return data?.response?.[0] || undefined;
        } catch (error) {
            console.error(`Error fetching standing by league Id: ${leagueId}:`, error);
            return undefined;
        }
    } // end getNextMatch

}