import React, { useEffect, useRef } from 'react';
import './AboutPage.css';

const AboutPage = ({ onNavigate }) => {
  const featureRef = useRef(null);

  // --- Scroll Effect Logic (Replaces the jQuery snippet) ---
  useEffect(() => {
    const handleScroll = () => {
      const feature = featureRef.current;
      if (!feature) return;

      const fromTop = window.scrollY;
      const width = feature.offsetWidth;
      
      // 1. Calculate new background size (Zoom Effect)
      // Initial CSS size is 250% (2.5). 
      // Snippet logic: newSize = size - (fromTop / 3)
      const initialScale = 2.5; 
      const startSize = width * initialScale;
      
      // Prevent it from shrinking smaller than the screen width
      const newSize = Math.max(width, startSize - (fromTop / 3));

      // 2. Calculate Blur
      const blurValue = fromTop / 100; // Adjust divisor to control blur speed

      // 3. Calculate Opacity (Darken the image as we scroll)
      const opacityValue = Math.max(0.2, 1 - (fromTop / window.innerHeight));

      // Apply styles
      feature.style.backgroundSize = `${newSize}px`;
      feature.style.filter = `blur(${blurValue}px)`;
      feature.style.opacity = opacityValue;
    };

    window.addEventListener('scroll', handleScroll);
    
    // Cleanup event listener
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="about-page-container">
      
      {/* Navigation: Back Button */}
      <div className="back-nav-container">
        <button className="back-btn" onClick={() => onNavigate('start')}>
          <span className="material-symbols-outlined">arrow_back</span>
          Back to Start
        </button>
      </div>

      {/* Background Feature Image */}
      <div className="feature" ref={featureRef}></div>

      {/* Main Content */}
      <div className="about-content">
        <div className="text-card">
            <h1>A Smart Personal Knowledge Hub</h1>
            <p>
                <strong>Knowly</strong> is built with a simple purpose: to transform your scattered notes, 
                research documents, and ideas into organized knowledge that you can easily retrieve, 
                understand, and grow over time.
            </p>

            <h2>Why Knowly?</h2>
            <p>
                In today’s information-driven world, we collect data from everywhere — lectures, articles, 
                PDFs, screenshots, personal ideas, and research tasks. While storing information has 
                become easy, connecting that information to find what truly matters has become harder.
            </p>
            <p>
                Traditional keyword search often fails to understand context. Searching “AI” may show 
                everything from project ideas to theoretical notes, making knowledge retrieval slow and 
                overwhelming.
            </p>
            <p>
                Knowly bridges this gap by helping you connect your thoughts in a smarter, more meaningful way.
            </p>

            <h2>What Knowly Does</h2>
            <p>Knowly is designed as a smart personal knowledge management tool where users can:</p>
            <ul>
                <li>Create and store notes or upload important documents</li>
                <li>Organize content using flexible tags and categories</li>
                <li>Discover content through intelligent and context-based search</li>
                <li>Automatically uncover links and patterns across notes</li>
                <li>View personal learning insights through visual analytics</li>
            </ul>
            <p>
                Whether you’re a student managing university materials, a researcher organizing references, 
                or a professional collecting ideas — Knowly keeps your knowledge structured and easily accessible.
            </p>

            <h2>Smart Features That Make Knowly Stand Out</h2>
            <p>Knowly uses lightweight analytical techniques to help you learn smarter:</p>
            
            <p><strong>🔍 Semantic-like Smart Search</strong><br/>
            Search isn’t based only on exact words — Knowly understands context and meaning.</p>
            
            <p><strong>🧩 Related Notes & Idea Connections</strong><br/>
            See automatic suggestions for notes with similar topics, tags, or keywords.</p>
            
            <p><strong>📊 Knowledge Insights Dashboard</strong><br/>
            Track your learning journey: Most-used tags, Topics you frequently explore, and Growth in notes over time.</p>
            
            <p><strong>✨ Keyword & Concept Extraction</strong><br/>
            Knowly highlights key concepts from your notes to improve search and content recommendations.</p>
            
            <p><strong>📝 Smart Summaries (Optional)</strong><br/>
            Long documents? Knowly can provide concise summaries (via integrated AI or local tools).</p>

            <h2>Our Vision</h2>
            <p>
                Knowly aims to turn personal data into personal intelligence. 
                It helps you learn, remember, and connect — so your knowledge grows with you.
            </p>
            <p style={{ textAlign: 'center', fontSize: '20px', fontWeight: 'bold', marginTop: '30px', color: '#00c6ff' }}>
                Knowly — Turn your scattered notes into connected insights.
            </p>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;