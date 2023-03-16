import React from 'react'

function Form() {
  return (
    <section className="newsletter-form">
      <div className="newsletter-form__headings">
        <h4>Subscribe to our newsletterr</h4>
        <h2>Get weekly updates</h2>
      </div>
      <form className="newsletter-form__form">
        <label>Fill in your details to join the party</label>
        <input
          type="text"
          name="name"
          id="name"
          placeholder="Your name"
          className="input"
          autoComplete='off'
        />
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Email address"
          className="input"
          autoComplete='off'
        />
        <button type="submit">submit</button>
      </form>
    </section>
  );
}

export default Form;