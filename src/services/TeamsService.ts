import { ITeamsInformationResponse, ITeamsStatisticsResponse } from "../models/IFixturesItem";
import { ApiFootballService } from "./core/ApiFootballService";

/**
 * Servicio que contiene los metodos necesarios para gestionar un Team específico
 * @copyright 2023 - El uso de esta libreria esta reservador para este sitio y cualquier cambio o reutilización debe ser autorizado por el autor.
 * @author Simón Bustamante Alzate <simonba97@hotmail.com> / Fecha: 26.10.2023 - Creado
 *
 * @export
 * @class TeamsService
 */
export class TeamsService extends ApiFootballService {

    /**
     * Obtiene la información de un partido desde un archivo.
     * @returns {Promise<IInfoMatchItem>} - Una promesa que se resuelve con la información del partido.
     */
    public async getTeamInformation(teamId: number): Promise<ITeamsInformationResponse | undefined> {
        try {
            const endpoint = `teams?id=${teamId}`;
            const data: any = await this.makeRequest(endpoint);

            return data?.response?.[0] || undefined;
        } catch (error) {
            console.error(`Error fetching information for team ${teamId}:`, error);
            return undefined;
        }
    } // end getTeamInformation

    /**
     * Obtiene la información de un partido desde un archivo.
     * @returns {Promise<IInfoMatchItem>} - Una promesa que se resuelve con la información del partido.
     */
    public async getTeamStatistics(teamId: number): Promise<ITeamsStatisticsResponse | undefined> {
        try {
            const endpoint = `teams?id=${teamId}`;
            const data: any = await this.makeRequest(endpoint);

            return data?.response?.[0] || undefined;
        } catch (error) {
            console.error(`Error fetching information for team ${teamId}:`, error);
            return undefined;
        }
    } // end getTeamInformation
}