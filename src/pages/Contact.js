import ContactInfo from "../components/contact/ContactInfo";
import ContactTalk from "../components/contact/ContactTalk";
import ContactTop from "../components/contact/ContactTop";

const Contact = () => {
  return (
    <div className="w-full">
      <ContactTop />
      <ContactInfo />
      <ContactTalk />
    </div>
  );
};
export default Contact;
