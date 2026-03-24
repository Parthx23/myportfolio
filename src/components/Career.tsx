import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Data Entry Intern</h4>
                <h5>ThenX — Virtual</h5>
              </div>
              <h3>2023</h3>
            </div>
            <p>
              Data entry and product matching internship. Gained hands-on
              experience in data management, accuracy, and workflow efficiency
              while working remotely.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Freelancer</h4>
                <h5>Fiverr — Remote</h5>
              </div>
              <h3>2024 – NOW</h3>
            </div>
            <p>
              Delivering freelance web development and design services on Fiverr.
              Built and delivered client projects including responsive websites,
              UI/UX designs, and custom web solutions with a focus on quality and
              timely delivery.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>B.Tech — CSE</h4>
                <h5>Acropolis Institute Of Technology And Research (AITR)</h5>
              </div>
              <h3>2024 – NOW</h3>
            </div>
            <p>
              Pursuing Bachelor of Technology in Computer Science &amp;
              Engineering. Actively participating in hackathons, college events,
              and technical projects.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Senior Secondary (XII) — CBSE Science</h4>
                <h5>Sanmati Higher Secondary School</h5>
              </div>
              <h3>80.60%</h3>
            </div>
            <p>
              Completed Senior Secondary education under CBSE Science stream
              with a score of 80.60%.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Secondary (X) — CBSE</h4>
                <h5>Sanmati Higher Secondary School</h5>
              </div>
              <h3>84.80%</h3>
            </div>
            <p>
              Completed Secondary education under CBSE board with a score of
              84.80%.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
