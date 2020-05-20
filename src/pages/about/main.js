export default () => {
  const container = document.createElement("div");
  
  container.innerHTML = `
    <section class="container">
      <figure>
        <img class="about-img shadow" src="../../assets/about.jpg">
      </figure>
      <div>
        <p>We realy love cats</p>
      </div> 
    </section>  
  `

  return container; 
}