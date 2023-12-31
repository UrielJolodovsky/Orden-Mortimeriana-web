

export default function Home() {
    return(
        <div className="bg-hero bg-cover w-screen h-screen">
            <div className="p-5 flex justify-center items-center">
                <h1 className="font-bold text-2xl">Premiados</h1>
            </div>
            <div className="flex justify-center items-center bg-hero bg-cover pb-3 px-2">
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
                                <td className="px-4 py-2">Bruno Ziger</td>
                                <td className="px-4 py-2 text-yellow-400">Oro</td>
                                <td className="px-4 py-2">46</td>
                            </tr>
                            <tr className="">
                                <td className="px-4 py-2">Joseph Altamirano</td>
                                <td className="px-4 py-2 text-gray-400">Plata</td>
                                <td className="px-4 py-2">42</td>
                            </tr>
                            <tr>
                                <td className="px-4 py-2">Lucas Andisco</td>
                                <td className="px-4 py-2 text-gray-400">Plata</td>
                                <td className="px-4 py-2">39</td>
                            </tr>
                            <tr>
                                <td className="px-4 py-2">Álvaro Gamboa</td>
                                <td className="px-4 py-2 text-yellow-700">Bronce</td>
                                <td className="px-4 py-2">32</td>
                            </tr>
                            <tr>
                                <td className="px-4 py-2">Jordi EN</td>
                                <td className="px-4 py-2 text-yellow-700">Bronce</td>
                                <td className="px-4 py-2">27</td>
                            </tr>
                            <tr>
                                <td className="px-4 py-2">Sandy</td>
                                <td className="px-4 py-2 text-yellow-700">Bronce</td>
                                <td className="px-4 py-2">23</td>
                            </tr>
                            <tr>
                                <td className="px-4 py-2">Mati Saucedo</td>
                                <td className="px-4 py-2 text-yellow-700">Bronce</td>
                                <td className="px-4 py-2">22</td>
                            </tr>
                            <tr>
                                <td className="px-4 py-2">Ale Campos</td>
                                <td className="px-4 py-2 text-yellow-700">Bronce</td>
                                <td className="px-4 py-2">21</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}