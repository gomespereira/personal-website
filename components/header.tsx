import Navbar from 'components/navbar'

export default function Header() {
  return (
    <header className="flex justify-between items-center mt-4 mr-6 ml-6 md:mr-10 md:ml-10">
      <span
        id="logo"
        className="text-3xl"
      >
        diegopereira
      </span>
      <Navbar />
    </header>
  )
}
