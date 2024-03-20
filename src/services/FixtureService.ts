import { IFixtureItem, IFixtureResponse } from "../models/IFixtureItem";
import { ApiFootballService } from "./core/ApiFootballService";

/**
 * Servicio que contiene los metodos necesarios para gestionar un Match
 * @copyright 2023 - El uso de esta libreria esta reservador para este sitio y cualquier cambio o reutilización debe ser autorizado por el autor.
 * @author Simón Bustamante Alzate <simonba97@hotmail.com> / Fecha: 26.10.2023 - Creado
 *
 * @export
 * @class FixtureService
 */
export class FixtureService extends ApiFootballService {

    /**
     * Obtiene la información de un partido desde un archivo.
     * @returns {Promise<IInfoMatchItem>} - Una promesa que se resuelve con la información del partido.
     */
    public async getNextMatch(teamId: number): Promise<IFixtureResponse | undefined> {
        try {
            const endpoint = `fixtures?team=${teamId}&next=1`;
            const data: any = await this.makeRequest(endpoint);

            return data?.response?.[0] || undefined;
        } catch (error) {
            console.error(`Error fetching next match for team ${teamId}:`, error);
            return undefined;
        }
    } // end getNextMatch

    /**
     * Obtiene la información de un partido desde un archivo.
     * @returns {Promise<IInfoMatchItem>} - Una promesa que se resuelve con la información del partido.
     */
    public async getPreviousMatch(teamId: number): Promise<IFixtureResponse | undefined> {
        try {
            const endpoint = `fixtures?team=${teamId}&last=1`;
            const data: IFixtureItem | null = await this.makeRequest(endpoint);

            return data?.response?.[0] || undefined;
        } catch (error) {
            console.error(`Error fetching past match for team ${teamId}:`, error);
            return undefined;
        }
    } // end getPreviousMatch

    /**
     * Obtiene la información de un partido desde un archivo.
     * @returns {Promise<IInfoMatchItem>} - Una promesa que se resuelve con la información del partido.
     */
    public async getFixture(teamId: number): Promise<IFixtureResponse[] | undefined> {
        try {
            const endpoint = `fixtures?team=${teamId}&season=2024`;
            const data: any = await this.makeRequest(endpoint);

            return data?.response || undefined;
        } catch (error) {
            console.error(`Error fetching next match for team ${teamId}:`, error);
            return undefined;
        }
    } // end getFixture

}