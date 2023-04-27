import Head from 'next/head'
import { Inter } from 'next/font/google'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
    return (
        <>
            <Head>
                <title>Explatory App Components</title>
                <meta name="description" content="Exploratory App Components" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main>
                <h1>Welcome to Lee's explatory project landscape!</h1>
                <div>
                    <Link href="/react-dropdown">React Dropdown</Link>
                    <br />
                    <Link href="/random-layouts">Random Layouts</Link>
                    <br />
                    <Link href="/render-props">Render Props</Link>
                    <br />
                    <Link href="/render-props-replacement">Render Props Replacement</Link>
                </div>
            </main>
        </>
    )
}
