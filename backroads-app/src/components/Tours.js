import React from 'react';
import Title from './Title';
import { FEATUREDTOURS } from '../data';
function Tours() {
  return (
    <section className="section" id="featured">
      <Title title="featured" spanTitle="tours" />

      <div className="section-center featured-center">
        {FEATUREDTOURS.map((tour) => (
          <article className="tour-card" key={tour.id}>
            <div className="tour-img-container">
              <img src={tour.image} className="tour-img" alt="" />
              <p className="tour-date">{tour.date}</p>
            </div>
            <div className="tour-info">
              <div className="tour-title">
                <h4>{tour.title}</h4>
              </div>
              <p>{tour.description}</p>
              <div className="tour-footer">
                <p>
                  <span>
                    <i className="fas fa-map"></i>
                  </span>
                  {tour.location}
                </p>
                <p>{tour.duration}</p>
                <p>{tour.price}</p>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Tours;
