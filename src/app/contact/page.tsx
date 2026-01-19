export default function ContactPage() {
    return (
        <div className="section">
            <div className="block-content top-bot-margin">
                <div className="section-title-line">
                    <h1 className="section-title">Contact Us</h1>
                    <div className="red-line-small"></div>
                    <div className="black-line-big"></div>
                </div>

                <div className="contact-page-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '80px', marginTop: '40px' }}>
                    <div className="contact-info-block">
                        <h2 style={{ fontSize: '28px', marginBottom: '20px' }}>Get in Touch</h2>
                        <p className="paragraph" style={{ marginBottom: '30px', lineHeight: '1.8' }}>
                            Have a question, a story to share, or just want to say hello? We'd love to hear from you!
                            Fill out the form and we'll get back to you as soon as possible.
                        </p>

                        <div className="contact-details" style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                                <div style={{ width: '40px', height: '40px', backgroundColor: '#f0f0f0', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                                </div>
                                <div>
                                    <h4 style={{ margin: 0, fontSize: '14px', textTransform: 'uppercase', color: '#999', letterSpacing: '1px' }}>Email</h4>
                                    <p style={{ margin: 0, fontSize: '16px', fontWeight: 'bold' }}>hello@blogy.com</p>
                                </div>
                            </div>

                            <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                                <div style={{ width: '40px', height: '40px', backgroundColor: '#f0f0f0', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                                </div>
                                <div>
                                    <h4 style={{ margin: 0, fontSize: '14px', textTransform: 'uppercase', color: '#999', letterSpacing: '1px' }}>Location</h4>
                                    <p style={{ margin: 0, fontSize: '16px', fontWeight: 'bold' }}>San Francisco, CA</p>
                                </div>
                            </div>
                        </div>

                        <div className="social-media-grid" style={{ marginTop: '40px' }}>
                            <a href="https://www.facebook.com/" target="_blank" className="social-media-block w-inline-block"><img src="https://cdn.prod.website-files.com/601b0e022dc24f4ea11206ad/6023ab64e95830059ace9895_Facebook.svg" loading="lazy" alt="" className="social-media-icon" /></a>
                            <a href="https://twitter.com/home" target="_blank" className="social-media-block w-inline-block"><img src="https://cdn.prod.website-files.com/601b0e022dc24f4ea11206ad/6023ab644309053082d9f6fe_Twitter.svg" loading="lazy" alt="" className="social-media-icon" /></a>
                            <a href="https://www.instagram.com/" target="_blank" className="social-media-block w-inline-block"><img src="https://cdn.prod.website-files.com/601b0e022dc24f4ea11206ad/6023ab649e7d4121a15b8584_Instagram.svg" loading="lazy" alt="" className="social-media-icon" /></a>
                        </div>
                    </div>

                    <div className="contact-form-block w-form">
                        <form id="contact-form" name="contact-form" style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                            <div>
                                <label htmlFor="name" className="field-label">Name</label>
                                <input type="text" className="text-field w-input" maxLength={256} name="name" placeholder="Your Name" id="name" required />
                            </div>
                            <div>
                                <label htmlFor="email" className="field-label">Email Address</label>
                                <input type="email" className="text-field w-input" maxLength={256} name="email" placeholder="Your Email" id="email" required />
                            </div>
                            <div>
                                <label htmlFor="subject" className="field-label">Subject</label>
                                <input type="text" className="text-field w-input" maxLength={256} name="subject" placeholder="Subject" id="subject" />
                            </div>
                            <div>
                                <label htmlFor="message" className="field-label">Message</label>
                                <textarea placeholder="How can we help?" maxLength={5000} id="message" name="message" className="text-field w-input" style={{ height: '150px' }} required></textarea>
                            </div>
                            <input type="submit" value="Send Message" className="submit-btn w-button" style={{ width: '100%', marginTop: '10px' }} />
                        </form>
                    </div>
                </div>
            </div>

            <style jsx>{`
        .field-label {
          font-size: 14px;
          font-weight: bold;
          margin-bottom: 8px;
          display: block;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }
        @media screen and (max-width: 767px) {
          .contact-page-grid {
            grid-template-columns: 1fr !important;
            gap: 40px !important;
          }
        }
      `}</style>
        </div>
    );
}
