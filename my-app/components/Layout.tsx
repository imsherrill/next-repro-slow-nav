import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import styles from "./Layout.module.css"; // Import CSS module for styling

export function Layout({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const handleStart = () => setLoading(true);
    const handleComplete = () => setLoading(false);

    router.events.on("routeChangeStart", handleStart);
    router.events.on("routeChangeComplete", handleComplete);
    router.events.on("routeChangeError", handleComplete);

    return () => {
      router.events.off("routeChangeStart", handleStart);
      router.events.off("routeChangeComplete", handleComplete);
      router.events.off("routeChangeError", handleComplete);
    };
  }, [router]);

  return (
    <div>
      <h1 className={styles.title}>My App</h1>
      {loading && <div className={styles.loader}></div>}
      <div className="border border-green m-1 p-4">{children}</div>
    </div>
  );
}
