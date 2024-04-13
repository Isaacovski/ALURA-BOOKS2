import { livros } from './dadosUltimosLancamentos'
import styled from 'styled-components'
import {Titulo} from '../Titulo'
import CardRecomenda from '../CardRecomenda'
import imagemLivro from '../../img/livro2.png'

const UltimosLancamentosContainer = styled.section`
    background-color: #EBECEE;
    padding-bottom: 20px;
    display: flex;
    flex-direction: column;
`



const NovosLivrosContainer = styled.div`
    margin-top: 30px;
    display: flex;
    width: 100%;
    justify-content: center;
    cursor: pointer;
`

function UltimosLancamentos() {
    return (
        <UltimosLancamentosContainer>
            <Titulo
                cor={"#EB9B00"}
                tamanhoFonte={"36px"}
            >
                ÚLTIMOS LANÇAMENTOS
            </Titulo>
            <NovosLivrosContainer>
                { livros.map( livro => (
                    <img src={livro.src}/>
                ) ) }
            </NovosLivrosContainer>
            <CardRecomenda
            titulo='Talves você se intereese por'
            subtitulo='Angular11'
           descricao='aplicação plataforma google'
            img={imagemLivro}
            />
        </UltimosLancamentosContainer>
    )
}

export default UltimosLancamentos
