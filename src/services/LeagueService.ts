import { ILeaguesResponse } from "../models/ILeaguesResponse";
import { Global } from "../utils/Global";
import { ApiFootballService } from "./core/ApiFootballService";

/**
 * Servicio que contiene los metodos necesarios para gestionar un Match
 * @copyright 2023 - El uso de esta libreria esta reservador para este sitio y cualquier cambio o reutilización debe ser autorizado por el autor.
 * @author Simón Bustamante Alzate <simonba97@hotmail.com> / Fecha: 26.10.2023 - Creado
 *
 * @export
 * @class LeaguesService
 */
export class LeaguesService extends ApiFootballService {

    private _currentYearSeason = new Date().getFullYear();

    /**
     * Obtiene la información de la tabla de clasificación de una liga específica bajo el año actual
     * @returns {Promise<IInfoMatchItem>} - Una promesa que se resuelve con la información del partido.
     */
    public async getCurrentLeague(): Promise<ILeaguesResponse | undefined> {
        try {
            const endpoint = `leagues?season=${this._currentYearSeason}&team=${Global.NACIONAL_ID_API_FOOTBALL}&type=league&current=true`;
            const data = await this.makeRequest(endpoint);

            return data?.response?.[0] || undefined;
        } catch (error) {
            console.error(`Error fetching current league for: ${Global.NACIONAL_ID_API_FOOTBALL}:`, error);
            return undefined;
        }
    } // end getCurrentLeague

}