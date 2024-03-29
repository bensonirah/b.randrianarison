import Head from "next/head";
//import styles from "./layout.module.css";
import Link from "next/link";
import Header from "./header";
import Footer from "./footer";

export const website = {
  defaultTitle: "Home",
  author: "Bensonirah",
};

export default function Layout({ children, home }) {
  return (
    <div>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />

        <meta
          name="description"
          content="Learn how to build a personal website using Next.js"
        />
        <meta
          property="og:image"
          content={`https://og-image.vercel.app/${encodeURI(
            website.defaultTitle
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={website.defaultTitle} />
        <meta name="twitter:card" content="summary_large_image" />
        {/* <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/> */}
        <link
          href="https://fonts.googleapis.com/css2?family=Fira+Code:wght@300&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
