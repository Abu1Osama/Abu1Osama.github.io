
export default function Githubcal() {
  return (
    <div className="gitcont">
      <h1  style={{ fontSize: "3rem", marginBottom: "50px" }}>
        Github
      </h1>
     

      <img id="github-top-langs"  style={{width:"100%"}} src="https://github-readme-stats.vercel.app/api/top-langs?username=Abu1Osama&show_icons=true&locale=en&layout=compact" alt="Abu1Osama" />
      
      <img id="github-stats-card"  style={{width:"100%"}} src="https://github-readme-stats-sigma-five.vercel.app/api?username=abu1osama&show_icons=true&locale=en&theme=gotham" alt="abu1osama" />

        <img id="github-streak-stats" style={{width:"100%"}}
          src="https://github-readme-streak-stats.herokuapp.com/?user=abu1osama&theme=gotham"
          alt="abu1osama"
        />

       
    </div>
  );
}
