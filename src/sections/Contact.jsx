import SectionTitle from '../components/SectionTitle';
import Form from '../components/Form';

function Contact() {
  return (
    <div className="px-76 p-32 bg-[#020617] flex flex-col gap-12 items-center">
      <SectionTitle sectionName="05. Contact" contenu="Travaillons ensemble" />
      <Form />
      <ul className="flex gap-8">
        <li>
          <a href="#">
            <i className="fa-brands fa-github"></i>{' '}
          </a>
        </li>
        <li>
          <a href="#">
            <i className="fa-brands fa-linkedin-in"></i>{' '}
          </a>
        </li>
        <li>
          <a href="#">
            <i className="fa-solid fa-envelope"></i>{' '}
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Contact;
