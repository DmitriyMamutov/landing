import Head from "next/head";
import useTranslation from "next-translate/useTranslation";
import Home from "../containers/Home";

export default function HomePage() {
  const { t } = useTranslation("index");

  return (
    <div>
      <Head>
        <title>{t("metaTitle")}</title>
        <meta name="description" content={t("metaDescription")} />
      </Head>
      <Home />
    </div>
  );
}
