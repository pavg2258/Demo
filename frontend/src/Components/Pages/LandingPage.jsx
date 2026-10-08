import React, { useState, useEffect } from 'react'
import '../Styles/LandingPage.css'
import { FaUserCircle } from 'react-icons/fa'

const slides = [
    {
        id: 1,
        type: 'image',
        url: 'https://images.unsplash.com/photo-1508349937151-22b68b72d5b1?auto=format&fit=crop&w=1600&q=80',
        title: 'Next-Gen Mining Operations',
        subtitle: 'Deploying autonomous infrastructure and advanced data analytics.'
    },
    {
        id: 2,
        type: 'image',
        url: 'https://cdn-rio.dataweavers.io/-/media/content/images/about/ot-employee-process.png?rev=46224257c6834373885dbd6343c5dd9c',
        title: 'Empowering Our Workforce',
        subtitle: 'Fostering continuous learning and operational excellence.'
    },
    {
        id: 3,
        type: 'image',
        url: 'https://images.unsplash.com/photo-1516937941344-00b4e0337589?auto=format&fit=crop&w=1600&q=80',
        title: 'Sustainable Extraction',
        subtitle: 'Pioneering green energy solutions across global operations.'
    },
    {
        id: 4,
        type: 'image',
        url: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1600&q=80',
        title: 'Global Infrastructure Modernization',
        subtitle: 'Optimizing Oyu Tolgoi and SimFer deployments.',
        button: "Download"
    }
];

const documents = [
    { id: 1, title: 'Q3 Financial Overview', size: '2.4 MB', date: 'Oct 24, 2026', type: 'PDF' },
    { id: 2, title: 'Architecture Schematics', size: '8.1 MB', date: 'Oct 20, 2026', type: 'PDF' },
    { id: 3, title: 'Client Onboarding Brief', size: '1.2 MB', date: 'Oct 15, 2026', type: 'PDF' },
];

const metrics = [
    { value: "45%", title: "Automated Haulage Efficiency", desc: "Increase in material movement efficiency via AI routing." },
    { value: "99.9%", title: "Cloud Uptime", desc: "Sustained global network reliability across all remote extraction sites." },
    { value: "30%", title: "Carbon Reduction", desc: "Decreased emissions through optimized energy grid management." },
    { value: "60%", title: "Data Processing Speed", desc: "Faster IoT sensor data aggregation for real-time safety monitoring." },
    { value: "25%", title: "Operational Cost Savings", desc: "Reduction in manual diagnostic expenses via remote robotics." },
    { value: "100%", title: "Compliance Tracking", desc: "Fully automated regulatory and safety compliance monitoring." }
];

const Icons = {
    Close: () =>
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
        </svg>
    ,
    PDF: () =>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
            <polyline points="14 2 14 8 20 8"></polyline>
            <line x1="16" y1="13" x2="8" y2="13"></line>
            <line x1="16" y1="17" x2="8" y2="17"></line>
            <polyline points="10 9 9 9 8 9"></polyline>
        </svg>,
    Link: () => <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg>,
    Mail: () => <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>,
    UserMale: () => <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>,
    QuoteMark: () => <svg width="60" height="60" viewBox="0 0 24 24" fill="currentColor"><path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" /></svg>,
    Nexus: () => <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#4F46E5" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline></svg>,
    Grid: () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="3" width="7" height="7"></rect><rect x="14" y="3" width="7" height="7"></rect><rect x="14" y="14" width="7" height="7"></rect><rect x="3" y="14" width="7" height="7"></rect></svg>,
    Folder: () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>,
    FileText: () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>,
    Image: () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><circle cx="8.5" cy="8.5" r="1.5"></circle><polyline points="21 15 16 10 5 21"></polyline></svg>,
    Settings: () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="3"></circle><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path></svg>,
    Check: () => <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>,
    Download: () => <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>,
    More: () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#94A3B8" strokeWidth="2"><circle cx="12" cy="12" r="1"></circle><circle cx="12" cy="5" r="1"></circle><circle cx="12" cy="19" r="1"></circle></svg>,
    ArrowRight: () => <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>,
    UserCircle: () => <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
}

const LandingPage = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
        }, 6000);
        return () => clearInterval(timer);
    }, [slides.length]);

    return (
        <div className='landing-page-container'>
            <nav className='landing-nav-container'>
                <div className="nav-logo-container">
                    <img src="https://cdn-rio.dataweavers.io/-/media/project/riotinto/shared/riologo.svg?rev=-1" alt="RioTinto" fetchPriority="high" />
                    <span style={{ color: 'var(--border-color)' }}>|</span>
                    <div className="hcltech-logo-wrapper">
                        <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polygon points="12 2 2 7 12 12 22 7 12 2"></polygon><polyline points="2 17 12 22 22 17"></polyline><polyline points="2 12 12 17 22 12"></polyline></svg>
                        <span className="hcltech-text">HCLTech</span>
                    </div>
                </div>
                {/* <ul className='landing-nav-links-container'>
                    <li><a href="#">Products</a></li>
                    <li><a href="#">Solutions</a></li>
                    <li><a href="#">Pricing</a></li>
                    <li><a href="#">Resources</a></li>
                </ul> */}
            </nav>

            <main className='landing-page-main-container'>
                <div className="landing-page-carousel-wrapper">
                    {slides.map((slide, index) => (
                        <div key={slide.id} className={`landing-page-carousel-slide ${index === currentSlide ? 'active' : ''}`}>
                            {slide.type === 'video' ? (
                                <video className="landing-page-carousel-media" autoPlay loop muted playsInline>
                                    <source src={slide.url} type="video/mp4" />
                                </video>
                            ) : (
                                <>
                                    <img className="landing-page-carousel-media" src={slide.url} alt={slide.title} loading={index === 0 ? "eager" : "lazy"} fetchPriority={index === 0 ? "high" : "auto"} />
                                </>
                            )}
                            <div className="landing-page-carousel-overlay">
                                <h2>{slide.title}</h2>
                                <p>{slide.subtitle}</p>
                                {slide.button && (
                                    <a href="#" className="landing-page-carousel-btn">
                                        {slide.button}
                                    </a>
                                )}
                            </div>
                        </div>
                    ))}
                    <div className="landing-page-carousel-indicators">
                        {slides.map((_, i) => (
                            <button key={i} className={`landing-page-carousel-indicator ${i === currentSlide ? 'active' : ''}`} onClick={() => setCurrentSlide(i)} />
                        ))}
                    </div>
                </div>

                {/* Image Left / Description Right */}
                <div className="landing-page-content-section">
                    <img
                        src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1000&q=80"
                        alt="Mining Technology"
                        loading="lazy"
                        className="landing-page-content-image"
                    />
                    <div className="landing-page-content-description-container">
                        <span className="landing-page-content-description-heading">Strategic Integration</span>
                        <h3 className="landing-page-content-description-title">Pioneering the Future of Autonomous Mining Operations</h3>
                        <p className="landing-page-content-description-content">
                            At Rio Tinto, our commitment to innovation drives us to rethink how we extract, process, and transport critical resources globally. By leveraging cutting-edge automation, machine learning, and secure cloud environments, we are setting new benchmarks for operational excellence and environmental stewardship.
                        </p>
                    </div>
                </div>

                {/* Metrics / Percentages Section */}
                <div className="landing-page-metrics-section">
                    <div className="landing-page-metrics-header">
                        <span className="landing-page-metrics-subtitle">Performance & Transformation</span>
                        <h2 className="landing-page-metrics-title">Key Operational Metrics</h2>
                        <p className="landing-page-metrics-description">
                            Tracking our continuous progress towards fully autonomous, zero-emission global mining operations. These benchmarks represent successfully deployed initiatives across Tier-1 sites.
                        </p>
                    </div>
                    <div className="landing-page-metrics-grid">
                        {metrics.map((metric, idx) => (
                            <div key={idx} className="landing-page-metric-card">
                                <div className="landing-page-metric-info">
                                    <div className="landing-page-metric-value">{metric.value}</div>
                                    <h4 className="landing-page-metric-title">{metric.title}</h4>
                                    <p className="landing-page-metric-desc">{metric.desc}</p>
                                </div>
                                <div className="landing-page-metric-progress-bar">
                                    <div className="landing-page-metric-progress-fill" style={{ width: metric.value }}></div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Legacy Hover Section */}
                <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
                    <span className="landing-page-key-contacts-header" style={{ marginBottom: '0.5rem' }}>Our Legacy</span>
                    <h2 className="landing-page-key-contacts-title" style={{ marginBottom: '0' }}>Leaving a Positive Mark</h2>
                </div>
                <div className="landing-page-legacy-section">
                    <div className="landing-page-legacy-image-wrapper">
                        <img src="https://cdn-rio.dataweavers.io/-/media/content/images/operations/diavik/diavik-team.jpg?h=1080&iar=0&w=1920&rev=1f83cef812744c7dba01dc7129850c21&hash=C119E009E3927A08D4756B86B0AF2732" alt="Diavik Team" loading="lazy" />

                        <div className="landing-page-legacy-overlay">
                            <div className="landing-page-legacy-content">
                                <h3>Community legacy</h3>
                                <p>
                                    Diavik established the Northern Legacy Fund with the Yellowknife Community Foundation. We focus on enduring support, regional economic development, and asset donations to stimulate long‑term economic activity for future generations.
                                </p>

                                <h3>Environmental legacy</h3>
                                <p>
                                    Closure and reclamation are being carried out in close partnership with Northern Indigenous communities. By blending Traditional Knowledge with western science, we aim to return the land and water to a safe, welcoming condition.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Document Hub */}
                <div style={{ textAlign: 'center', marginBottom: '1.5rem' }}>
                    <span className="landing-page-key-contacts-header" style={{ marginBottom: '0.5rem' }}>Resources</span>
                    <h2 className="landing-page-key-contacts-title" style={{ marginBottom: '0' }}>Document Hub</h2>
                </div>
                <div className="doc-grid">
                    {documents.map((doc) => (
                        <a href="#" key={doc.id} className="doc-card" aria-label={`Download ${doc.title}`}>
                            <div className="doc-icon-wrapper">
                                <Icons.PDF />
                            </div>
                            <div className="doc-info">
                                <h3 className="doc-title">{doc.title}</h3>
                                <div className="doc-meta">
                                    <span>{doc.type}</span>
                                    <span>•</span>
                                    <span>{doc.size}</span>
                                    <span>•</span>
                                    <span>{doc.date}</span>
                                </div>
                            </div>
                            <div className="doc-download">
                                <Icons.Download />
                            </div>
                        </a>
                    ))}
                </div>

                {/* Key Contacts */}
                <span className="landing-page-key-contacts-header">Program Leadership</span>
                <h2 className="landing-page-key-contacts-title">Key Contacts</h2>
                <div className="landing-page-key-contacts-grid">
                    {/* Contact 1 */}
                    <div className="landing-page-key-contact-card">
                        <div className="landing-page-key-contact-avatar"><FaUserCircle className="landing-page-contact-icon" /></div>
                        <div className="landing-page-key-contact-info">
                            <h4 className="landing-page-key-contact-name">Person_1</h4>
                            <a href="mailto:person_1@hcltech.com" className="landing-page-key-contact-email">
                                <Icons.Mail /> person_1@hcltech.com
                            </a>
                            <span className="landing-page-key-contact-role">Role_1</span>
                        </div>
                    </div>
                    {/* Contact 2 */}
                    <div className="landing-page-key-contact-card">
                        <div className="landing-page-key-contact-avatar"><FaUserCircle className="landing-page-contact-icon" /></div>
                        <div className="landing-page-key-contact-info">
                            <h4 className="landing-page-key-contact-name">Person_2</h4>
                            <a href="mailto:person_2@hcltech.com" className="landing-page-key-contact-email">
                                <Icons.Mail /> person_2@hcltech.com
                            </a>
                            <span className="landing-page-key-contact-role">Role_2</span>
                        </div>
                    </div>
                </div>
            </main>

            {/* Leadership Quotations */}
            <div className="landing-page-quotes-container">
                <div style={{ textAlign: 'center' }}>
                    <span className="landing-page-key-contacts-header" style={{ marginBottom: '0.5rem' }}>Leadership & Culture</span>
                    <h2 className="landing-page-key-contacts-title" style={{ marginBottom: '0' }}>Empowering Our People</h2>
                </div>
                {/* Quotation 1 (Image Right) */}
                <div className="landing-page-quote-section">
                    <div className="landing-page-quote-content">
                        <div className="landing-page-quote-icon"><Icons.QuoteMark /></div>
                        <p className="landing-page-quote-text">
                            "Our leadership fosters a culture of innovation, continuous learning, and growth by empowering employees to develop new skills, contribute ideas, and drive automation and transformation initiatives. Through mentorship, recognition, inclusion, and a strong commitment to employee well-being, we create an environment where individuals feel valued, inspired, and empowered to achieve their full potential."
                        </p>
                        {/* <div className="landing-page-quote-author">
                            <div className="landing-page-quote-author-info">
                                <h5>Executive Leadership Board</h5>
                                <span>Rio Tinto & HCLTech Collaboration</span>
                            </div>
                        </div> */}
                    </div>
                    <div className="landing-page-quote-image-container">
                        <img src="https://cdn-rio.dataweavers.io/-/media/content/images/careers/rt-careers.jpg?rev=394e8484005242ea82297ad48bf31cf2" alt="Leadership" loading="lazy" />
                    </div>
                </div>

                {/* Quotation 2 (Image Left) */}
                <div className="landing-page-quote-section landing-page-quote-section-reverse">
                    <div className="landing-page-quote-image-container">
                        <img src="https://cdn-rio.dataweavers.io/-/media/content/images/invest/rt-yarwun-employee.jpg?rev=4cf36284b77940dc976f694a5a804299" alt="Operations" loading="lazy" />
                    </div>
                    <div className="landing-page-quote-content">
                        <div className="landing-page-quote-icon"><Icons.QuoteMark /></div>
                        <p className="landing-page-quote-text">
                            "Sustainable mining is not just about extracting resources efficiently; it's about enriching the communities we operate in and safeguarding the environment for future generations. Our commitment to achieving net-zero emissions drives every innovation and operational decision we make."
                        </p>
                        {/* <div className="landing-page-quote-author">
                            <div className="landing-page-quote-author-info">
                                <h5>Operations & Sustainability Team</h5>
                                <span>Rio Tinto Yarwun</span>
                            </div>
                        </div> */}
                    </div>
                </div>
            </div>

            <footer className="support-footer">
                <div className="footer-container">
                    <div className="footer-brand">
                        <h2>RioTinto & HCLTech</h2>
                        <p>Dedicated to sustainable mining operations powered by cutting-edge cloud infrastructure and automation.</p>
                    </div>

                    <div className="footer-links-grid">
                        <div className="footer-col">
                            <h5>Customer Support</h5>
                            <ul>
                                <li><a href="#"><Icons.ArrowRight /> Help Center & FAQs</a></li>
                                <li><a href="#"><Icons.ArrowRight /> Technical Support Portal</a></li>
                                <li><a href="#"><Icons.ArrowRight /> Open a Service Ticket</a></li>
                            </ul>
                        </div>
                        <div className="footer-col">
                            <h5>Company Links</h5>
                            <ul>
                                <li><a href="https://www.riotinto.com" target="_blank" rel="noreferrer"><Icons.ArrowRight /> Rio Tinto Official</a></li>
                                <li><a href="https://www.hcltech.com" target="_blank" rel="noreferrer"><Icons.ArrowRight /> HCLTech Official</a></li>
                                <li><a href="#"><Icons.ArrowRight /> Partnership Overview</a></li>
                            </ul>
                        </div>
                        <div className="footer-col">
                            <h5>Legal & Privacy</h5>
                            <ul>
                                <li><a href="#"><Icons.ArrowRight /> Terms of Service</a></li>
                                <li><a href="#"><Icons.ArrowRight /> Privacy Policy</a></li>
                                <li><a href="#"><Icons.ArrowRight /> Security Compliance</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default LandingPage