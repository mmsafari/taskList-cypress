import ContactForm from '../components/ContactForm';

function AboutPage() {
  return (
    <>
        <h1>About Us</h1>
        <p>
          We are a small team of developers who are passionate about testing. We
          have created this demo to help you learn how to use Cypress.
        </p>
        <p>
          Also follow me on my{' '}
          <a href="https://github.com/mmsafari/">GitHub</a>.
        </p>
      <ContactForm />
    </>
  );
}

export default AboutPage;
