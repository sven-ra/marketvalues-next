import Head from 'next/head'
import styles from 'components/Content.module.scss'

export default () => {
  return (
    <article className={styles.content}>
      <Head>
        <title>Market Values</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div>
        <h1>Market Values: Mapping design values from post-Soviet markets</h1>
        <p>
          This page is a mapping of design values I have found browsing around
          local markets in Estonia, both physical and online. Through continous
          collecting of mostly cheap objects (which don’t identify as ‘design’)
          I have learned methods and values that I find to be missing in the
          current professional design discourse. Through this research I have
          found ideas for emotional sustainability, for creative reuse, I have
          found admirable relationships to time and materials through decorative
          practices. All of this I find important to synthesize into
          contemporary design tools and bring into my design practice.
        </p>
        <p>
          The project got its energy from a realization I had during my Master’s
          studies in Sweden, that I used to study design based on the assumption
          that I want to relate to my material world in the same way that the
          Western design canon proposes. I come from Estonia but have previously
          studied design also in the Netherlands. Referencing Bauhaus or
          ‘scandi’ design has high currency in the culture that I come from, it
          is the way to add value to objects. Modernism has high value maybe
          even more so culturally than economically.
        </p>
        <p>
          I have learned a lot from design theories rooted in modernism and born
          mostly in distant realities, but haven’t really dared to indulge in
          the attraction I feel towards local knick knack and domestic
          creativity, the design values I find outside of tasteful territories.
          So this page is to make up for that education gap, looking more into
          the design practices close to my own peripheral living and working
          conditions in post-Soviet capitalism.{' '}
        </p>
        <p>
          With this project, I want to celebrate the design values these markets
          embody and learn from them, even if unvalidated still by the Western
          design canon.
        </p>
      </div>
      <div className={styles.contact}>
        <h4>
          Contact:
          <br />
          Brit Pavelson
        </h4>

        <p>
           instagram:
          <a
            href="https://www.instagram.com/pafkabrit/"
            rel="noofollow noopener"
            target="_blank"
          >
            &nbsp;@pafkabrit
          </a>
          <br /> <a href="mailto:brit@viieline.ee">brit@viieline.ee</a>
          <p>Code by: Sven Raju</p>
        </p>
      </div>
      <footer>
        <p>
          This page is a Master’s degree project
          <br />
          made in Konstfack, Stockholm and Tallinn, in 2020
        </p>
      </footer>
    </article>
  )
}
