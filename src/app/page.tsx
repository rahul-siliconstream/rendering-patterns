import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";

export default function Home() {

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <Link href='/client'><button className={styles.button}>Client Side Rendering</button></Link>
        <Link href='/server'><button className={styles.button}>Server Side Rendering</button></Link>
        <Link href='/ssg'><button className={styles.button}>Static Site Generation</button></Link>
        <Link href='/isr'><button className={styles.button}>Incremental Static Generation</button></Link>
      </main>
    </div>
  );
}
