import Image from 'next/image';
import styles from './page.module.css';

export default function Home({
  searchParams
}: {
  searchParams: { error?: string };
}) {
  const showError = searchParams.error === 'invalid';

  return (
    <main className={styles.pageShell}>
      <section className={styles.card}>
        <a
          href="https://antaresshipping.com"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Visit Antares Shipping website"
        >
          <Image
            src="https://antaresshipping.com/wp-content/uploads/2023/12/Antares-Ship-Agent.webp"
            alt="Antares Ship Agency logo"
            width={260}
            height={95}
            priority
            className={styles.logo}
          />
        </a>

        <p className={styles.description}>
          This is the Antares Operations Team intraweb Apps Manager. For full company information,
          please visit our website.
        </p>

        <form className={styles.form} action="/api/login" method="POST">
          <label className={styles.label} htmlFor="username">
            Username
          </label>
          <input className={styles.input} id="username" name="username" type="text" required />

          <label className={styles.label} htmlFor="password">
            Password
          </label>
          <input
            className={styles.input}
            id="password"
            name="password"
            type="password"
            autoComplete="current-password"
            required
          />

          {showError ? <p className={styles.error}>Invalid username or password.</p> : null}

          <button className={styles.button} type="submit">
            Login
          </button>
        </form>
      </section>
    </main>
  );
}
