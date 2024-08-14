import React, { createContext, useState, ReactNode } from 'react';
import { IFixtureResponse } from '../models/IFixturesItem';

// Definir el tipo para el contexto
interface NextMatchContextType {
    nextMatch: IFixtureResponse | undefined; // Puedes reemplazar 'any' con el tipo adecuado para tu próximo partido
    requestLoading: boolean; // Puedes reemplazar 'any' con el tipo adecuado para tu próximo partido
    updateNextMatch: (match: any) => void; // Reemplaza 'any' según sea necesario
    updateRequestLoading: (status: boolean) => void; // Reemplaza 'any' según sea necesario
}

// Crear el contexto con un valor por defecto
const NextMatchContext = createContext<NextMatchContextType>({
    nextMatch: undefined,
    requestLoading: true,
    updateNextMatch: () => { },
    updateRequestLoading: () => { },
});

// Proveedor de contexto
interface NextMatchProviderProps {
    children: ReactNode; // Tipo para los hijos
}

export const NextMatchProvider: React.FC<NextMatchProviderProps> = ({ children }) => {
    const [nextMatch, setNextMatch] = useState<any>(null);
    const [requestLoading, setRequestLoading] = useState<boolean>(true);

    const updateNextMatch = (match: any) => {
        setNextMatch(match);
    };

    const updateRequestLoading = (status: boolean) => {
        setRequestLoading(status);
    };

    return (
        <NextMatchContext.Provider value={{ nextMatch, updateNextMatch, requestLoading, updateRequestLoading }}>
            {children}
        </NextMatchContext.Provider>
    );
};

// Hook para acceder al contexto
export const useNextMatch = () => {
    return React.useContext(NextMatchContext);
};
