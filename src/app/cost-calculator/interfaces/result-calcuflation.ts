export interface ResultCalcuflation {
    inflationValue: number;
    totalAdjustedInstallments: number;
    cashPrice: number;
    financedPrice: number;
    installments: number;
    installmentValue: number;
    adjustedInstallments: number[];
}

export class ResultCalcuflationClass implements ResultCalcuflation {
    inflationValue: number;
    totalAdjustedInstallments: number;
    cashPrice: number;
    financedPrice: number;
    installments: number;
    installmentValue: number;
    adjustedInstallments: number[];

    constructor(
        inflationValue: number,
        totalAdjustedInstallments: number,
        cashPrice: number,
        financedPrice: number,
        installments: number,
        installmentValue: number,
        adjustedInstallments: number[]
    ) {
        this.inflationValue = inflationValue * 100;
        this.totalAdjustedInstallments = totalAdjustedInstallments;
        this.cashPrice = cashPrice;
        this.financedPrice = financedPrice;
        this.installments = installments;
        this.installmentValue = installmentValue;
        this.adjustedInstallments = adjustedInstallments;
    }
}