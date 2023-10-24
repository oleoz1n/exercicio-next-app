import Link from "next/link";

export default function Cabecalho() {
  return (
    <header className='bg-slate-400 h-20 text-white '>
    <nav>
      <ul>
        <li className='text-xl'><Link href="/">HOME</Link></li>
        <li className='text-xl'><Link href="/">PRODUTOS</Link></li>
      </ul>
    </nav>
  </header>
  )
}