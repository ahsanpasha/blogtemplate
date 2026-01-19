"use client";
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { Post } from '@/data/posts';

export default function Home() {
  const [activeTab, setActiveTab] = useState('Tab 1');
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = 3;

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % totalSlides);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);

  const [allPosts, setAllPosts] = useState<Post[]>([]);
  const [latestPosts, setLatestPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchPosts() {
      try {
        const response = await fetch('/api/posts');
        const data = await response.json();
        if (data.status === 'success') {
          const postsData = data.payload;
          setAllPosts(postsData);
          setLatestPosts(postsData.slice(0, 4));
        }
      } catch (error) {
        console.error('Failed to fetch posts:', error);
      } finally {
        setLoading(false);
      }
    }
    fetchPosts();
  }, []);

  if (loading) {
    return <div className="section" style={{ padding: '100px 0', textAlign: 'center' }}><h3>Loading posts...</h3></div>;
  }

  return (
    <>
      <div className="header-section">
        <div data-delay="4000" data-animation="outin" className="hero-slider w-slider" data-autoplay="false" data-easing="ease" style={{ opacity: 1, transform: 'translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)', transformStyle: 'preserve-3d' }} data-hide-arrows="false" data-disable-swipe="false" data-w-id="ce1e75c6-0ee8-c5a3-bccc-c573f337a042" data-autoplay-limit="0" data-nav-spacing="3" data-duration="500" data-infinite="true" role="region" aria-label="carousel">
          <div className="hero-mask w-slider-mask" id="w-slider-mask-0">
            <div className="hero-post-block w-slide" aria-label="1 of 3" role="group" style={{ transition: 'all', transform: 'translateX(0px)', opacity: currentSlide === 0 ? 1 : 0, visibility: currentSlide === 0 ? 'visible' : 'hidden', position: currentSlide === 0 ? 'relative' : 'absolute', top: 0, left: 0 }}>
              <div className="w-dyn-list">
                <div role="list" className="w-dyn-items">
                  <div role="listitem" className="w-dyn-item">
                    <div className="hero-slider-grid">
                      <div id="w-node-_47317165-5d47-29f1-5927-d9cfe7e23993-e11206ae" className="hero-content-left">
                        <Link href="/travel" className="hero-category-block w-inline-block">
                          <div className="category-line"></div>
                          <div className="post-category">Travel</div>
                        </Link>
                        <Link href="/post/women-at-the-end-of-the-land" className="title-link-block w-inline-block">
                          <h1 className="hero-title">Women at the End of the Land</h1>
                        </Link>
                        <div className="hero-date-time-block">
                          <div className="hero-date">October 22, 2020</div>
                          <div className="hero-dot">•</div>
                          <div className="hero-read-time">7 min read</div>
                        </div>
                        <p className="paragraph">Phasellus porttitor sapien a purus venenatis condimentum. Nunc lectus ipsum, laoreet ut efficitur. Phasellus porttitor sapien a purus venenatis condimentum.</p>
                      </div>
                      <Link id="w-node-_47317165-5d47-29f1-5927-d9cfe7e239a5-e11206ae" href="/post/women-at-the-end-of-the-land" className="hero-image-block w-inline-block">
                        <img alt="" loading="lazy" width="944" src="https://cdn.prod.website-files.com/601b0eabbce5fc78dc318621/601e98759239ef2558d88222_Main%20Post%20Image%208.png" className="hero-image" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="hero-post-block w-slide" aria-label="2 of 3" role="group" aria-hidden={currentSlide !== 1} style={{ transition: 'all', transform: 'translateX(0px)', opacity: currentSlide === 1 ? 1 : 0, visibility: currentSlide === 1 ? 'visible' : 'hidden', position: currentSlide === 1 ? 'relative' : 'absolute', top: 0, left: 0 }}>
              <div className="w-dyn-list" aria-hidden={currentSlide !== 1}>
                <div role="list" className="w-dyn-items" aria-hidden="true">
                  <div role="listitem" className="w-dyn-item" aria-hidden="true">
                    <div className="hero-slider-grid" aria-hidden="true">
                      <div id="w-node-_4ac7eaca-e3a3-7833-a4ec-9bc76fe2c971-e11206ae" className="hero-content-left" aria-hidden="true">
                        <div aria-hidden="true">
                          <Link href="/off-grid" className="hero-category-block w-inline-block" tabIndex={-1} aria-hidden="true">
                            <div className="category-line" aria-hidden="true"></div>
                            <div className="post-category" aria-hidden="true">Off Grid</div>
                          </Link>
                          <Link href="/post/this-tiny-house-is-off-grid-perfection" className="title-link-block w-inline-block" tabIndex={-1} aria-hidden="true">
                            <h1 className="hero-title" aria-hidden="true">This Tiny House Is Off Grid Perfection</h1>
                          </Link>
                          <div className="hero-date-time-block" aria-hidden="true">
                            <div className="hero-date" aria-hidden="true">February 25, 2021</div>
                            <div className="hero-dot" aria-hidden="true">•</div>
                            <div className="hero-read-time" aria-hidden="true">7 min read</div>
                          </div>
                          <p className="paragraph" aria-hidden="true">Phasellus porttitor sapien a purus venenatis condimentum. Nunc lectus ipsum, laoreet ut efficitur. Phasellus porttitor sapien a purus venenatis condimentum.</p>
                        </div>
                      </div>
                      <Link id="w-node-_4ac7eaca-e3a3-7833-a4ec-9bc76fe2c97e-e11206ae" href="/post/this-tiny-house-is-off-grid-perfection" className="hero-image-block w-inline-block" tabIndex={-1} aria-hidden="true">
                        <img alt="" loading="lazy" width="1053" src="https://cdn.prod.website-files.com/601b0eabbce5fc78dc318621/60302d12c924de6cd28f2b41_Main%20Post%20Image%2011.png" className="hero-image" aria-hidden="true" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="hero-post-block w-slide" aria-label="3 of 3" role="group" aria-hidden={currentSlide !== 2} style={{ transition: 'all', transform: 'translateX(0px)', opacity: currentSlide === 2 ? 1 : 0, visibility: currentSlide === 2 ? 'visible' : 'hidden', position: currentSlide === 2 ? 'relative' : 'absolute', top: 0, left: 0 }}>
              <div className="w-dyn-list" aria-hidden={currentSlide !== 2}>
                <div role="list" className="w-dyn-items" aria-hidden="true">
                  <div role="listitem" className="w-dyn-item" aria-hidden="true">
                    <div className="hero-slider-grid" aria-hidden="true">
                      <div id="w-node-d70d9853-8d3d-693a-93da-b7f2bbcccacb-e11206ae" className="hero-content-left" aria-hidden="true">
                        <div aria-hidden="true">
                          <Link href="/off-grid" className="hero-category-block w-inline-block" tabIndex={-1} aria-hidden="true">
                            <div className="category-line" aria-hidden="true"></div>
                            <div className="post-category" aria-hidden="true">Off Grid</div>
                          </Link>
                          <Link href="/post/the-best-off-grid-heating-systems" className="title-link-block w-inline-block" tabIndex={-1} aria-hidden="true">
                            <h1 className="hero-title" aria-hidden="true">The Best Off Grid Heating Systems </h1>
                          </Link>
                          <div className="hero-date-time-block" aria-hidden="true">
                            <div className="hero-date" aria-hidden="true">February 25, 2021</div>
                            <div className="hero-dot" aria-hidden="true">•</div>
                            <div className="hero-read-time" aria-hidden="true">6 min read</div>
                          </div>
                          <p className="paragraph" aria-hidden="true">Phasellus porttitor sapien a purus venenatis condimentum. Nunc lectus ipsum, laoreet ut efficitur. Phasellus porttitor sapien a purus venenatis condimentum.</p>
                        </div>
                      </div>
                      <Link id="w-node-d70d9853-8d3d-693a-93da-b7f2bbcccad8-e11206ae" href="/post/the-best-off-grid-heating-systems" className="hero-image-block w-inline-block" tabIndex={-1} aria-hidden="true">
                        <img alt="" loading="lazy" width="1065" src="https://cdn.prod.website-files.com/601b0eabbce5fc78dc318621/6030302271aa6a1af8d25e53_Main-Post-Image-12.jpg" sizes="(max-width: 767px) 100vw, (max-width: 991px) 94vw, 70vw" srcSet="https://cdn.prod.website-files.com/601b0eabbce5fc78dc318621/6030302271aa6a1af8d25e53_Main-Post-Image-12-p-500.jpeg 500w, https://cdn.prod.website-files.com/601b0eabbce5fc78dc318621/6030302271aa6a1af8d25e53_Main-Post-Image-12.jpg 790w" className="hero-image" aria-hidden="true" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div aria-live="off" aria-atomic="true" className="w-slider-aria-label" data-wf-ignore=""></div>
            <div aria-live="off" aria-atomic="true" className="w-slider-aria-label" data-wf-ignore=""></div>
          </div>
          <div className="left-arrow w-slider-arrow-left" role="button" tabIndex={0} aria-controls="w-slider-mask-0" aria-label="previous slide" onClick={prevSlide}>
            <div className="arrow-icon w-icon-slider-left"></div>
          </div>
          <div className="right-arrow w-slider-arrow-right" role="button" tabIndex={0} aria-controls="w-slider-mask-0" aria-label="next slide" onClick={nextSlide}>
            <div className="arrow-icon w-icon-slider-right"></div>
          </div>
          <div className="slide-nav w-slider-nav w-slider-nav-invert w-round">
            <div className={`w-slider-dot ${currentSlide === 0 ? 'w-active' : ''}`} onClick={() => setCurrentSlide(0)} aria-label="Show slide 1 of 3" aria-selected={currentSlide === 0} role="button" tabIndex={0} style={{ marginLeft: 3, marginRight: 3 }}></div>
            <div className={`w-slider-dot ${currentSlide === 1 ? 'w-active' : ''}`} onClick={() => setCurrentSlide(1)} aria-label="Show slide 2 of 3" aria-selected={currentSlide === 1} role="button" tabIndex={0} style={{ marginLeft: 3, marginRight: 3 }}></div>
            <div className={`w-slider-dot ${currentSlide === 2 ? 'w-active' : ''}`} onClick={() => setCurrentSlide(2)} aria-label="Show slide 3 of 3" aria-selected={currentSlide === 2} role="button" tabIndex={0} style={{ marginLeft: 3, marginRight: 3 }}></div>
          </div>
        </div>
        <article data-w-id="ce1e75c6-0ee8-c5a3-bccc-c573f337a05e" style={{ opacity: 1, transform: 'translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)', transformStyle: 'preserve-3d' }} className="hero-featured-post-grid">
          <div className="w-dyn-list">
            <div role="list" className="w-dyn-items">
              <div role="listitem" className="w-dyn-item">
                <div className="featured-post-block">
                  <Link href="/travel" className="category-block w-inline-block">
                    <div className="category-line"></div>
                    <div className="post-category">Travel</div>
                  </Link>
                  <Link href="/post/life-and-stress-at-the-ice-edge" className="title-link-block w-inline-block">
                    <h3 className="hero-featured-title">Life and Stress at the Ice Edge</h3>
                  </Link>
                  <div className="date-time-block">
                    <div className="post-date">October 4, 2021</div>
                    <div className="dot">•</div>
                    <div className="read-time">4 min read</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="vertical-divider"></div>
          <div className="w-dyn-list">
            <div role="list" className="w-dyn-items">
              <div role="listitem" className="w-dyn-item">
                <div className="featured-post-block">
                  <Link href="/food" className="category-block w-inline-block">
                    <div className="category-line"></div>
                    <div className="post-category">Food</div>
                  </Link>
                  <Link href="/post/delicious-chewy-granola-bars" className="title-link-block w-inline-block">
                    <h3 className="hero-featured-title">Delicious Chewy Granola Bars</h3>
                  </Link>
                  <div className="date-time-block">
                    <div className="post-date">August 1, 2021</div>
                    <div className="dot">•</div>
                    <div className="read-time">6 min read</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="vertical-divider"></div>
          <div className="w-dyn-list">
            <div role="list" className="w-dyn-items">
              <div role="listitem" className="w-dyn-item">
                <div className="featured-post-block">
                  <Link href="/food" className="category-block w-inline-block">
                    <div className="category-line"></div>
                    <div className="post-category">Food</div>
                  </Link>
                  <Link href="/post/stretching-ground-beef" className="title-link-block w-inline-block">
                    <h3 className="hero-featured-title">Stretching Ground Beef</h3>
                  </Link>
                  <div className="date-time-block">
                    <div className="post-date">June 4, 2021</div>
                    <div className="dot">•</div>
                    <div className="read-time">4 min read</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="vertical-divider hiden"></div>
        </article>
      </div>

      <div className="section">
        <div className="block-content top-bot-margin">
          <div className="section-title-line" style={{ opacity: 1, transform: 'translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)', transformStyle: 'preserve-3d' }}>
            <h3 className="section-title">Latest Posts</h3>
            <div className="red-line-small"></div>
            <div className="black-line-big"></div>
          </div>
          <div className="popular-posts-grid">
            <div className="w-dyn-list">
              <article data-w-id="ec2e4644-e793-4806-d18d-f5c1ba6ee790" style={{ opacity: 1, transform: 'translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)', transformStyle: 'preserve-3d' }} role="list" className="popular-post-collection-list w-dyn-items">
                {latestPosts.map((post) => (
                  <div role="listitem" className="w-dyn-item" key={post.id}>
                    <div className="post-block">
                      <Link href={post.link} className="post-image-block-link w-inline-block">
                        <img src={post.image} loading="lazy" alt={post.title} className="post-image" />
                      </Link>
                      <div className="post-info-block">
                        <Link href={post.categoryLink} className="category-block w-inline-block">
                          <div className="category-line"></div>
                          <div className="post-category">{post.category}</div>
                        </Link>
                        <Link href={post.link} className="title-link-block w-inline-block">
                          <h3 className="post-title">{post.title}</h3>
                        </Link>
                        <div className="date-time-block">
                          <div className="post-date">{post.date}</div>
                          <div className="dot">•</div>
                          <div className="read-time">{post.readTime}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </article>
            </div>
          </div>
        </div>
      </div>

      <div className="divider"></div>

      <div className="section">
        <div className="block-content top-bot-margin">
          <div className="section-title-line" style={{ opacity: 1, transform: 'translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)', transformStyle: 'preserve-3d' }}>
            <h2 className="section-title">All Posts</h2>
            <div className="red-line-small"></div>
            <div className="black-line-big"></div>
          </div>
          <div className="all-posts-side-blocks">
            <div data-duration-in="300" data-duration-out="100" data-current="Tab 1" data-easing="ease" className="w-tabs">
              <div className="w-tab-content">
                <div data-w-tab="Tab 1" className={`w-tab-pane ${activeTab === 'Tab 1' ? 'w--tab-active' : ''}`} id="w-tabs-0-data-w-pane-0" role="tabpanel" aria-labelledby="w-tabs-0-data-w-tab-0">
                  <div className="all-posts-grid">
                    <div className="w-dyn-list">
                      <article data-w-id="a9a0c8df-a7bf-8a44-dff0-98bc07f606bb" style={{ opacity: 1, transform: 'translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)', transformStyle: 'preserve-3d' }} role="list" className="all-post-collection-list w-dyn-items">
                        {allPosts.map((post) => (
                          <div role="listitem" className="w-dyn-item" key={post.id}>
                            <div className="post-block">
                              <Link href={post.link} className="post-image-block-link all-posts-block w-inline-block">
                                <img src={post.image} loading="lazy" alt={post.title} className="post-image" />
                              </Link>
                              <div className="post-info-block-small">
                                <Link href={post.categoryLink} className="category-block w-inline-block">
                                  <div className="category-line"></div>
                                  <div className="post-category">{post.category}</div>
                                </Link>
                                <Link href={post.link} className="title-link-block w-inline-block">
                                  <h3 className="post-title h4">{post.title}</h3>
                                </Link>
                                <div className="date-time-block">
                                  <div className="post-date">{post.date}</div>
                                  <div className="dot">•</div>
                                  <div className="read-time">{post.readTime}</div>
                                </div>
                              </div>
                            </div>
                          </div>
                        ))}
                      </article>
                    </div>
                  </div>
                </div>
                <div data-w-tab="Tab 2" className={`w-tab-pane ${activeTab === 'Tab 2' ? 'w--tab-active' : ''}`} id="w-tabs-0-data-w-pane-1" role="tabpanel" aria-labelledby="w-tabs-0-data-w-tab-1">
                  {/* Additional tabs content would go here */}
                  <div className="w-dyn-list">
                    <div className="w-dyn-empty">
                      <div>No items found.</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="tabs-menu w-tab-menu" role="tablist">
                <a onClick={() => setActiveTab('Tab 1')} data-w-tab="Tab 1" className={`tab-link-tab w-inline-block w-tab-link ${activeTab === 'Tab 1' ? 'w--current' : ''}`} id="w-tabs-0-data-w-tab-0" href="#w-tabs-0-data-w-pane-0" role="tab" aria-controls="w-tabs-0-data-w-pane-0" aria-selected={activeTab === 'Tab 1'}><div>1</div></a>
                <a onClick={() => setActiveTab('Tab 2')} data-w-tab="Tab 2" className={`tab-link-tab w-inline-block w-tab-link ${activeTab === 'Tab 2' ? 'w--current' : ''}`} tabIndex={-1} id="w-tabs-0-data-w-tab-1" href="#w-tabs-0-data-w-pane-1" role="tab" aria-controls="w-tabs-0-data-w-pane-1" aria-selected={activeTab === 'Tab 2'}><div>2</div></a>
              </div>
            </div>
            <div>
              <div className="sticky-block">
                <div data-w-id="Div Block 3" style={{ opacity: 1, transform: 'translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)', transformStyle: 'preserve-3d' }} className="about-me-block">
                  <Link href="/about" className="about-me-image w-inline-block">
                    <img src="https://cdn.prod.website-files.com/601b0e022dc24f4ea11206ad/6023aa8353e96095e0e03eea_About%20Me%20Image%20(1).png" loading="lazy" alt="" />
                  </Link>
                  <h3>Hello There!</h3>
                  <p className="about-short-paragraph">Welcome to <strong>Blogy</strong>! My name is Nerrisa and it’s nice to meet you! I’m a wife and mom just trying to make the most of what our family has. If you are looking for real life and not perfection, this blog is for you! I love to write about simple living.</p>
                  <Link href="/about" className="read-more about-me">About Me</Link>
                  <div className="divider"></div>
                  <h5 className="follow-me">Follow Me On:</h5>
                  <div className="social-media-grid">
                    <a href="https://www.facebook.com/" target="_blank" className="social-media-block w-inline-block"><img src="https://cdn.prod.website-files.com/601b0e022dc24f4ea11206ad/6023ab64e95830059ace9895_Facebook.svg" loading="lazy" alt="" className="social-media-icon" /></a>
                    <a href="https://twitter.com/home" target="_blank" className="social-media-block w-inline-block"><img src="https://cdn.prod.website-files.com/601b0e022dc24f4ea11206ad/6023ab644309053082d9f6fe_Twitter.svg" loading="lazy" alt="" className="social-media-icon" /></a>
                    <a href="https://www.instagram.com/" target="_blank" className="social-media-block w-inline-block"><img src="https://cdn.prod.website-files.com/601b0e022dc24f4ea11206ad/6023ab649e7d4121a15b8584_Instagram.svg" loading="lazy" alt="" className="social-media-icon" /></a>
                    <a href="https://www.pinterest.com/" target="_blank" className="social-media-block w-inline-block"><img src="https://cdn.prod.website-files.com/601b0e022dc24f4ea11206ad/6023ab646c6ed0595f358bae_Pinterest.svg" loading="lazy" alt="" className="social-media-icon" /></a>
                    <a href="https://www.youtube.com/" target="_blank" className="social-media-block w-inline-block"><img src="https://cdn.prod.website-files.com/601b0e022dc24f4ea11206ad/6023ab6439eea8b40568b6a8_Youtube.svg" loading="lazy" alt="" className="social-media-icon" /></a>
                  </div>
                </div>
                <div data-w-id="Div Block 6" style={{ opacity: 1, transform: 'translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)', transformStyle: 'preserve-3d' }} className="newsletter-block">
                  <h3 className="_0margin">Newsletter</h3>
                  <div>Phasellus porttitor sapien a purus venenatis condimentum.</div>
                  <div className="form-block w-form">
                    <form id="email-form" name="email-form" data-name="Email Form" method="get" data-wf-page-id="601b0e022dc24f03e11206ae" data-wf-element-id="656e5afa-39b8-894a-9f9e-3655d64ce00e">
                      <input className="text-field w-input" maxLength={256} name="Email" data-name="Email" placeholder="Enter your email" type="text" id="Email" />
                      <input type="submit" data-wait="Please wait..." className="submit-btn w-button" value="Submit" />
                    </form>
                    <div className="w-form-done"><div>Thank you! Your submission has been received!</div></div>
                    <div className="w-form-fail" style={{ display: 'none' }}><div>Oops! Something went wrong while submitting the form.</div></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="instagram">
        <a href="https://university.webflow.com/lesson/instagram-gallery" target="_blank" className="instagram-block w-inline-block">
          <div className="instagram-image image-1"></div>
        </a>
        <a href="https://university.webflow.com/lesson/instagram-gallery" target="_blank" className="instagram-block w-inline-block">
          <div className="instagram-image image-2"></div>
        </a>
        <a href="https://university.webflow.com/lesson/instagram-gallery" target="_blank" className="instagram-block w-inline-block">
          <div className="instagram-image image-3"></div>
        </a>
        <a href="https://university.webflow.com/lesson/instagram-gallery" target="_blank" className="instagram-block w-inline-block">
          <div className="instagram-image image-4"></div>
        </a>
        <a href="https://university.webflow.com/lesson/instagram-gallery" target="_blank" className="instagram-block w-inline-block">
          <div className="instagram-image image-5"></div>
        </a>
      </div>
    </>
  );
}
