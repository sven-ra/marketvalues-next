import Head from 'next/head'
import styles from 'components/Content.module.scss'

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
        I llike to scout online real estate markets for interior design
        inspiration (I mostly browsed the Estonian city24.ee for this project).
        I admit some of the images have given me ironic pleasure, I have gasped
        at many stucco-covered fake marble bathrooms. But there are also
        interiors with so much heart and expression which I truly admire,
        interiors that I cannot find anywhere else. My favourites tend to be in
        the cheap section again, where it is obvious that the interiors are not
        adding anything to the price of the place. There haven’t been any real
        estate agents to ‘clean up’ and style the rooms for the assumed popular
        taste.
      </p>
      <p>
        After having looked at so many pictures of the decorated homes, I have
        started to recognize rooms with more confident compositions. There is a
        lot to learn about the intent of decoration that makes a space
        convincing or not, no matter what theme is at play or what taste
        difference I have with the decorator.
      </p>

      <p>
        These spaces I’ve never seen represented in design magazines. Not on
        Pinterest boards. Not documented by many museums.
      </p>
    </div>
  )
}
