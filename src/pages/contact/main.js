export default () => {
  const container = document.createElement("div");
  
  container.innerHTML = `
    <section class="container">
      <figure>
        <img class="contact-img shadow" src="../../assets/contact.jpg">
      </figure>
      <div>
        <h2>Contacts</h2>
        <p>Phone: (11) 2345-6789</p>
        <p>E-mail: cats@cats.com</p>
        <p>Instagram: @catscats</p>
      </div> 
    </section>  
  `

  return container; 
}