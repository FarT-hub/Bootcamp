import React from 'react';
import SlideFacts from "./SlideFacts";
import { Swiper, SwiperSlide, } from 'swiper/react';
import SwiperCore, { Navigation, Pagination } from 'swiper';
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import './Facts.scss';

SwiperCore.use([Navigation, Pagination]);

const Facts = ({title, slides}) => {
    const factsSlides = slides.map((slideInfo) => <SwiperSlide key={slideInfo.id}>
        <SlideFacts item={slideInfo}/>
    </SwiperSlide>);

    return (
        <section id="facts" className="facts container" >

            <h2 className="facts-title">{title}</h2>
            <div className="swiper-button-prev"/>
            <div className="container">
            <Swiper
                navigation={{
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                }}
                pagination={{
                    el: '.facts-pagination',
                    clickable: true,
                    renderBullet: function (index, className) {
                    return `<span class="facts-pagination-bullet ${className}"></span>`;
                  },
                }}
                spaceBetween={150}
                slidesPerView={3}
                slidesPerGroup={3}
                loop={true}
                loopFillGroupWithBlank={true}
                >
                {factsSlides}
            </Swiper>
            </div>

            <div className="swiper-button-next"/>
            <div className="facts-pagination"/>


        </section>
    );
};

export default Facts;