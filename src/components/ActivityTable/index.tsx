import {Container} from "./styles"

export function ActivityTable() {
    return(
        <Container>
            <table>
                <thead>
                    <tr>
                        <th>Unidade Curricular</th>
                        <th>Atividade</th>
                        <th>Avaliação</th>
                        <th>Data</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Programção WEB</td>
                        <td>Desenvolvimento Frontend</td>
                        <td>9.00</td>
                        <td>31/10/2021</td>
                    </tr>
                </tbody>
            </table>
        </Container>
    )
}