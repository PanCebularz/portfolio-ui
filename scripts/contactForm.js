const contactForm = () => {
  const form = document.querySelector('form');
  let f_name = document.getElementById('name');
  let email = document.getElementById('email');
  let subject = document.getElementById('subject');
  let message = document.getElementById('msg');

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    let formData = {
      name: f_name.value,
      email: email.value,
      subject: subject.value,
      message: message.value,
    };
  });
};
export default contactForm;
