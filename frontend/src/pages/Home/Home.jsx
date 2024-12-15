import React from 'react'
import './home.css';
import Banner from '../../components/Banner/Banner';
import Testimonials from '../../components/Testimonials/Testimonials';
import BestSeller from '../../components/BestSeller/BestSeller';
import LimitiedEditions from '../../components/LimitedEditions/LimitiedEditions';
import LastBlogArticles from '../../components/LastBlogArticles/LastBlogArticles';

const Home = () => {
  return (
    <section className="home__container">
      <Banner/>
      <BestSeller/>
      <LimitiedEditions/>
      <Testimonials/>
      <LastBlogArticles/>
    </section>
  )
}

export default Home