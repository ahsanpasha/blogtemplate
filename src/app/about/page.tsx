"use client";
import Link from 'next/link';

export default function AboutPage() {
    return (
        <div className="section">
            <div className="block-content top-bot-margin">
                <div className="section-title-line">
                    <h1 className="section-title">Our Story</h1>
                    <div className="red-line-small"></div>
                    <div className="black-line-big"></div>
                </div>

                <div className="about-page-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '60px', marginTop: '40px' }}>
                    <div className="about-image-block">
                        <img
                            src="https://cdn.prod.website-files.com/601b0e022dc24f4ea11206ad/6023aa8353e96095e0e03eea_About%20Me%20Image%20(1).png"
                            alt="About Us"
                            style={{ width: '100%', height: 'auto', borderRadius: '4px' }}
                        />
                    </div>
                    <div className="about-content-block">
                        <h2 style={{ fontSize: '32px', marginBottom: '20px' }}>Hello There!</h2>
                        <p className="paragraph" style={{ marginBottom: '20px', lineHeight: '1.8' }}>
                            Welcome to <strong>Blogy</strong>! My name is Nerrisa and it’s nice to meet you! I’m a wife and mom just trying to make the most of what our family has.
                            If you are looking for real life and not perfection, this blog is for you! I love to write about simple living, off-grid adventures, and delicious travel foods.
                        </p>
                        <p className="paragraph" style={{ marginBottom: '20px', lineHeight: '1.8' }}>
                            Phasellus porttitor sapien a purus venenatis condimentum. Nunc lectus ipsum, laoreet ut efficitur. Phasellus porttitor sapien a purus venenatis condimentum.
                            In hac habitasse platea dictumst. Vivamus sed arcu ut eros scelerisque pharetra.
                        </p>
                        <div className="divider" style={{ margin: '30px 0' }}></div>
                        <h3 style={{ fontSize: '24px', marginBottom: '15px' }}>Our Mission</h3>
                        <p className="paragraph" style={{ lineHeight: '1.8' }}>
                            Our mission is to share authentic stories and practical tips for those who want to live a more intentional and adventurous life.
                            Whether it's building an off-grid cabin or finding the best street food in a foreign city, we're here to document the journey.
                        </p>

                        <div className="social-media-grid" style={{ marginTop: '40px' }}>
                            <a href="https://www.facebook.com/" target="_blank" className="social-media-block w-inline-block"><img src="https://cdn.prod.website-files.com/601b0e022dc24f4ea11206ad/6023ab64e95830059ace9895_Facebook.svg" loading="lazy" alt="" className="social-media-icon" /></a>
                            <a href="https://twitter.com/home" target="_blank" className="social-media-block w-inline-block"><img src="https://cdn.prod.website-files.com/601b0e022dc24f4ea11206ad/6023ab644309053082d9f6fe_Twitter.svg" loading="lazy" alt="" className="social-media-icon" /></a>
                            <a href="https://www.instagram.com/" target="_blank" className="social-media-block w-inline-block"><img src="https://cdn.prod.website-files.com/601b0e022dc24f4ea11206ad/6023ab649e7d4121a15b8584_Instagram.svg" loading="lazy" alt="" className="social-media-icon" /></a>
                            <a href="https://www.pinterest.com/" target="_blank" className="social-media-block w-inline-block"><img src="https://cdn.prod.website-files.com/601b0e022dc24f4ea11206ad/6023ab646c6ed0595f358bae_Pinterest.svg" loading="lazy" alt="" className="social-media-icon" /></a>
                            <a href="https://www.youtube.com/" target="_blank" className="social-media-block w-inline-block"><img src="https://cdn.prod.website-files.com/601b0e022dc24f4ea11206ad/6023ab6439eea8b40568b6a8_Youtube.svg" loading="lazy" alt="" className="social-media-icon" /></a>
                        </div>
                    </div>
                </div>
            </div>

            <style jsx>{`
        @media screen and (max-width: 767px) {
          .about-page-grid {
            grid-template-columns: 1fr !important;
            gap: 30px !important;
          }
        }
      `}</style>
        </div>
    );
}
