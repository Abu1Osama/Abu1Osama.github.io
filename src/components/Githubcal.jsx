// import "./Github.css";

export default function Githubcal() {
  return (
    <div className="gitcont">
      <h1 align="center" style={{ fontSize: "3rem", marginBottom: "50px" }}>
        Github
      </h1>
      <img style={{width:"100%"}}
        align="center"
        src="https://github-readme-stats-sigma-five.vercel.app/api?username=abu1osama&show_icons=true&locale=en&theme=gotham"
        alt="abu1osama"
      />
      <p>
        <img  style={{width:"100%"}}
          align="center"
          src="https://github-readme-streak-stats.herokuapp.com/?user=abu1osama&theme=gotham"
          alt="abu1osama"
        />
      </p>
      <p>
        <a href="https://github.com/abu1osama">
          <span>
            <img  style={{width:"100%"}}
              align="center"
              src="https://github-profile-summary-cards.vercel.app/api/cards/profile-details?username=abu1osama&theme=monokai"
              alt="img"
            />
          </span>
        </a>{" "}
      </p>
    </div>
  );
}
