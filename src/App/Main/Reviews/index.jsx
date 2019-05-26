// @flow
import React, { Component } from 'react'
import type { Reviews as ReviewsType } from 'types'
import withConnect from './connector'
import style from './style'

type Props = {|
  +reviews: ReviewsType,
  +onGetReview: () => void
|}
class Reviews extends Component<Props> {
  static defaultProps = {
    reviews: []
  }

  render () {
    const { reviews, onGetReview } = this.props

    return (
      <div className={style.wrapper}>
        <h1>Reviews list</h1>
        <p>
          <strong>The inital reviews comes from reducer</strong> where the data is static. However, <strong>the button bellow triggers a XHR call which returns a new review</strong>.
          In other words, each time the button is clicked, a new dynamic review aggregate the existing reviews list.
        </p>
        <p className={style.limit}>
          Reviews quantity limit: <span>10</span>
        </p>
        <br />

        <div className={style.wrapperReviews}>
          { reviews
            .filter(review => !review.isPrivate)
            .map(({ author, time, text }: Review, i: number) => (
              <section key={`${time}-${i}`} className={style.review}>
                <span className={style.sticker}>
                  { i + 1 }
                </span>
                <h2 className={style.author}>{ author || 'Unknown' }</h2>
                <p className={style.time}>at: { time }</p>
                <p dangerouslySetInnerHTML={{ __html: text }} />
              </section>
            ))}
        </div>

        { reviews.length <= 10 && (
          <div className={style.wrapperLoadMore}>
            <button onClick={onGetReview} type='button'>
              Load additional review
            </button>
          </div>
        )}
      </div>
    )
  }
}

export default withConnect(Reviews)
