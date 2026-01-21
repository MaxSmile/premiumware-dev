import Head from "next/head";

export default function Layout({ title, description, children }) {
  return (
    <>
      {(title || description) && (
        <Head>
          {title && <title>{title}</title>}
          {description && <meta name="description" content={description} />}
        </Head>
      )}
      <main>{children}</main>
    </>
  );
}
