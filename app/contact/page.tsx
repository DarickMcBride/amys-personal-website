import ContactButtons from "../components/ContactButtons";

export default function ContactPage() {
  return (
    <div className="flex flex-col items-center ">
      <h1 className="text-primary text-2xl p-4 font-bold">CONTACT ME</h1>
      <div>
        <p>
          Thank you for visiting my website! I&apos;m excited to connect with
          you and discuss any opportunities or inquiries you may have. There are
          several ways to get in touch with me:
        </p>
        <dl className="space-y-0 pt-2">
          <dt className="text-secondary font-semibold text-lg">Email:</dt>
          <dd>
            Feel free to reach out to me via email at{" "}
            <a
              className="text-info hover:underline hover:text-secondary"
              href="mailto:contactme@amymcbride.com"
            >
              contactme@amymcbride.com
            </a>
            . I check my email regularly and will do my best to respond to your
            message promptly. Whether you have a position that fits my
            expertise, a question, or just want to say hello, I&apos;d love to
            hear from you.
          </dd>
          <dt className="text-secondary font-semibold text-lg">Linkedin:</dt>
          <dd>
            You can also connect with me on LinkedIn. Visit my LinkedIn profile{" "}
            <a
              className="text-info hover:underline hover:text-secondary"
              href="https://www.linkedin.com/in/amy-naumovski-mcbride"
              target="_blank"
              rel="noopener noreferrer"
            >
              here
            </a>{" "}
            to learn more about my professional background and interests.
            Don&apos;t hesitate to send a connection request or a direct
            message, and I&apos;ll be sure to respond.
          </dd>
        </dl>
        <ContactButtons />
        <p className="pt-2">
          I&apos;m looking forward to hearing from you and engaging in
          meaningful conversations. Whether it&apos;s about career
          opportunities, education discussions, or just a friendly chat, let&apos;s
          connect!
        </p>
      </div>
    </div>
  );
}
