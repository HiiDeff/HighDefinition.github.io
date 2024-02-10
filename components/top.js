import Head from "next/head";

export default function Top({ name }) {
  return (
    <Head>
      <title>High Definition | {name}</title>
      <meta
        name="description"
        content="We are First Tech Challenge (FTC) Team 18225 High Definition, a 4th year veteran robotics team from Bellevue, Washington composed of 14 enthusiastic students grades 7-12. Our mission is to promote STEM and FIRST within our community to inspire the next generation of innovators to solve challenges of the future! We spread mechanical, programming, business, and other practices within the community to ensure their success."
      />

      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, minimum-scale=1"
      />
      <meta property="og:image" content="/logo.png" />

      <link rel="icon" href="/logo.png" />
    </Head>
  );
}
