import Layout from 'components/layout'

export default function About() {
  return (
    <Layout>
      <section className="space-y-4 mr-6 ml-6 md:mr-64 md:ml-64">
        <span id="heading" className="bg-red-600 text-2xl font-bold">My professional story</span>
        <p>
          I started my carrer in 2005 in the Foreign Trading business, doing operations
          all over the world and passing through countries like Angola, China, Hong Kong
          and South Africa.
        </p>
        <p>
          In 2015 I decided to move back to Brazil and started to give consulting to small
          businesses and entrepreneurs.
        </p>
        <p>
          A year later I wrote my first line of code. I started with&nbsp;
          <span className="bg-gray-300 text-green-500 font-bold">Node.js</span>
          &nbsp;and&nbsp;
          <span className="bg-gray-300 text-gray-800 font-bold">Express</span>
          , then&nbsp;
          <span className="bg-gray-300 text-red-700 font-bold">AngularJS</span>
          ,&nbsp;
          <span className="bg-gray-300 text-green-600 font-bold">Vue.js</span>
          , and finally landing on&nbsp;
          <span className="bg-gray-300 text-blue-600 font-bold">React</span>
          .
        </p>
      </section>
    </Layout>
  )
}
