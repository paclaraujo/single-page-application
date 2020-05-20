export default () => {
  const container = document.createElement("div");
  
  container.innerHTML = `
    <section>
      <figure>
        <img class="home-img" src="../../assets/home.jpg">
      </figure>
      <div>
        <p>We realy love cats</p>
      </div> 
    </section>  
  `

  return container; 
}