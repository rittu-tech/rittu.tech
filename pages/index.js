import Head from 'next/head'
import Posts from '../src/components/home/posts';
import Layout from "../src/components/layout";

export default function Home() {
  return (
    <Layout>
      <Head>
        <title> Rittu</title>
        <link rel="icon" href="/favicon"/>
      </Head>
      <Posts/>
    </Layout>

  )
}
