import GitHubCalendar from "react-github-calendar";
export default function Githubcal() {
  return (
    <div className="gitcont">
      <h1
        style={{
          fontSize: "30px",
          marginBottom: "30px",
          textAlign: "center",
          fontWeight: "bold",
        }}
      >
        Github
      </h1>
      <div
        data-aos="fade-right"
        style={{ width: "90%", margin: "auto", marginBottom: "10px" }}
      >
        <GitHubCalendar username="abu1osama"></GitHubCalendar>
      </div>

      {/* <p  style={{ width: "120%",textAlign:"center",marginLeft:"25px",marginBottom:"20px" }}></p> */}

      <img
        data-aos="fade-left"
        id="github-top-langs"
        style={{ width: "100%" }}
        src="https://github-readme-stats.vercel.app/api/top-langs/?username=Abu1Osama&theme=light&hide_border=false&include_all_commits=false&count_private=true&layout=compact"
        alt="Abu1Osama"
      />

      <img
        data-aos="fade-right"
        id="github-stats-card"
        style={{ width: "100%" }}
        src="https://github-readme-stats.vercel.app/api?username=Abu1Osama&theme=light&hide_border=false&include_all_commits=true&count_private=true"
        alt="Abu1Osama"
      />

      <img
        data-aos="fade-left"
        id="github-streak-stats"
        style={{ width: "100%" }}
        src="https://github-readme-streak-stats.herokuapp.com?user=Abu1Osama"
        alt="Abu1Osama"
      />
    </div>
  );
}
