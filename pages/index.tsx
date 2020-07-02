import Layout from 'components/layout'

export default function Home() {
  return (
    <Layout>
      <section className="space-y-4 max-w-full md:mr-0 md:ml-0 lg:mr-0 lg:ml-0">
        <p
          id="salute"
          className="text-2xl mb-6 md:mb-12 transform -skew-y-6"
        >
          👋 Hi, I'm Diego.
        </p>
        <span
          className="bg-red-600 text-3xl font-bold">I like making great things with code.</span>
        <p className="text-xl w-full break-words">
          Check out my&nbsp;
          <a
            className="transition duration-300 ease-in-out hover:bg-red-600"
            href="https://github.com/gomespereira"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
          ,&nbsp;
          <a
            className="transition duration-300 ease-in-out hover:bg-red-600"
            href="https://twitter.com/gomespereira"
            target="_blank"
            rel="noopener noreferrer"
          >
            Twitter
          </a>
          ,&nbsp;
          <a
            className="transition duration-300 ease-in-out hover:bg-red-600"
            href="https://www.linkedin.com/in/gomespereira/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Linkedin
          </a> or&nbsp;
          <a
            className="transition duration-300 ease-in-out hover:bg-red-600"
            href="https://drive.google.com/file/d/1WYcNyRP_L-CAAQ5ximiQeBxjDfQ8Mh5U/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
          >
            my resume
          </a>
          .
        </p>
        <p>Let's work together!</p>
      </section>
    </Layout>
  )
}
