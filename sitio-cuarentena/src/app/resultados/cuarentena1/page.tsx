

export default function Home() {
    return (
        <div className="bg-hero bg-cover w-screen h-screen">
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
                                <td className="px-4 py-2">69</td>
                            </tr>
                            <tr>
                                <td className="px-4 py-2">lucasdeamorin</td>
                                <td className="px-4 py-2 text-yellow-400">Oro</td>
                                <td className="px-4 py-2">64</td>
                            </tr>
                            <tr>
                                <td className="px-4 py-2">jujumas</td>
                                <td className="px-4 py-2 text-gray-400">Plata</td>
                                <td className="px-4 py-2">58</td>
                            </tr>
                            <tr>
                                <td className="px-4 py-2">tuvie</td>
                                <td className="px-4 py-2 text-gray-400">Plata</td>
                                <td className="px-4 py-2">57</td>
                            </tr>
                            <tr>
                                <td className="px-4 py-2">Matias V5</td>
                                <td className="px-4 py-2 text-gray-400">Plata</td>
                                <td className="px-4 py-2">42</td>
                            </tr>
                            <tr>
                                <td className="px-4 py-2">Fran5</td>
                                <td className="px-4 py-2 text-yellow-700">Bronce</td>
                                <td className="px-4 py-2">37</td>
                            </tr>
                            <tr>
                                <td className="px-4 py-2">Turko Arias</td>
                                <td className="px-4 py-2 text-yellow-700">Bronce</td>
                                <td className="px-4 py-2">36</td>
                            </tr>
                            <tr>
                                <td className="px-4 py-2">MinosFx</td>
                                <td className="px-4 py-2 text-yellow-700">Bronce</td>
                                <td className="px-4 py-2">35</td>
                            </tr>
                            <tr>
                                <td className="px-4 py-2">Gianni De Rico</td>
                                <td className="px-4 py-2 text-yellow-700">Bronce</td>
                                <td className="px-4 py-2">33</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}