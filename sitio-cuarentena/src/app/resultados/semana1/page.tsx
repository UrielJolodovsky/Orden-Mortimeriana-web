

export default function Home() {
    return(
        <div className="bg-hero bg-cover pb-3 h-screen">
            <div className="p-5 flex justify-center items-center">
                <h1 className="font-bold text-2xl">Premiados</h1>
            </div>
            <div className="flex justify-center items-center bg-hero pb-3 px-2">
                {/* Make table with name, and type of medal */}
                <div className="border-2 border-black rounded-[15px] bg-white">
                    <table className="sm:text-lg m-2 text-sm">
                        <thead>
                            <tr>
                                <th className="px-4 py-2">Nombre</th>
                                <th className="px-4 py-2">Medalla</th>
                                <th className="px-4 py-2">Puntaje</th>
                            </tr>
                        </thead>
                        <tbody className="text-center">
                            <tr>
                                <td className="px-4 py-2">LAndisco</td>
                                <td className="px-4 py-2 text-yellow-400">Oro</td>
                                <td className="px-4 py-2">63</td>
                            </tr>
                            <tr>
                                <td className="px-4 py-2">Lucas Rearte</td>
                                <td className="px-4 py-2 text-gray-400">Plata</td>
                                <td className="px-4 py-2">57</td>
                            </tr>
                            <tr>
                                <td className="px-4 py-2">Karim abdul jabbar</td>
                                <td className="px-4 py-2 text-gray-400">Plata</td>
                                <td className="px-4 py-2">53</td>
                            </tr>
                            <tr>
                                <td className="px-4 py-2">Monazo</td>
                                <td className="px-4 py-2 text-yellow-700">Bronce</td>
                                <td className="px-4 py-2">39</td>
                            </tr>
                            <tr>
                                <td className="px-4 py-2">Matias</td>
                                <td className="px-4 py-2 text-yellow-700">Bronce</td>
                                <td className="px-4 py-2">38</td>
                            </tr>
                            <tr>
                                <td className="px-4 py-2">Dauphineg</td>
                                <td className="px-4 py-2 text-yellow-700">Bronce</td>
                                <td className="px-4 py-2">35</td>
                            </tr>
                            <tr>
                                <td className="px-4 py-2">Matias V5</td>
                                <td className="px-4 py-2 text-yellow-700">Bronce</td>
                                <td className="px-4 py-2">31</td>
                            </tr>
                            <tr>
                                <td className="px-4 py-2">Joacoini</td>
                                <td className="px-4 py-2 text-black">Mención Especial</td>
                                <td className="px-4 py-2">17</td>
                            </tr>
                            <tr>
                                <td className="px-4 py-2">Sebach</td>
                                <td className="px-4 py-2 text-black">Mención Especial</td>
                                <td className="px-4 py-2">13</td>
                            </tr>
                            <tr>
                                <td className="px-4 py-2">Sandy</td>
                                <td className="px-4 py-2 text-black">Mención Especial</td>
                                <td className="px-4 py-2">7</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}