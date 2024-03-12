import React from 'react'
import Toran from '../assets/images/toran.png'
import news from '../Data/latestnews.json'
import appeals from '../Data/appeal.json'
import Gate from '../assets/images/gate.png'

const LatestNews = () => {
    return (
        <section>
            <div className="tablewrap">
                <div className='toran'>
                    <img src={Gate} alt="" />
                </div>
                <div className="wrap">
                    <div className="latest-news">
                        <div className='headin'>
                            <h3>Latest News</h3>
                        </div>
                        <div className="contains">
                            <ul>
                               {news.map((news, index) => <li key={index}>{news.data}<span className='date'>{news.date}
                                </span></li>)}
                            </ul>
                        </div>

                        <button className='button-62'>Read More</button>
                    </div>
                    <div className="latest-news">
                        <div className='headin'>
                            <h3>Appeal</h3>
                        </div>
                        <div className="contains">
                            <ul>
                               {appeals.map((appeal, index) => <li key={index}>{appeal.data}<button className='down-btn'>Download
                                </button></li>)} 
                            </ul>
                        </div>

                        <button className='button-62'>Read More</button>
                    </div>
                </div>
            </div>

        </section>
    )
}

export default LatestNews
