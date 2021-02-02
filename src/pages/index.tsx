import {Layout} from '@components'

export const config = {amp: 'hybrid'}

const Index = (): React.ReactNode => {
  return (
    <Layout>
      <main>
        <section>
          <h1 className="hero">
            Koen is a&nbsp;
            <span>Developer</span>
          </h1>
        </section>
      </main>
    </Layout>
  )
}

export default Index
