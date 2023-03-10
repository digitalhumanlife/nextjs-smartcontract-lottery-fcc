import Head from "next/head"
import Image from "next/image"
import styles from "@/styles/Home.module.css"
import ManualHeader from "../components/ManualHeader"

export default function Home() {
    return (
        <div className={styles.container}>
            <Head>
                <title>Smart Contract Lottery</title>
                <meta name="description" content="Our Smart Contract Lottery" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            Hello!
            <ManualHeader />
            {/* header / connect button/ nav bar */}
        </div>
    )
}
