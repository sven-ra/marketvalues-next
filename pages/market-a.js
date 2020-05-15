import Head from 'next/head'
import styles from 'components/Content.module.scss'

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
        second hand markets where you can buy and sell anything. These places
        are very messy and complex, but over time I can extract a feeling for
        the local material world: the aesthetic history of the area, the
        emotional geography of what’s currently hot and what’s not.
      </p>
      <p>
        To deep-dive here (I did my research on Estonian osta.ee) it takes a lot
        of scrolling, but I have seen things here that my eyes do not recognize.
        In this image-fatigued online life, it’s a rare treat.
      </p>
      <p>
        I like to look among the cheap stuff. Maybe it’s a greedy instinct to
        potentially own things, but I’d like to think it’s more of a way to
        excercise my taste. Like a workout for the brain, trying to appreciate
        something that currently has low market value. Illusion or not, makes me
        feel like the choice was truely mine, nobody told me what to ‘want’.
      </p>

      <p>
        Because of the low prices, seems fair to conclude these objects don’t
        hold any value in the current design game. The amateur craft in the
        cheap section has to be doing something wrong because the amount of care
        that goes into making these objects would immediately have more ‘market
        value’ if they were made in the right style and function.
      </p>
    </div>
  )
}
