
export const Home = () => {
  return (
    <>
      <main>
        <section className="section-hero">
          <div className="container grid grid-two-cols">
            <div className="hero-content">
              <p>We are the pillars of Future</p>
              <h1>Welcome to BigMern Project</h1>
              <p>
                This is a full stack application in MERN with complete authenticatin
                and authorization functionality. You can easily get the code in github repo.
              </p>
              <div className="btn btn-group">
                <a href="/contact">
                  <button className="btn">connect now</button>
                </a>
                <a href="/service">
                  <button className="btn secondary-btn">learn more</button>
                </a>
              </div>
            </div>

            {/* hero images  */}
            <div className="hero-image">
              <img
                src="/images/img4.jpg"
                alt="coding together"
                width="600"
                height="600"
              />
            </div>
          </div>
        </section>
      </main>

      {/* 2nd section  */}
      <section className="section-analytics">
        <div className="container grid grid-four-cols">
          <div className="div1">
            <h2>50+</h2>
            <p>Registered Companies</p>
          </div>
          <div className="div1">
            <h2>50+</h2>
            <p>Experienced developers</p>
          </div>
          <div className="div1">
            <h2>100+</h2>
            <p>Placement Oppurtunities</p>
          </div>
          <div className="div1">
            <h2>24/7</h2>
            <p>services</p>
          </div>
        </div>
      </section>
 
    </>
  );
};