import Head from 'next/head'
import { Inter } from 'next/font/google'
import ReactDropDown from './react-dropdown-component'
import { getDungeonsAndDragonsClasses } from '@/utilities/utilities'

const inter = Inter({ subsets: ['latin'] })

export default function ReactDropdownHome() {
    const optionValues = getDungeonsAndDragonsClasses();
    return (
        <>
            <Head>
                <title>React Dropdown Component</title>
                <meta name="description" content="React Dropdown Component" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main>
                <ReactDropDown options={optionValues} />
            </main>
        </>
    )
}
