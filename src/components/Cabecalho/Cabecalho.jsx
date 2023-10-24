import Link from "next/link";

export default function Cabecalho() {

  return (
    <header className='bg-slate-400 h-40 text-white p-2'>
    <nav>
      <ul className="flex justify-evenly text-center items-center">
        <li className='text-xl'><Link href="/">HOME</Link></li>
        <div>
        <li className='text-xl'><Link href="/produtos/camisa">Camisa</Link></li>
        <li className='text-xl'><Link href="/produtos/calca">Calça</Link></li>
        <li className='text-xl'><Link href="/produtos/sapato">Sapato</Link></li>
        <li className='text-xl'><Link href="/produtos/oculos">Óculos</Link></li>
        <li className='text-xl'><Link href="/produtos/bone">Boné</Link></li>
        </div>
      </ul>
    </nav>
  </header>
  )
}