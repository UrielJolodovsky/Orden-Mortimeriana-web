
export default function Contacto() {
    return(
        <div id="contacto" className="h-screen w-full flex justify-center items-center">
            <div className="flex flex-col justify-center items-center">
                <h1 className="text-4xl font-bold">Contacto</h1>
                <h2 className="text-2xl font-bold">¿Tenés alguna duda?</h2>
                <h3 className="text-xl">Escribinos a <a href="mailto:" className="text-blue-500"></a></h3>
            </div>
        </div>
    )
}