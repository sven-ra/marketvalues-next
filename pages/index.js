import Head from 'next/head'
import styles from 'components/Content.module.css'

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
          This project is a search for an optimistic future scenario in my
          relationship with the graphic design profession I hold. Looking for
          ways to switch in my visual reality and communal memories in order to
          create meaningful, emotionally connected visual expression that would
          be a joy to make.
        </p>
        <p>
          The project got its energy from a realization I had during my studies,
          that I have spent most of my design-related life training my brain
          with Western design principles. I come from Estonia but have studied
          in art universities in Amsterdam and Stockholm. Thing is, before
          studying in Sweden, I didn’t think of myself as not Western. I’ve
          always considered myself European, which sounds the same as Western.
          But I discovered that I can't have ideological discussions with the
          same toolbox that a Scandinavian person my age can. Or that I cannot
          relate to consumer culture in the same manner as a person grown up in
          old capitalism does. I don’t have nostalgia towards clothing brands. I
          don’t know what ‘brand loyalty’ feels like. And so on. My history and
          experience with consumer culture and the designed world is clearly
          different from Western Europe. It sounds like big words, but comes
          down to simple relationship with daily objects. And all of this is
          entirely a subject of design, I feel. I studied design based on the
          assumption that I want to relate to my material world in the same way
          that the Western design canon proposes, but something has gotten itchy
          about it.
        </p>
        <p>
          Referencing Bauhaus or ‘scandi’ design has high currency in the
          culture that I come from. Relating to the heritage of modernism adds
          value maybe even more so culturally than economically. But each time I
          practice those values, I feel a burn in my fingers. I grieve for the
          energy that I didn’t spend on observing and synthesizing conditions
          closer to me. Each time I inhabit that educated designer role and echo
          the Western canon, it feels like I’m deleting something as much as I
          am creating something “new”.
        </p>
        <p>
          That is why I took some time to look at the stuff that has little
          value at various second hand and online markets. Because they must be
          carrying a very different legacy to be that cheap.
        </p>
        <p>x Brit</p>
      </div>
      <div className={styles.contact}>
        <h4>Contact</h4>

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
        </p>
        <p>
          Code by:{' '}
          <a href="https://svenerikraju.ee" target="_blank">
            Sven Raju
          </a>
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
