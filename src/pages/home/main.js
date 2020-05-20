export default () => {
  const container = document.createElement("div");
  
  container.innerHTML = `
    <section class="container">
      <figure>
        <img class="home-img shadow" src="../../assets/home.jpg">
      </figure>
      <div>
        <p>We realy love cats</p>
      </div> 
    </section>  
  `

  return container; 
}