import {
    Table,
    TableHeader,
    TableBody,
    TableRow,
    TableCell,
    TableColumn,
} from "@nextui-org/table"


export default function CompetenciasAnteriores() {
    return(
        <div>
            <div id="competencias-anteriores">
                <Table id="table-competencias-anteriores">
                    <TableHeader>
                        <TableColumn>Competencia</TableColumn>
                        <TableColumn>Enunciados</TableColumn>
                        <TableColumn>Resultados</TableColumn>
                    </TableHeader>
                    <TableBody>

                    </TableBody>
                </Table>
            </div>
        </div>
    )
}