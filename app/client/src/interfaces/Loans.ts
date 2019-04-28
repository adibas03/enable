import { User } from './Users';


export interface LoanMetadata {
    country: string;
    purpose: string;
    description: string;
    userStory: string;
    imgSrc: string;
}

export interface LoanParams {
    principal: number;
    fundsRaised: number;
    interestRate: number;
    tenor: number;
    gracePeriod: number;
    repayments: number;
    repaymentSchedule: [];
    loanCurrency: string;
}

export interface Loan {
    metadata?: LoanMetadata;
    category?: string;
    borrower?: User;
}