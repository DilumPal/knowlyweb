import React, { useEffect, useRef } from 'react';
import './AboutPage.css';
import backgroundImg from './background.png'; // Import the local image

const AboutPage = ({ onNavigate }) => {
  const featureRef = useRef(null);

  useEffect(() => {
    const feature = featureRef.current;
    
    // Logic to update styles based on scroll position
    const updateStyles = () => {
      if (!feature) return;

      const fromTop = window.scrollY;
      const width = feature.offsetWidth;
      
      // 1. Zoom Logic (Matches snippet)
      // Initial CSS size is 250% (2.5). 
      // Formula: newSize = (width * 2.5) - (fromTop / 3)
      const initialScale = 0.5; 
      const startSize = width * initialScale;
      
      // Calculate new size but don't let it shrink smaller than the container width
      let newSize = startSize - (fromTop / 3);
      if (newSize < width) newSize = width;

      // 2. Blur Logic
      // Snippet: blur = 0 + (fromTop / 100)
      const blurValue = fromTop / 100;

      // 3. Opacity Logic
      // Snippet: 1 - ((fromTop / htmlHeight) * 1.3)
      // We use window.innerHeight for smoother viewport-based fading
      const opacityValue = Math.max(0, 1 - (fromTop / window.innerHeight) * 1.3);

      // Apply the styles directly to the DOM element
      feature.style.backgroundSize = `${newSize}px`;
      feature.style.filter = `blur(${blurValue}px)`;
      feature.style.opacity = opacityValue;
    };

    // Run once on mount to set initial state
    updateStyles();

    // Attach listener
    window.addEventListener('scroll', updateStyles);
    window.addEventListener('resize', updateStyles); // Also update on resize
    
    return () => {
        window.removeEventListener('scroll', updateStyles);
        window.removeEventListener('resize', updateStyles);
    };
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

      {/* Background Feature Image 
         - Uses the imported local image
         - Ref is attached here for the animation logic
      */}
      <div 
        className="feature" 
        ref={featureRef} 
        style={{ backgroundImage: `url(${backgroundImg})` }}
      ></div>

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