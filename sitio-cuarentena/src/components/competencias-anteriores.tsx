export default function CompetenciasAnteriores() {
  return (
    <div id="competencias-anteriores" className="flex flex-col justify-center items-center py-4">
      <h1 className="text-3xl leading-10 font-semibold">
        Competencias anteriores
      </h1>
      <main className="text-center text-black bg-white border-2 border-black rounded-[15px] mt-4">
        <table className="m-2">
          <thead className="h-10">
            <tr className="sm:text-xl text-base">
              <th className="p-1">Competencia</th>
              <th className="w-32 p-1">Enunciados</th>
              <th className="p-2">Resultados</th>
            </tr>
          </thead>
          <tbody className="p-2 m-2">
            <tr className="m-3 h-12">
              <td className="p-1">CUARENTENA (2020)</td>
              <td className="p-1 hover:text-blue-700 hover:transition-all hover:ease-linear"><a href="enunciados/CUARENTENA I.pdf">Enunciados</a></td>
              <td className="p-1"><a href="/resultados/cuarentena1" className='hover:text-blue-700 hover:transition-all hover:ease-linear'>Resultados</a></td>
            </tr>
            <tr className="h-12">
              <td className="p-1">CUARENTENA II (2021)</td>
              <td className="p-1">
                <a
                  href="enunciados/Cuarentena_2_Día1.pdf"
                  className="p-1 hover:text-blue-700 hover:transition-all hover:ease-linear">
                    Día 1
                  </a>
                <a
                  className="block p-1 hover:text-blue-700 hover:transition-all hover:ease-linear"
                  href="enunciados/Cuarentena_2_Día2.pdf">
                    Día 2
                </a>
              </td>
              <td className="p-1"><a href="resultados/cuarentena2" className='hover:text-blue-700 hover:transition-all hover:ease-linear'>Resultados</a></td>
            </tr>
            <tr className="h-12 m-3">
              <td className="p-1">CUARENTENA III (2021)</td>
              <td className="p-1 hover:text-blue-700 hover:transition-all hover:ease-linear"><a href="enunciados/Cuarentena3.pdf">Enunciados</a></td>
              <td className="p-1"><a href="resultados/cuarentena3" className='hover:text-blue-700 hover:transition-all hover:ease-linear'>Resultados</a></td>
            </tr>
            <tr className="h-12 m-3">
              <td className="p-1">Semana de Mórtimer (2022)</td>
              <td className="p-1 hover:text-blue-700 hover:transition-all hover:ease-linear"><a href="enunciados/Semana_de_Mortimer.pdf">Enunciados</a></td>
              <td className="p-1"><a href="resultados/semana1" className='hover:text-blue-700 hover:transition-all hover:ease-linear'>Resultados</a></td>
            </tr>
            <tr className="h-12 m-3">
              <td className="p-1">
                CUARENTENA IV (2023)
              </td>
              <td className="p-1">
                <a
                  href="enunciados/Cuarentena_4_Dia1.pdf"
                  className="p-1 hover:text-blue-700 hover:transition-all hover:ease-linear">
                    Día 1
                </a>
                <a
                  className="block p-1 hover:text-blue-700 hover:transition-all hover:ease-linear"
                  href="enunciados/Cuarentena_4_Dia2.pdf">
                    Día 2
                  </a>
              </td>
              <td className="p-1">
                <a
                  className='hover:text-blue-700 hover:transition-all hover:ease-linear'
                  href="resultados/cuarentena4">
                    Resultados
                </a>
              </td>
            </tr>
          </tbody>
        </table>
      </main>
    </div>
  )
}