import Link from "next/link"

export default function UltimoMomento({ msg, link, link_text }: {
  msg: string[],
  link?: string,
  link_text?: string
}) {
  return (
    <div id='ultimo-momento' className='flex flex-col items-center pt-8 pb-4'>
      <h1
        className="text-center pb-1 text-3xl leading-10 font-semibold text-red-500 animate-bounce">
        ¡ÚLTIMO MOMENTO!
      </h1>
      <div
        className='flex flex-col items-begin border-2 border-black rounded-[25px] bg-white justify-center w-5/6 p-5'>
        {msg.map((line, index) => (
          <p key={index} className='text-black pb-2'>{line}</p>
        ))}
        {link ?
          <Link
            href={link}
            className='text-center text-blue-500 hover:underline'>
            {link_text}
          </Link>
          : null}
      </div>
    </div>
  )
}