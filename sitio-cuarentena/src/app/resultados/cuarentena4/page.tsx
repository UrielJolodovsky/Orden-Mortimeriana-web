

export default function Home() {
    return(
        <div className="bg-hero bg-cover w-screen h-screen">
            <div className="p-5 flex justify-center items-center">
                <h1 className="font-bold">Premiados</h1>
            </div>
            <div className="flex justify-center items-center">
                {/* Make table with name, and type of medal */}
                <div className="border-2 border-black rounded-[15px] bg-white">
                    <table className="">
                        <thead>
                            <tr>
                                <th className="px-4 py-2">Nombre</th>
                                <th className="px-4 py-2">Medalla</th>
                            </tr>
                        </thead>
                        <tbody className="text-center">
                            <tr>
                                <td className="px-4 py-2">Bruno Ziger</td>
                                <td className="px-4 py-2 text-yellow-400">Oro</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}