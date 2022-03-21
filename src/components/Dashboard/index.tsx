import { Summary } from "../Summary";
import { Container } from "./styled";
import { TransactionsLabel } from "../../components/TransactionsLabel";

export function Dashboard(){
    return(
        <Container>
            <Summary/>
            <TransactionsLabel/>
        </Container>
    )
}