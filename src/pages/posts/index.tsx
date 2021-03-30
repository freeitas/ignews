import Head from 'next/head'
import styles from './styles.module.scss'

export default function Posts() {
  return (
    <>
      <Head>
        <title>Posts | Ignews</title>
      </Head>

      <main className={styles.container}>
        <div className={styles.posts}>
          <a href="">
            <time>12 de março de 2021</time>
            <strong>Creating a Monorepo with Leana e Yarn workspaces</strong>
            <p>In this guide, you will lean how to create a Monorepo to manaeg multiple packages with a shared</p>
          </a>
          <a href="">
            <time>12 de março de 2021</time>
            <strong>Creating a Monorepo with Leana e Yarn workspaces</strong>
            <p>In this guide, you will lean how to create a Monorepo to manaeg multiple packages with a shared</p>
          </a>
        </div>
      </main>
    </>
  )
}