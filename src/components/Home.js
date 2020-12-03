import React from 'react'
import {Link} from 'react-router-dom'


export const Home = () => {
    return (
        <div className='home'>
        <div className='homeContainer'>
            <Link to='/beers' className='link'>
                <img src='https://industry.airliquide.com.au/sites/industry_au/files/styles/905x345/public/2019/10/30/beerbottle_banner.jpg?itok=YEnsm4kh' alt='beers'/>
                <h2>All Beers</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse et hendrerit erat. Aliquam blandit arcu eget neque ultricies, et mollis purus tincidunt. Nulla dignissim ante felis, non tristique lectus gravida eu. Sed vel tortor enim. Sed vitae purus nec justo.</p>
            </Link>
            
        </div>
        <div className='homeContainer'>
            <Link to='/random-beer' className='link'>
                <img src='https://lh3.googleusercontent.com/proxy/opbeE1kztRM1nRts7Q5o7oCq-6si8e3fh-HZJrHfQhneWxMAvN56fhPgkQyp8igUYbZZKQvg-9VZbd7BVpV6uwvKmcYRxQ' alt='random beer'/>
                <h2>Random Beer</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse et hendrerit erat. Aliquam blandit arcu eget neque ultricies, et mollis purus tincidunt. Nulla dignissim ante felis, non tristique lectus gravida eu. Sed vel tortor enim. Sed vitae purus nec justo.</p>
            </Link>
        
        </div>
        <div className='homeContainer'>
            <Link to='/new-beer' className='link'>
                <img src='https://aristocratpub.com/wp-content/uploads/2017/05/banner.jpg' alt='new beer'/>
                <h2>New Beer</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse et hendrerit erat. Aliquam blandit arcu eget neque ultricies, et mollis purus tincidunt. Nulla dignissim ante felis, non tristique lectus gravida eu. Sed vel tortor enim. Sed vitae purus nec justo.</p>
            </Link>
        </div>
            
        </div>
    )
}
