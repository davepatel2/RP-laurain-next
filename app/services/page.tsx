'use client';

import Image from 'next/image';
import Navbar from '../components/Navbar';

export default function ServicesPage() {
  return (
    <div className="home-three">
      <section className="hero-section">
        <div className="hero-section__video">
          <Image
            src="/assets/gallerymarina.png"
            alt="Services Header"
            fill
            style={{ objectFit: 'cover' }}
          />
        </div>

        <div className="hero-section__overlay">
          <Image
            src="/assets/logotransparent 1.png"
            alt="Company Logo"
            className="hero-section__logo"
            width={200}
            height={100}
            priority
          />

          <div className="hero-section__top-bar">
            <div className="hero-section__main-text">
              <h1 className="hero-section__company-name">R. P. LAURAIN <br /> & ASSOCIATES</h1>
              <p className="hero-section__incorporated">INCORPORATED</p>
              <p className="hero-section__tagline">APPRAISERS - ANALYSTS - CONSULTANTS</p>
            </div>
          </div>

          <Navbar />
        </div>
      </section>

      <section className="about-section container-xs">
        <div className="main__midsection__row_three">
          <div className="about-section__info">
            <div className="about-section__text">
              <p>This is the Services page. You can detail the types of real estate appraisal services offered here.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
