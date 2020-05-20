export default () => {
  const container = document.createElement("div");
  container.classList.add("container");
  
  container.innerHTML = `
    <section class="page-section">
      <figure class="box">
        <img class="about-img shadow" src="../../assets/about.jpg">
      </figure>
      <div class="box">
        <div class="section-text">
          <h2>About</h2>
          <p>Kittens are the definition of cuteness.
          They exude cute. They make us smile and warm
          our hearts with their playful antics. They play
          till they're exhausted then jump into our laps 
          to win our hearts with their bright eyes and 
          soothing purrs.</p>
        </div> 
      </div> 
    </section>  
  `

  return container; 
}