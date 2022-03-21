import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import { api } from "../services/api";

interface Transaction {
    id: number;
    title: string;
    amount: number;
    category: string;
    type: string;
    createdAt: string;
}
interface TransactionsProvidersProps {
    children: ReactNode;
}

type TransactionInput = Omit<Transaction, 'id' | 'createdAt'>;

interface TransactionsContextData{
    transactions: Transaction[];
    createTransaction: (transactionInput: TransactionInput) => Promise<void>;
}


const TransactionsContext = createContext<TransactionsContextData>({} as TransactionsContextData);

export function TransactiosProvider({ children }: TransactionsProvidersProps) {
    const [transactions, setTransactions] = useState<Transaction[]>([]);

    useEffect(() => {
        api.get('/transactions').then(response => setTransactions(response.data.transactions))
    }, [])

    return (
        <TransactionsContext.Provider value={{transactions, createTransaction}}>
            {children}
        </TransactionsContext.Provider>
    )

    async function createTransaction(transactionInput: TransactionInput) {
        const response  = await api.post('/transactions', {...transactionInput, createdAt: new Date(),});
        const {transaction } = response.data;

        setTransactions([
            ...transaction,
            transaction
        ])
    }
}

export function useTransactions(){
    const context = useContext(TransactionsContext);
    return context;
}