import styles from 'components/Content.module.scss'

export default () => {
  return (
    <article className={styles.content}>
      <div>
        <h1>Market Values: Mapping design values from post-Soviet markets</h1>
        <p>
          This project gets its energy from a realization I had during my
          studies, that I have spent most of my design-related life working hard
          to fill my brain with Western design principles. I come from Estonia
          but have studied in art universities in the Netherlands and in Sweden.
          I studied design based on the assumption that I want to relate to my
          material world in the same way that the Western design canon proposes.
          Referencing Bauhaus or ‘scandi’ design has high currency in the
          culture that I come from, it is the way to add value to objects.
          Modernism has high value maybe even more so culturally than
          economically. But each time I practice those values, I feel a burn in
          my fingers. I grieve for the energy that I didn’t put into creating
          something more attuned to my own surroundings, didn’t observe and
          synthesize with conditions closer to me. Each time I inhabit that
          educated designer role and echo the Western canon, it feels like I am
          deleting something as much as I am creating something “new”. So this
          page is a map of design values I have found surfing around at my local
          markets. Design values that float in the cheap sections, flourishing
          despite their low capital value.
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
