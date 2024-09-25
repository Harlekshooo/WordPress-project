import React from 'react'
import './latest.css'

const latest = () => {
  return (
    <div className='latestContainer'>
        <div className="latestInnerContainer">
            <div className="latestHeaderSection">
                <h3 className='latestHeader'>Latest WordPress news</h3>
                <a href="#" className='latestHeaderLink'>More news</a>
            </div>

            <section className="latestBodySection">
                <div className="latestBodyItem">
                    <h5 className="latestBodyHeader">WP Engine is not WordPress</h5>
                    <div className="latestBodyItemSection">
                        <a href="#" className='latestBodyItemHeader'>community</a>
                        <span className='latestBodyItemDot'></span>
                        <p className='latestBodyItemDate'>September 21, 2024</p>
                    </div>
                </div>

                <div className="latestBodyItem">
                <h5 className="latestBodyHeader">PDX + WCUS 2024: A Recap</h5>
                    <div className="latestBodyItemSection">
                        <a href="#" className='latestBodyItemHeader'>events</a>
                        <span className='latestBodyItemDot'></span>
                        <p className='latestBodyItemDate'>September 21, 2024</p>
                    </div>
                </div>

                <div className="latestBodyItem">
                <h5 className="latestBodyHeader">Tour the New Learn WordPress</h5>
                    <div className="latestBodyItemSection">
                        <a href="#" className='latestBodyItemHeader'>general</a>
                        <span className='latestBodyItemDot'></span>
                        <p className='latestBodyItemDate'>September 13, 2024</p>
                    </div>
                </div>
            </section>
        </div>
    </div>
  )
}

export default latest