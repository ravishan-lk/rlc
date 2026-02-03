import React from "react"
import Layout from "../components/Layout"
import Hero from "../components/Hero"
import "../styles/global.css"

// Data for features
const features = [
    { title: "4 Years Strong", desc: "Hosting this prestigious tournament for the 4th consecutive year." },
    { title: "Community Impact", desc: "Building connections and uniting the Old Boys community." },
    { title: "Brand Visibility", desc: "Extensive exposure with hundreds of attendees." },
    { title: "Competitive Cricket", desc: "High-quality one-day matches with skilled players." },
]

const IndexPage = () => {
    return (
        <Layout>
            <Hero />

            {/* About / Features Section */}
            <section id="about" className="section-padding" style={{ background: "var(--bg-dark)" }}>
                <div className="container">
                    <h2 style={{ textAlign: "center", marginBottom: "20px", fontSize: "2.5rem", color: "var(--text-main)" }}>Be a Part of the ECC History</h2>
                    <p style={{ textAlign: "center", maxWidth: "800px", margin: "0 auto 60px", fontSize: "1.2rem", color: "var(--text-secondary)" }}>
                        Whether you are a player or a cheering fan, your presence matters. Let’s make this tournament a legendary one for our Alma Mater.
                    </p>
                    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "30px" }}>
                        {features.map((item, index) => (
                            <div key={index} style={{
                                background: "var(--bg-card)",
                                padding: "30px",
                                borderRadius: "12px",
                                border: "1px solid #ddd",
                                boxShadow: "0 4px 6px rgba(0,0,0,0.05)",
                                transition: "transform 0.3s ease"
                            }}
                                onMouseEnter={(e) => { e.currentTarget.style.borderColor = "var(--primary-gold)"; e.currentTarget.style.transform = "translateY(-10px)" }}
                                onMouseLeave={(e) => { e.currentTarget.style.borderColor = "#ddd"; e.currentTarget.style.transform = "translateY(0)" }}
                            >
                                <h3 style={{ color: "var(--primary-gold)", marginBottom: "15px" }}>{item.title}</h3>
                                <p style={{ color: "var(--text-secondary)" }}>{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Date & Venue Section */}
            <section id="date" className="section-padding" style={{ background: "#f8f8f8", textAlign: "center", borderTop: "1px solid #eee" }}>
                <div className="container">
                    <div style={{ maxWidth: "800px", margin: "0 auto", border: "2px solid var(--primary-gold)", padding: "40px", borderRadius: "20px", position: "relative", background: "var(--bg-card)" }}>
                        <span style={{
                            position: "absolute",
                            top: "-15px",
                            left: "50%",
                            transform: "translateX(-50%)",
                            background: "var(--bg-card)",
                            padding: "0 20px",
                            color: "var(--primary-gold)",
                            fontWeight: "bold",
                            textTransform: "uppercase"
                        }}>Event Details</span>

                        <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-around", gap: "40px", marginTop: "20px" }}>
                            <div>
                                <h4 style={{ fontSize: "1.5rem", marginBottom: "10px", color: "var(--text-main)" }}>Date</h4>
                                <p style={{ fontSize: "1.2rem", color: "var(--text-secondary)" }}>February 14, 2026</p>
                            </div>
                            <div>
                                <h4 style={{ fontSize: "1.5rem", marginBottom: "10px", color: "var(--text-main)" }}>Venue</h4>
                                <p style={{ fontSize: "1.2rem", color: "var(--text-secondary)" }}>Eheliyagoda Central College</p>
                            </div>
                            <div>
                                <h4 style={{ fontSize: "1.5rem", marginBottom: "10px", color: "var(--text-main)" }}>Time</h4>
                                <p style={{ fontSize: "1.2rem", color: "var(--text-secondary)" }}>8:00 AM - 6:00 PM</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA / Sponsorship */}
            <section id="contact" className="section-padding" style={{ background: "linear-gradient(to top, #ffffff, #f0f0f0)" }}>
                <div className="container" style={{ textAlign: "center" }}>
                    <h2 style={{ marginBottom: "20px", color: "var(--text-main)" }}>Ready to Play?</h2>
                    <p style={{ marginBottom: "40px", color: "var(--text-secondary)", fontSize: "1.2rem" }}>Become a sponsor or register your team today.</p>
                    <a href="#" className="btn">Contact Organizers</a>
                </div>
            </section>

        </Layout>
    )
}

export default IndexPage

export const Head = () => <title>Runner League Championship</title>
