import styles from 'components/Content.module.scss'

export default () => {
  return (
    <div className={styles.content}>
      <h1>
        Market no 1:
        <br />
        streetmarket Keskturg in Tallinn
      </h1>
      <p>
        There is a market across the street from my home in Tallinn where I go
        for seasonal food produce – the market season explodes with strawberries
        in June and wraps up with sauerkraut before Christmas. In the early
        spring there is a lady selling plant sprouts for gardening, little baby
        plants in wet soil wrapped in old newspaper cones. Racks of clothes that
        change their patterns with the season. Slices of unidentified pickles in
        jars stacked like layered cake to make pretty stripes. Fresh bread
        smells float around, either fresh pirogi or a Georgian lavash.
      </p>
      <p>
        This market looks so unkept and ‘dirty’ compared to the gentrified
        markets but has become so dear to me because it is one of the rare
        places in the city not yet designed by any one person or architecture
        team. It has organically and sporadically grown over time, with very DIY
        kiosks and little shelters to sell from. It is not (yet) sterilized and
        designed, not yet a market for ‘political consumption’ [1]. It is still
        too ugly and dirty for that, unfiltered, sellers only validated by the
        trust they have built with their customers, not a lot of inspection is
        involved.
      </p>

      <ol className={styles.footnotes}>
        <li>
          From “Do we have a moral obligation to the market?” by Marija Nemčenko
          in Kajet magazine (no 3). She is describing a ‘Westernized’ and
          sterilised version of a street market, which is “presenting a
          hyper-ethical way of participating in capitalism that is masked as
          political action. And even if in some cases it might re-introduce
          local produce, traditional farming, or crafted knowledge, it does so
          within a framework of luxury, and not necessity. … one can consume in
          a sanitised and modern fashion, while fully embedding the practice
          –consciously or not– in the Western understanding of trade. One
          consumes not only the product, but a glossy shell of political
          connotations attached to it.
        </li>
      </ol>
    </div>
  )
}
