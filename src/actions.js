setTimeout(() => {
  const blob = document.querySelector("#blob");

document.onpointermove = (e) => {
  e.preventDefault();
  const { clientX, clientY } = e;

  blob.animate(
    {
      left: `${clientX}px`,
      top: `${clientY}px`,
    },
    { duration: 2000, fill: "forwards" }
  );

};}, 500);



// import { Resend } from 'resend';
// import ContactMe from './components/ContactMe/ContactMe';
  
// const resend = new Resend('re_123456789');
  
// resend.sendEmail({
//   from: 'you@example.com',
//   to: 'user@gmail.com',
//   subject: 'hello world',
//   react: <ContactMe firstName="John" product="MyApp" />,
// });
