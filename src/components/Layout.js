import React from "react"
import "../styles/global.css"

const Layout = ({ children }) => {
    return (
        <div className="layout">
            <header style={{
                padding: "20px 0",
                position: "absolute",
                width: "100%",
                zIndex: 10,
                top: 0
            }}>
                <div className="container" style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <div className="logo" style={{ fontSize: "1.5rem", fontWeight: "bold", fontFamily: "var(--font-heading)" }}>
                        RLC <span style={{ color: "var(--primary-gold)" }}>CHAMPIONSHIP</span>
                    </div>
                    <nav>
                        <ul style={{ display: "flex", listStyle: "none", gap: "30px" }}>
                            <li><a href="#hero" style={{ fontWeight: "600" }}>Home</a></li>
                            <li><a href="#about" style={{ fontWeight: "600" }}>About</a></li>
                            <li><a href="#date" style={{ fontWeight: "600" }}>Event Info</a></li>
                            <li><a href="#contact" style={{ fontWeight: "600" }}>Contact</a></li>
                        </ul>
                    </nav>
                </div>
            </header>

            {/* Live Match Ticker - Positioned below Header */}
            <section id="live-ticker" style={{
                background: "linear-gradient(90deg, #D4145A, #2E3192)",
                padding: "5px 0", /* Thinner padding */
                overflow: "hidden",
                whiteSpace: "nowrap",
                position: "absolute",
                top: "60px", /* Adjusted to be flush with header */
                width: "100%",
                zIndex: 9,
                borderBottom: "2px solid var(--primary-gold)",
                boxShadow: "0 4px 10px rgba(0,0,0,0.3)"
            }}>
                <a href="#live-stream" style={{ textDecoration: "none" }}>
                    <div style={{ display: "inline-block", animation: "marquee 20s linear infinite" }}>
                        {[...Array(10)].map((_, i) => (
                            <span key={i} style={{
                                color: "#fff",
                                fontWeight: "700",
                                fontSize: "1.1rem", /* Smaller font */
                                marginRight: "50px",
                                textTransform: "uppercase",
                                fontFamily: "var(--font-heading)",
                                letterSpacing: "1px",
                                display: "inline-flex",
                                alignItems: "center",
                                gap: "10px"
                            }}>
                                <span>🏏</span> Click here to watch the live match from here <span>🔴</span>
                            </span>
                        ))}
                    </div>
                </a>
            </section>
            <main>{children}</main>
            <footer style={{ background: "#000", padding: "40px 0", textAlign: "center", marginTop: "50px", borderTop: "1px solid #222" }}>
                <div className="container">
                    <p style={{ color: "#aaa" }}>Organised by Eheliyagoda Central College Old Students 97'</p>
                </div>
            </footer>
        </div>
    )
}

export default Layout
