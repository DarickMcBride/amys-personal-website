import { FaEnvelope, FaLinkedin, FaGithub, FaFilePdf } from "react-icons/fa";
import Link from "next/link";

export default function ContactButtons() {
  return (
    <div className="flex justify-center text-primary pt-4 pb-4 ">
      <a
        className="btn btn-ghost btn-lg flex flex-col items-center justify-center"
        href="mailto:contactme@amymcbride.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaEnvelope size={24} />
        Email
      </a>

      <a
        className="btn btn-ghost btn-lg flex flex-col items-center justify-center "
        href="https://www.linkedin.com/in/amy-naumovski-mcbride"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaLinkedin size={24} />
        LinkedIn
      </a>
      <Link
        className="btn btn-ghost btn-lg flex flex-col items-center justify-center "
        href={
          "https://docs.google.com/document/d/1mdE4-6jq8in0iwfZYafEXtG5HW08bIyxo6hDH_LNSsI/export?format=pdf"
        }
        locale={false}
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaFilePdf size={24} />
        Resume
      </Link>
    </div>
  );
}
