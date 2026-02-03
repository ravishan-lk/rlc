import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import skyImg from "../assets/sky.png"
import cloudsImg from "../assets/clouds.png"
import characterVideo from "../assets/character.mp4"

const Hero = () => {
    return (
        <section id="hero" style={{
            height: "100vh",
            position: "relative",
            overflow: "hidden",
            display: "flex",
            alignItems: "center"
        }}>
            {/* 1. Background Sky Image */}
            <img src={skyImg} alt="Sky Background" style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                objectFit: "cover",
                zIndex: -3
            }} />

            {/* 2. Clouds Marquee (Two Layers for Parallax) */}
            {/* Layer 1: Background Clouds (Smaller, Slower) */}
            <div className="marquee-container" style={{ bottom: "10%", zIndex: -2, opacity: 0.8 }}>
                <div className="marquee-content" style={{ animationDuration: "60s" }}>
                    <img src={cloudsImg} alt="Clouds" style={{ height: "30vh", width: "auto" }} />
                    <img src={cloudsImg} alt="Clouds" style={{ height: "30vh", width: "auto" }} />
                    <img src={cloudsImg} alt="Clouds" style={{ height: "30vh", width: "auto" }} />
                    <img src={cloudsImg} alt="Clouds" style={{ height: "30vh", width: "auto" }} />
                </div>
            </div>

            {/* Layer 2: Foreground Clouds (Larger, Faster) */}
            <div className="marquee-container" style={{ bottom: "-5%", zIndex: 1 }}>
                <div className="marquee-content" style={{ animationDuration: "40s" }}>
                    <img src={cloudsImg} alt="Clouds" style={{ height: "50vh", width: "auto" }} />
                    <img src={cloudsImg} alt="Clouds" style={{ height: "50vh", width: "auto" }} />
                    <img src={cloudsImg} alt="Clouds" style={{ height: "50vh", width: "auto" }} />
                    <img src={cloudsImg} alt="Clouds" style={{ height: "50vh", width: "auto" }} />
                </div>
            </div>

            {/* 3. Main Layout Grid (Rule of Thirds) */}
            <div className="container" style={{
                position: "relative",
                zIndex: 2,
                width: "100%",
                height: "100%",
                display: "grid",
                gridTemplateColumns: "1fr 1fr 1fr", // 3 Equal columns
                alignItems: "center"
            }}>

                {/* Text Content - Occupies Left 2 Columns */}
                <div style={{ gridColumn: "span 2", paddingRight: "50px" }}>
                    <style>
                        {`
                            @keyframes fadeInUp {
                                from { opacity: 0; transform: translateY(30px); }
                                to { opacity: 1; transform: translateY(0); }
                            }
                        `}
                    </style>
                    <h4 style={{ color: "var(--primary-gold)", letterSpacing: "2px", marginBottom: "10px", fontSize: "1.5rem", animation: "fadeInUp 0.8s ease-out forwards", opacity: 0 }}>SEASON 4</h4>
                    <h1 style={{
                        fontSize: "clamp(3rem, 5vw, 5rem)", /* Slightly adjusted for longer text */
                        lineHeight: "1.1",
                        marginBottom: "20px",
                        color: "var(--text-main)",
                        textShadow: "none",
                        animation: "fadeInUp 0.8s ease-out 0.2s forwards",
                        opacity: 0
                    }}>
                        RUNNER LEAGUE CHAMPIONSHIP: <br />
                        <span style={{ color: "transparent", WebkitTextStroke: "2px var(--primary-gold)" }}>THE ECC LEGACY CONTINUES!</span>
                    </h1>
                    <p style={{ fontSize: "1.2rem", color: "var(--text-secondary)", marginBottom: "30px", maxWidth: "700px", textShadow: "none", animation: "fadeInUp 0.8s ease-out 0.4s forwards", opacity: 0 }}>
                        Bringing the Legends of Eheliyagoda Central College back to the pitch. Power, Passion, and Pride!
                    </p>
                    <div style={{ display: "flex", gap: "20px", animation: "fadeInUp 0.8s ease-out 0.6s forwards", opacity: 0 }}>
                        <a href="#register" className="btn">Register Your Team</a>
                        <a href="#sponsor" className="btn btn-outline" style={{ color: "var(--primary-gold)", borderColor: "var(--primary-gold)" }}>Become a Sponsor</a>
                    </div>
                </div>

                {/* Character Video - Occupies Right 1 Column (Rule of Thirds) */}
                <div style={{
                    gridColumn: "span 1",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "flex-end",
                    height: "100%",
                    position: "relative"
                }}>
                    <video
                        autoPlay
                        loop
                        muted
                        playsInline
                        src={characterVideo}
                        style={{
                            maxHeight: "90vh",
                            maxWidth: "150%",
                            position: "absolute",
                            bottom: "0",
                            right: "-20%",
                            objectFit: "cover",
                            opacity: 0.95,
                            WebkitMaskImage: "radial-gradient(ellipse at center, black 30%, transparent 70%)",
                            maskImage: "radial-gradient(ellipse at center, black 30%, transparent 70%)"
                        }}
                    />
                </div>

            </div>
        </section>
    )
}

export default Hero
