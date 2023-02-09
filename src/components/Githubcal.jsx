import Calendar from "./Calendar";

export default function Githubcal() {
  return (
    <div className="gitcont">
      <h1  style={{ fontSize: "3rem", marginBottom: "50px" }}>
        Github
      </h1>
     <div>
     <Calendar />
     </div>

      <img id="github-top-langs"  style={{width:"100%"}} src="https://github-readme-stats.vercel.app/api/top-langs/?username=abu1osama&theme=default&layout=compact" alt="abu1Osama" />
      
      <img id="github-stats-card"  style={{width:"100%"}} src="https://github-readme-stats.vercel.app/api?username=abu1osama&show_icons=true&locale=en&theme=default&layout=compact" alt="abu1osama" />

        <img id="github-streak-stats" style={{width:"100%"}}
          src="https://github-readme-streak-stats.herokuapp.com?user=abu1osama&theme=default&layout=compact"
          alt="abu1osama"
        />
        
       
    </div>
  );
}