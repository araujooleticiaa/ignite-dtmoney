import Modal from 'react-modal';
import { Container, RadioBox, TransactionTypeContainer } from './styled';
import closeImg from '../../assets/close.svg';
import incomeImg from '../../assets/income.svg';
import outcomeImg from '../../assets/outcome.svg';
import { FormEvent, useState } from 'react';
import { useTransactions } from '../../hook/useTransactions';

interface NewTransactionModalProps {
    isOpen: boolean;
    onRequestClose: () => void;
}

export function NewTransactionModal({ isOpen, onRequestClose }: NewTransactionModalProps) {

    const { createTransaction } =  useTransactions();

    const [title, setTtitle] = useState('');
    const [amount, setAmount] = useState(0);
    const [category, setCategory] = useState(''); 
    const [type, setType] = useState('deposit');


    async function handleCreateNewTransaction(event: FormEvent){
        event.preventDefault();

        await createTransaction({
            title,
            amount,
            category,
            type
        })
        
        setTtitle('');
        setAmount(0);
        setCategory('');
        setType('deposit');

        onRequestClose();
    }
    
    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            overlayClassName="react-modal-overlay"
            className="react-modal-content"
        >
            <button 
                onClick={onRequestClose} 
                type="button"
                className="react-modal-close"
            >
                <img src={closeImg} alt="" />
            </button>

            <Container onSubmit={handleCreateNewTransaction}>
                <h2>cadastrar transação</h2>

                <input
                    placeholder='titulo'
                    value={title}
                    onChange={event => setTtitle(event.target.value)}
                />

                <input
                    placeholder='valor'
                    type="number"
                    value={amount}
                    onChange={event => setAmount(Number(event.target.value))}
                />

                <TransactionTypeContainer>
                <RadioBox
                    type='button'
                    isActive={type === 'deposit'}
                    activeColor = "green"
                    onClick={() => {setType('deposit')}}
                >
                    <img src={incomeImg} alt="" />
                    <span>entrada</span>

                </RadioBox>

                <RadioBox
                    activeColor = "red"
                    isActive={type === 'widthdraw'}
                    type='button'
                    onClick={() => {setType('widthdraw')}}
                >
                    <img src={outcomeImg} alt="" />
                    <span>saída</span>
                </RadioBox>


                </TransactionTypeContainer>


                <input
                    placeholder='categoria'
                    value={category}
                    onChange={event => setCategory(event.target.value)}
                />

                <button type="submit">
                    Cadastrar
                </button>
            </Container>
        </Modal>
    )
}