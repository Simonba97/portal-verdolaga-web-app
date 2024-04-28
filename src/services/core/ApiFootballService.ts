import { IApiFootballResponse } from "../../models/IFixturesItem";
import { isApiEnabled } from '../../../config/apiConfig';
import dataTestFixture from '../../mockData/dataTestFixture.json';
import dataTestTeam from '../../mockData/dataTestTeam.json';
import dataTestStandings from '../../mockData/dataTestStandings.json';
import dataTestPredictions from '../../mockData/dataTestPredictions.json';
import { useLocation } from "react-router-dom";

/**
 * Servicio "Wrap" que contiene los metodos necesarios de conexión con los servicios de sharePoint para una lista
 * @see {@link https://www.npmjs.com} @pnp/sp
 * @copyright 2018 e-deas (http://www.e-deas.com.co)  El uso de esta libreria esta reservador para este sitio y cualquier cambio o reutilización debe ser autorizado por e-deas.
 * @author Diego Campo <diegoc@e-deas.com.co> / Fecha: 14.01.2019 - Creado
 * @author Diego Campo <diegoc@e-deas.com.co> / Fecha: 23.01.2019 - Modificado
 *
 * @export
 * @class ApiFootballService
 */
export abstract class ApiFootballService {

    private _API_KEY: string;
    private _baseAPIUrl: string;
    private _headers: any;
    private _isApiEnabledByURL: boolean = false;

    /**
      * Crear una instancia de ApiFootballService
      * @param {(WebPartContext)} context
      * @memberof ApiFootballService
      */
    public constructor() {
        this._API_KEY = import.meta.env.VITE_RAPIDAPI_API_KEY;
        this._baseAPIUrl = 'https://api-football-v1.p.rapidapi.com/v3';

        this._headers = {
            'X-RapidAPI-Key': this._API_KEY,
            'X-RapidAPI-Host': 'api-football-v1.p.rapidapi.com'
        };

        // Permitir las consultas al API si no están habilitadas por código mediante la URL
        const location = useLocation();
        const queryParams = new URLSearchParams(location.search);
        this._isApiEnabledByURL = Boolean(queryParams.get('testdev'));
    }

    /**
     * Eliminar un item en una lista
     * @param {number} itemId
     * @returns {Promise<string>}
     * @memberof ApiFootballService
     */
    public async makeRequest(endpoint: string): Promise<IApiFootballResponse | null> {
        try {

            //Restringir las consultas al API si no están habilitadas
            if (!isApiEnabled && !this._isApiEnabledByURL) {
                if (endpoint.indexOf('fixtures?') != -1) {
                    return {
                        response: dataTestFixture // devolvemos la información de prueba
                    };
                } else if (endpoint.indexOf('teams?') != -1) {
                    return {
                        response: dataTestTeam // devolvemos la información de prueba
                    };
                } else if (endpoint.indexOf('standings?') != -1) {
                    return {
                        response: dataTestStandings // devolvemos la información de prueba
                    };
                } else if (endpoint.indexOf('predictions?') != -1) {
                    return {
                        response: dataTestPredictions // devolvemos la información de prueba
                    };
                }
            }

            const response = await fetch(`${this._baseAPIUrl}/${endpoint}`, {
                headers: this._headers,
            });

            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }

            return await response.json();
        } catch (error) {
            console.error('Error making request:', error);
            throw error;
        }
    } // end makeRequest

}

