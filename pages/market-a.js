import Head from 'next/head'
import styles from 'components/Content.module.css'

export default () => {
  return (
    <div className={styles.content}>
      <Head>
        <title>Market A: online second hand</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      <h1>
        Market A:
        <br />
        online second hand
      </h1>
      <p>
        The few times I have moved to another country, I quickly look for the
        local ‘ebay’. I think most countries have at least one of these monster
        second hand markets online where you can buy and sell anything. These
        places are very messy and complex, but over time I can extract a feeling
        for the local material world: the aesthetic history of the area, the
        emotional geography of what’s currently hot and what’s not.
      </p>
      <p>
        To deep-dive there (I did my research on Estonian osta.ee) it takes a
        lot of scrolling, but I have seen things there that my eyes do not
        recognize. In this image-fatigued online life, it’s a rare treat.
      </p>
      <p>*</p>
      <p>
        It’s fascinating how disoriented I felt in the middle of the different
        patterned fabrics and clothing I saw at these markets, when I’m at the
        same time capable of judging a pair of jeans at an online store only by
        the colour of its seams. I’ve seen these patterns all my life, but I can
        only guess which of them are dated or what is currently trending, I
        couldn’t fully decipher how to prefer one pattern over another.
      </p>

      <p>
        I’m starting to see how the decorative practices of covering blank
        spaces with patterns, adding ornaments, adding knick-knack, all of this
        is a practice of stitching together people, places and time. Decoration
        has the power to do it by passing our brains and talking straight to our
        senses and memories. Looking at these ladies sitting in patterns of
        nature reminds me how they are making themselves porous to their
        environment, voicing their relationship to the outside world by covering
        themselves and their things. Looking at this decorated world long
        enough, an empty white space can suddenly seem to me a statement of
        silence and detachment as much as anything.
      </p>
    </div>
  )
}
