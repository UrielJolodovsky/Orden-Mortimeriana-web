

export default function Home() {
    return (
        <div className="bg-hero bg-cover w-screen min-h-screen">
            <div className="p-5 flex justify-center items-center">
                <h1 className="font-bold text-2xl">Premiados</h1>
            </div>
            <div className="flex justify-center items-start pb-3 px-2">
            <div className="border-2 border-black rounded-[15px] bg-white">
                    <table className="md:text-lg text-sm m-2">
                        <thead className="text-center space-x-10">
                            <tr>
                                <th className="px-4 py-2 w-1/2">Nombre</th>
                                <th className="px-4 py-2">Medalla</th>
                            </tr>
                        </thead>
                        <tbody className="text-center">
                            <tr>
                                <td className="px-4 py-2">Agustín Marchionna</td>
                                <td className="px-4 py-2 text-yellow-400">Campeón</td>
                            </tr>
                            <tr>
                                <td className="px-4 py-2">Lucas De Amorin</td>
                                <td className="px-4 py-2 text-gray-400">1er Subcampeón</td>
                            </tr>
                            <tr>
                                <td className="px-4 py-2">Julian Masliah</td>
                                <td className="px-4 py-2 text-gray-400">1er Subcampeón</td>
                            </tr>
                            <tr>
                                <td className="px-4 py-2">Lucas Andisco</td>
                                <td className="px-4 py-2 text-yellow-700">2do Subcampeón</td>
                            </tr>
                            <tr>
                                <td className="px-4 py-2">Lucía Busolini</td>
                                <td className="px-4 py-2 text-yellow-700">2do Subcampeón</td>
                            </tr>
                            <tr>
                                <td className="px-4 py-2">Mateo Carranza Vélez</td>
                                <td className="px-4 py-2 text-yellow-700">2do Subcampeón</td>
                            </tr>
                            <tr>
                                <td className="px-4 py-2">Agustín Barreto</td>
                                <td className="px-4 py-2 text-black">Mención Especial</td>
                            </tr>
                            <tr>
                                <td className="px-4 py-2">Carla Crucianelli</td>
                                <td className="px-4 py-2 text-black">Mención Especial</td>
                            </tr>
                            <tr>
                                <td className="px-4 py-2">Matias Saucedo</td>
                                <td className="px-4 py-2 text-black">Mención Especial</td>
                            </tr>
                            <tr>
                                <td className="px-4 py-2">Carlos Miguel Soto</td>
                                <td className="px-4 py-2 text-black">Mención Especial</td>
                            </tr>
                            <tr>
                                <td className="px-4 py-2">Gianni De Rico</td>
                                <td className="px-4 py-2 text-black">Mención de Honor</td>
                            </tr>
                            <tr>
                                <td className="px-4 py-2">Joaquín Inama</td>
                                <td className="px-4 py-2 text-black">Mención de Honor</td>
                            </tr>
                            <tr>
                                <td className="px-4 py-2">Matias Raimundez</td>
                                <td className="px-4 py-2 text-black">Mención de Honor</td>
                            </tr>
                            <tr>
                                <td className="px-4 py-2">Lorenzo Ruiz Diaz</td>
                                <td className="px-4 py-2 text-black">Mención de Honor</td>
                            </tr>
                            <tr>
                                <td className="px-4 py-2">Lucas Sandleris</td>
                                <td className="px-4 py-2 text-black">Mención de Honor</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}