import { useRouter } from 'next/router'
import Link from 'next/link'

export default function Navbar() {
  const router = useRouter()

  return (
    <nav>
      <ul>
        <li>
          {
            router.pathname === "/"
            ? <Link href="/about"><a className="transition duration-300 ease-in-out hover:bg-red-600">About</a></Link>
            : <Link href="/"><a className="transition duration-300 ease-in-out hover:bg-red-600">Home</a></Link>
          }
        </li>
      </ul>
    </nav>
  )
}
