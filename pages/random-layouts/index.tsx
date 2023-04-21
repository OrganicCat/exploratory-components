import Head from "next/head";
import styles from './RandomLayouts.module.css'

export default function RandomLayouts() {
    return (
        <>
            <Head>
                <title>React Dropdown Component</title>
                <meta name="description" content="React Dropdown Component" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            {/* Goals
                - Add some nice colors and styles
                - create some common pattern layouts
                - make it responsive
                - use flexbox and grid
            */}
            <main>
                <h1>Fun clean layouts, with style!</h1>

                <div className={styles.centerMain}>
                    <div className={styles.topSection}>
                        <div className={styles.itemBox}>Top Section</div>
                    </div>
                    <div className={styles.middleSection}>
                        <div className={`${styles.itemColumn} ${styles.itemBox}`}>Left Column</div>
                        <div className={`${styles.itemColumn} ${styles.middleColumn}`}>Middle Column</div>
                        <div className={`${styles.itemColumn} ${styles.itemBox}`}>Right Column</div>
                    </div>
                    <div className={styles.bottomSection}>
                        <div className={styles.itemBox}>Bottom Section</div>
                    </div>
                </div>
            </main>
        </>
    )
}