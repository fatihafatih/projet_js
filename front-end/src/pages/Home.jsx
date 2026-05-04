import React from 'react';

function Home({ setPage }) {
  return (
    <>
      <div className="home">
        {/* HERO SECTION */}
     <section className="hero-modern">
  <div className="hero-content">
    <div className="badge-new">Trend 2026</div>
    <h1 className="hero-title-animated">
      <span>Nouvelle</span>
      <span className="gold-text">Collection</span>
    </h1>
    <p className="hero-subtitle">
      L'élégance marocaine revisitée. Découvrez les dernières tendances de cette saison.
    </p>
    <div className="hero-btns">
      <button className="btn-primary-shiny" onClick={() => setPage("produits")}>
        Explorer la boutique
      </button>
    </div>
  </div>

  {/* LA VAGUE (SVG) */}
  <div className="wave-container">
    <svg viewBox="0 0 1440 320" xmlns="http://www.w3.org/2000/svg">
      <path 
        fill="#FBF9F6" 
        fillOpacity="1" 
        d="M0,160L48,176C96,192,192,224,288,224C384,224,480,192,576,165.3C672,139,768,117,864,128C960,139,1056,181,1152,197.3C1248,213,1344,203,1392,197.3L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z">
      </path>
    </svg>
  </div>
</section>

        {/* CATEGORIES GRID */}
        <div className="categories-grid">
          {[
            { name: "T-shirts", img: "https://image.made-in-china.com/202f0j00gpLRHTArqFkt/Custom-T-Shirts-100-Cotton-Men-Tshirt-Tee-Shirt-Printing-T-Shirt-Polo-T-Shirt-for-Men-Women-Plain-T-Shirt.webp" },
            { name: "Pantalons", img: "https://img01.ztat.net/article/spp-media-p1/ce700a1bd731458bbc48c32a6e082f6c/8f47ffc12c944a5cb227e4071a180332.jpg?imwidth=200&filter=packshot" },
            { name: "Vestes", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRluLcs0GfV4-TUWXQll2hcv1s8cU68kymOHg&s" },
            { name: "Robes", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTA6luqDgxk8p5CDuuDGkmZ6gmvCj-2bSxo7A&s" }
          ].map((cat, index) => (
            <div key={index} className="btn-two" onClick={() => setPage("produits")}>
              <span className="btn-tree">
                <img src={cat.img} alt={cat.name} />
              </span>
              <p>{cat.name}</p>
            </div>
          ))}
        </div>
  {/* BANNER PROMO */}
      <div className="promo-container">
  <div className="promo-card">
    <div className="promo-badge">Offre Exclusive</div>
    <div className="promo-content">
      <div className="promo-icon">
        <span className="pulse-emoji">🎉</span>
      </div>
      <div className="promo-text">
        <h2>Livraison gratuite <span>dès 50DH d'achat</span></h2>
        <p>Expédition prioritaire • Retours gratuits sous 30 jours</p>
      </div>
    </div>
    <div className="promo-bg-glow"></div>
  </div>
</div>
        {/* SECTION À PROPOS (Optimisée React) */}
        <section className="about-section">
          <div className="about-container">
            <div className="about-visual">
              <div className="image-wrapper main-img">
                <img src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800" alt="Atelier" />
              </div>
              <div className="image-wrapper detail-img">
                <img src="https://images.unsplash.com/photo-1558769132-cb1aea458c5e?auto=format&fit=crop&w=600&q=80" alt="Détail" />
              </div>
              <div className="experience-badge">
                <span className="years">10+</span>
                <span className="label">Ans d'excellence</span>
              </div>
            </div>

            <div className="about-content">
              <h3 className="subtitle">Notre Essence</h3>
              <h2 className="title">L'Art de la Mode <br /><span>Sans Compromis</span></h2>
              <p className="description">
                Depuis 2016, nous redéfinissons le vestiaire contemporain. Chaque pièce est pensée pour allier un confort absolu à une esthétique prestigieuse.
              </p>
              
              <div className="commitments">
                <div className="commitment-item">
                  <span className="icon">✨</span>
                  <div>
                    <h4>Qualité Premium</h4>
                    <p>Matières sourcées avec soin.</p>
                  </div>
                </div>
                <div className="commitment-item">
                  <span className="icon">🌿</span>
                  <div>
                    <h4>Éco-Conscient</h4>
                    <p>Une production raisonnée.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

      
      </div>
    </>
  );
}

export default Home;