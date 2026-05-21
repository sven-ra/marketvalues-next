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
        Market B:
        <br />
        online real estate
      </h1>
      <p>
        I like to scout online real estate markets for interior design
        inspiration (I mostly browsed the Estonian city24.ee for this project).
        I admit some of the images have given me ironic pleasure, I have gasped
        at many stucco-covered fake marble bathrooms. But there are also
        interiors with so much heart and expression which I truly admire,
        interiors that I cannot find anywhere else. In the lowest price section
        it is obvious that the interiors are not adding anything to the price of
        the place. There haven’t been any real estate agents to ‘clean up’ and
        style the rooms for the assumed popular taste.
      </p>
      <p>
        These spaces I’ve never seen in design magazines. Not on Pinterest
        boards. Not documented by any museums as far as I’ve looked. I’ve only
        met similar spaces in physical reality, undocumented by public design
        discourse.
      </p>
      <p>*</p>
      <p>
        With this project I’ve thought about the transitions that happen in
        these spaces. I see things trying to merge into each other, adding
        stickers and wallpapers and objects creating a buzzing space where the
        different elements hold each other in place. Or little tablecloths on
        every flat surface, mediators betweeen the furniture and the vases.
        These elements are like very rough versions of rococo spaces where you
        almost can’t make the destinction where is the end of the couch and
        beginning of the wall.
      </p>

      <p>
        In terms of graphic design, this makes me think of how the assumed use
        of an image is without any frame. There is a display of sincerity
        attached to that, when keeping things clean, to give a sense that nobody
        is toying with the viewer. But what if the meaningful decorations are
        more honest about the designers role on the page, about the
        photographers role in framing the image, about the person’s role in
        dressing the interior. The inevitable subjectivity all of these roles
        carry.
      </p>
    </div>
  )
}
