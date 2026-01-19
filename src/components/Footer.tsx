import Link from 'next/link';

export default function Footer() {
    return (
        <footer id="footer" className="footer">
            <div className="footer-block">
                <div className="top-footer-block">
                    <Link href="/" aria-current="page" className="footer-logo-link w-inline-block w--current">
                        <img src="https://cdn.prod.website-files.com/601b0e022dc24f4ea11206ad/601ec3aa8cab6c855d0b3c2a_Blogy%20-%20White%20Logo.svg" alt="" className="footer-image" />
                    </Link>
                    <div className="social-media-footer">
                        <a href="https://www.facebook.com/" target="_blank" className="social-media-text-link">Facebook</a>
                        <a href="https://www.instagram.com/" target="_blank" className="social-media-text-link">Instagram</a>
                        <a href="https://twitter.com/home" target="_blank" className="social-media-text-link">Twitter</a>
                        <a href="https://www.pinterest.com/" target="_blank" className="social-media-text-link">Pinterest</a>
                        <a href="https://www.youtube.com/" target="_blank" className="social-media-text-link">Youtube</a>
                    </div>
                </div>
                <div className="middle-footer-block">
                    <div>
                        <ul role="list" className="w-list-unstyled">
                            <li>
                                <h5 className="footer-title">Pages</h5>
                                <Link href="/" aria-current="page" className="footer-link w--current">Home</Link>
                                <Link href="/about" className="footer-link">About</Link>
                                <Link href="/contact" className="footer-link">Contact</Link>
                            </li>
                        </ul>
                    </div>
                    {/* <div>
                        <ul role="list" className="w-list-unstyled">
                            <li>
                                <h5 className="footer-title">Template</h5>
                                <Link href="/template-info/style-guide" className="footer-link">Style Guide</Link>
                                <Link href="/template-info/changelog" className="footer-link">Changelog</Link>
                                <Link href="/template-info/licensing" className="footer-link">Licenses</Link>
                            </li>
                        </ul>
                    </div> */}
                    <div>
                        <ul role="list" className="w-list-unstyled">
                            <li>
                                <h5 className="footer-title">Categories</h5>
                                <div className="w-dyn-list">
                                    <div role="list" className="w-dyn-items">
                                        <div role="listitem" className="w-dyn-item"><Link href="/off-grid" className="footer-link">Off Grid</Link></div>
                                        <div role="listitem" className="w-dyn-item"><Link href="/travel" className="footer-link">Travel</Link></div>
                                        <div role="listitem" className="w-dyn-item"><Link href="/food" className="footer-link">Food</Link></div>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div>
                        {/* <h5 className="footer-title">Newsletter</h5>
                        <div className="footer-form-block w-form">
                            <form id="email-form" name="email-form" data-name="Email Form" method="get" className="footer-form" data-wf-page-id="601b0e022dc24f03e11206ae" data-wf-element-id="80dcfef2-5b44-28cb-289c-30d937b752e0">
                                <input className="footer-text-field w-input" maxLength={256} name="Email" data-name="Email" placeholder="Enter your email" type="text" id="Email" />
                                <input type="submit" data-wait="Please wait..." className="footer-submit-btn w-button" value="Submit" />
                            </form>
                            <div className="w-form-done"><div>Thank you! Your submission has been received!</div></div>
                            <div className="w-form-fail"><div>Oops! Something went wrong while submitting the form.</div></div>
                        </div> */}
                    </div>
                </div>

            </div>
        </footer>
    );
}
