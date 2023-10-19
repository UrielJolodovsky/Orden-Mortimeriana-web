import {
    Table,
    TableHeader,
    TableBody,
    TableRow,
    TableCell,
    TableColumn,
} from "@nextui-org/table"
import Link from "next/link"


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
                        <TableRow key={1}>
                            <TableCell>I Cuarentena</TableCell>
                            <TableCell><Link href={''}>Enunciados</Link></TableCell>
                            <TableCell><Link href={''}>Resultados</Link></TableCell>
                        </TableRow>
                        {/* Hacer array de las competencias y armar el tablero recorriendo el array */}
                    </TableBody>
                </Table>
            </div>
        </div>
    )
}