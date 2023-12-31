

export default function Home() {
    return (
        <div className="bg-hero h-screen">
            <div className="p-5 flex justify-center items-center">
                <h1 className="font-bold text-2xl">Premiados</h1>
            </div>
            <div className="flex justify-center items-center pb-3 px-2 bg-hero bg-cover">
                {/* Make table with name, and type of medal */}
                <div className="border-2 border-black rounded-[15px] bg-white">
                    <table className="md:text-lg text-sm m-2">
                        <thead>
                            <tr>
                                <th className="px-4 py-2">Nombre</th>
                                <th className="px-4 py-2">Medalla</th>
                                <th className="px-4 py-2">Puntaje</th>
                            </tr>
                        </thead>
                        <tbody className="text-center">
                            <tr>
                                <td className="px-4 py-2">Lucas De Amorin</td>
                                <td className="px-4 py-2 text-yellow-400">Oro</td>
                                <td className="px-4 py-2">25</td>
                            </tr>
                            <tr>
                                <td className="px-4 py-2">Carlos Di Fiore</td>
                                <td className="px-4 py-2 text-yellow-400">Oro</td>
                                <td className="px-4 py-2">24</td>
                            </tr>
                            <tr>
                                <td className="px-4 py-2">Julian Masliah</td>
                                <td className="px-4 py-2 text-gray-400">Plata</td>
                                <td className="px-4 py-2">23</td>
                            </tr>
                            <tr>
                                <td className="px-4 py-2">Carlos Miguel Soto</td>
                                <td className="px-4 py-2 text-gray-400">Plata</td>
                                <td className="px-4 py-2">22</td>
                            </tr>
                            <tr>
                                <td className="px-4 py-2">Matias Saucedo</td>
                                <td className="px-4 py-2 text-yellow-700">Bronce</td>
                                <td className="px-4 py-2">18</td>
                            </tr>
                            <tr>
                                <td className="px-4 py-2">Mateo Carranza Vélez</td>
                                <td className="px-4 py-2 text-yellow-700">Bronce</td>
                                <td className="px-4 py-2">16</td>
                            </tr>
                            <tr>
                                <td className="px-4 py-2">Agustín Marchionna</td>
                                <td className="px-4 py-2 text-yellow-700">Bronce</td>
                                <td className="px-4 py-2">11</td>
                            </tr>
                            <tr>
                                <td className="px-4 py-2">Carla Crucianelli</td>
                                <td className="px-4 py-2 text-black">Mención de Honor</td>
                                <td className="px-4 py-2">10</td>
                            </tr>
                            <tr>
                                <td className="px-4 py-2">Lucia Busolini</td>
                                <td className="px-4 py-2 text-black">Mención de Honor</td>
                                <td className="px-4 py-2">9</td>
                            </tr>
                            <tr>
                                <td className="px-4 py-2">Agustín Barreto</td>
                                <td className="px-4 py-2 text-black">Mención de Honor</td>
                                <td className="px-4 py-2">9</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}