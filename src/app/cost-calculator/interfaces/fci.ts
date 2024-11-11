import { resultCalculateFci } from './result-calculate-fci';
export interface FCI {
    fondo: string;
    tna: number;
    tea: number;
    tope: number | null;
    fecha: string;
    resultCalculateFcis: { result: number, isWithdrawals: boolean }[];
}