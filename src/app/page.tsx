import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";

export default async function Home() {
  // wait for 5 seconds
  await new Promise((resolve) => setTimeout(resolve, 5000));

  return (
    <main className={styles.main}>
      <Link href="/test/1"> Go to dynamic route with loading.tsx</Link>
      <Link href="/test"> Go to regular route with loading.tsx</Link>
    </main>
  );
}
