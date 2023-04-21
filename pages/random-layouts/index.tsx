import Head from "next/head";
import styles from './RandomLayouts.module.css'

// generate 9 dungeons and dragons class objects with names and values in an array
const dndClasses = [
    { name: 'Barbarian', value: 'barbarian' },
    { name: 'Bard', value: 'bard' },
    { name: 'Cleric', value: 'cleric' },
    { name: 'Druid', value: 'druid' },
    { name: 'Fighter', value: 'fighter' },
    { name: 'Monk', value: 'monk' },
    { name: 'Paladin', value: 'paladin' },
    { name: 'Ranger', value: 'ranger' },
    { name: 'Rogue', value: 'rogue' },
];


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
                <div className={styles.centerMain}>
                    <div className={styles.topSection}>
                        <div className={styles.itemBox}>Top Section</div>
                    </div>
                    <div className={styles.middleSection}>
                        <div className={`${styles.sideColumn}`}>
                            <div className={styles.itemBox}>Left Column</div>
                        </div>
                        <div className={`${styles.itemColumn} ${styles.middleColumn}`}>
                            {dndClasses.map((dndClass, index) => (
                                <div key={index} className={styles.innerItemBox}>
                                    {dndClass.name}
                                </div>
                            ))}
                        </div>
                        <div className={`${styles.sideColumn}`}>
                            <div className={styles.itemBox}>Right Column</div>
                        </div>
                    </div>
                    <div className={styles.bottomSection}>
                        <div className={styles.itemBox}>Bottom Section</div>
                    </div>
                </div>
            </main >
        </>
    )
}