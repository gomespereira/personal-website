export default function Footer() {
  return (
    <footer className="flex justify-center mb-4">
      <p>
        <a
          className="bg-red-600 transition duration-300 ease-in-out hover:bg-gray-800 hover:text-red-500"
          href="https://github.com/gomespereira/personal-website"
          target="_blank"
          rel="noopener noreferrer"
        >
          Designed and coded
        </a>
        &nbsp;
        <span className="underline">by myself</span>
        .
      </p>
    </footer>
  )
}
