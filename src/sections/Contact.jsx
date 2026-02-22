import SectionTitle from '../components/SectionTitle';
import Form from '../components/Form';

function Contact() {
  return (
    <div className="px-76 p-32 bg-[#020617]">
      <SectionTitle sectionName="05. Contact" contenu="Travaillons ensemble" />
      <Form />
      <ul>
        <li>
          <a href="#">
            <img src="{githubLogo}" alt="GitHub" />
          </a>
        </li>
        <li>
          <a href="#">
            <img src="{linkdnLogo}" alt="Linkdn" />
          </a>
        </li>
        <li>
          <a href="#">
            <img src="{emailLogo}" alt="Email" />
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Contact;
