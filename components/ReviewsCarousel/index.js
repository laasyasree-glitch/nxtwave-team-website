import {Component} from 'react'

import './index.css'

class ReviewsCarousel extends Component {
  state = {
    currentActiveIndex: 0,
  }

  updateStateWhenRightArrow = () => {
    const {currentActiveIndex} = this.state
    const {reviewsList} = this.props

    if (currentActiveIndex < reviewsList.length - 1) {
      this.setState(prevState => ({
        currentActiveIndex: prevState.currentActiveIndex + 1,
      }))
    }
  }

  toRenderActiveReview = review => {
    const {imgUrl, username, companyName, description} = review

    return (
      <div className="review-container">
        <img src={imgUrl} alt={username} className="img" />
        <p className="username">{username}</p>
        <p className="company">{companyName}</p>
        <p className="description">{description}</p>
      </div>
    )
  }

  updateStateWhenLeftArrow = () => {
    const {currentActiveIndex} = this.state

    if (currentActiveIndex > 0) {
      this.setState(prevState => ({
        currentActiveIndex: prevState.currentActiveIndex - 1,
      }))
    }
  }

  render() {
    const {reviewsList} = this.props
    const {currentActiveIndex} = this.state
    const currentReviewDetails = reviewsList[currentActiveIndex]

    return (
      <div className="bg">
        <div className="card">
          <button
            className="arrow-button"
            type="button"
            onClick={this.updateStateWhenLeftArrow}
            testid="leftArrow"
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/left-arrow-img.png"
              alt="left arrow"
            />
          </button>
          {this.toRenderActiveReview(currentReviewDetails)}
          <button
            type="button"
            onClick={this.updateStateWhenRightArrow}
            testid="rightArrow"
            className="arrow-button"
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/right-arrow-img.png"
              alt="right arrow"
            />
          </button>
        </div>
      </div>
    )
  }
}

export default ReviewsCarousel
