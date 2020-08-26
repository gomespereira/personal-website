import Navbar from 'components/navbar'

export default function Header() {
  return (
    <header className="flex justify-between items-center pt-4 pr-6 pl-6 md:pr-10 md:pl-10">
      <span
        id="logo"
        className="text-2xl"
      >
        {'>'} diego pereira
      </span>
      <Navbar />
    </header>
  )
}
