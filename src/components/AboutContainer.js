export default function AboutContainer(){
  return (

    <div className="about-container">

      <div className="public-content">

        <h2>About our Company</h2>
        
        <picture>
          <source media="(min-width:600px)" srcSet="1300x956company.jpg" />
          <img src="640x360company.jpg" alt="company" className="company-img"/>
        </picture>

        <section className="text-contents">
          <p>Lorem ipsum odor amet, consectetuer adipiscing elit. Urna vulputate odio platea vitae quis ac imperdiet. Risus porta mattis nulla blandit pharetra habitasse euismod morbi aliquet? Sollicitudin volutpat felis justo ligula congue pretium. Potenti vehicula rhoncus mauris eros hendrerit. Finibus mattis varius sit ad integer nostra lobortis accumsan. Lobortis eu vitae consectetur; condimentum suscipit at. Taciti maecenas libero dapibus accumsan, netus facilisis. Potenti iaculis lobortis, dis pulvinar vehicula dolor mattis sagittis.</p>
        </section>
      </div>

    </div>
    
  )
}