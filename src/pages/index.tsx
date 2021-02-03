import {Layout} from '@components'

export const config = {amp: 'hybrid'}

const Index = (): React.ReactNode => {
  return (
    <Layout>
      <section className="section--hero">
        <h1 className="hero">
          Koen is a&nbsp;
          <span>Developer</span>
        </h1>
      </section>
    </Layout>
  )
}

export default Index
