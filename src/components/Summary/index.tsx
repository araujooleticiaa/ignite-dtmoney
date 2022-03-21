import { Container } from "./styled";
import iconeImg from '../../assets/income.svg';
import outcomeImg from '../../assets/outcome.svg';
import total from '../../assets/total.svg';
import { useTransactions } from "../../hook/useTransactions";

export function Summary() {

    const { transactions } = useTransactions();

    const sumary = transactions.reduce((acc, transactions) => {
        if (transactions.type === 'deposit') {
            acc.depostis += transactions.amount;
            acc.total += transactions.amount;
        } else {
            acc.widthdraws += transactions.amount
            acc.total -= transactions.amount;
        }
        return acc
    }, {
        depostis: 0,
        widthdraws: 0,
        total: 0,
    })



    return (
        <Container>
            <div>
                <header>
                    <p>entradas</p>
                    <img src={iconeImg} alt="" />
                </header>
                <strong>
                    {new Intl.NumberFormat('pt-BR', {
                        style: 'currency',
                        currency: 'BRL'
                    }).format(sumary.depostis)
                    }
                </strong>

            </div>
            <div>
                <header>
                    <p>saidas</p>
                    <img src={outcomeImg} alt="" />
                </header>
                <strong>-
                    {new Intl.NumberFormat('pt-BR', {
                        style: 'currency',
                        currency: 'BRL'
                    }).format(sumary.widthdraws)
                    }</strong>
            </div>
            <div className="backgorund-total">
                <header>
                    <p>total</p>
                    <img src={total} alt="" />
                </header>
                <strong>
                    {new Intl.NumberFormat('pt-BR', {
                        style: 'currency',
                        currency: 'BRL'
                    }).format(sumary.total)
                    }</strong>
            </div>
        </Container>
    )
}