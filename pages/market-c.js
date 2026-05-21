import Head from 'next/head'
import styles from 'components/Content.module.css'

export default () => {
  return (
    <div className={styles.content}>
      <Head>
        <title>Market Values</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <h1>
        Market C:
        <br />
        street market
      </h1>
      <p>
        There is a market across the street from my home in Tallinn where I go
        for seasonal food produce – the market season explodes with fresh
        strawberries in June and wraps up with jams and sauerkraut before
        Christmas. The racks of clothes change their patterns with the season,
        there is fresh bread smell fighting with the fish smell from the kiosk
        next to it. This market looks so unkept and ‘dirty’ compared to the
        gentrified markets but has become so dear to me because it is one of the
        rare places in the city that is not yet designed by any one person or
        one team. It has organically and sporadically grown over time, with very
        DIY kiosks and little shelters to sell from. It is not (yet) sterilized
        and designed, not yet a market for ‘political consumption’ [1]. It is
        still too ugly and dirty for that, unfiltered, sellers only validated by
        the trust they have built with their customers, not a lot of inspection
        seems to be involved.
      </p>
      <p>*</p>
      <p>
        When looking at different patterns for long enough, I started to slowly
        unpeel the variety of pattern ‘languages’ among them. Working in graphic
        design, you always deal with image and text, ways of combining them. I
        wanted to use text in a way that is borderline ornamental, repetitive
        and mantra-like. To give text a more immersive role, where it is not
        next to images, but really swims together with other visual elements.
      </p>
      <p>
        With the patterns I noticed I aim for a level of complexity that would
        be difficult for my brain to solve at a quick glance, hard to ‘see
        through’, although seductive for the senses at the same time. I found
        there is an ancient legacy similar to this called ‘interlace’, which
        comes from knots and other forms of decorative ropework and has been
        described as a way of protecting objects from ‘an evil gaze’. For
        example on the front and back of a book, to finalize and package a piece
        of work into a safe spell:
      </p>
      <p>
        “Knots have a long-established place in the lore of supernatural attack
        and defence. A curse or a spell was often ‘secured’ with a knot, and
        could only be disarmed by physically untying it. … As a permanent
        ‘knot,’ it [the interlace] defied the evil-doer to untie it mentally by
        tracing out its windings and crossings, as one might solve a difficult
        maze.”[2]
      </p>

      <ol className={styles.footnotes}>
        <li>
          ‘Do we have a moral obligation to the market?’ by Marija Nemčenko,
          Kajet magazine no 3. She describes a ‘Westernized’ and sterilised
          version of a street market, which is “presenting a hyper-ethical way
          of participating in capitalism that is masked as political action …
          one can consume in a sanitised and modern fashion, while fully
          embedding the practice … in the Western understanding of trade. One
          consumes not only the product, but a glossy shell of political
          connotations attached to it.”
        </li>
        <li>The Language of Ornament, James Trilling, pp 134.</li>
      </ol>
    </div>
  )
}
