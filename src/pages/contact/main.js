export default () => {
  const container = document.createElement("div");
  container.classList.add("container");
  
  container.innerHTML = `
    <section class="page-section">
      <figure class="box">
        <img class="contact-img shadow" src="../../assets/contact.jpg">
      </figure>
      <div class="box">
        <div class="section-text">
          <h2>Contacts</h2>
          <p>Contact us by phone (11 2345-6789),
          e-mail (cats@cats.com) or Instagram (@catscats).
          </p>
        </div>
      </div> 
    </section>  
  `

  return container; 
}