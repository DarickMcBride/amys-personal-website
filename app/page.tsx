import Image from "next/image";
import SkillsList from "./components/SkillsList";
import myImage from "../public/amy-mcbride.jpeg";

export default function AboutPage() {
  const yearsSince = () => {
    const startYear = 2018;
    const startMonth = 2;
    const startDate = new Date(startYear, startMonth);
    const currentDate = new Date();
    let years = currentDate.getFullYear() - startDate.getFullYear();
    if (
      currentDate.getMonth() < startDate.getMonth() ||
      (currentDate.getMonth() === startDate.getMonth() &&
        currentDate.getDate() < startDate.getDate())
    ) {
      years--;
    }
    return years;
  };

  return (
    <div className="flex flex-col items-center">
      <h1 className="text-primary text-2xl p-4 font-bold">ABOUT ME</h1>
      <div>
        <Image
          src={myImage}
          className="mx-auto max-w-xs rounded-lg shadow-2xl md:float-left md:mr-4 mb-4"
          alt="Picture of Amy McBride"
          width={0}
          height={0}
        />
        <div className="space-y-3">
          <p>
            Welcome to my corner of the web! I&apos;m{" "}
            <span className="text-secondary font-semibold">
              Amy Naumovski McBride
            </span>
            , hailing from the sunny city of Folsom, CA, alongside my wonderful
            husband{" "}
            <a href="www.darickmcbride.com" className="text-accent">
              Darick McBride
            </a>{" "}
            and our beloved dog, Pixel. As a graduate of UC Davis with a degree
            in Civil Engineering, my journey into the world of water resources
            began with a single fluids class that ignited my passion for the
            subject. Though I initially aimed to dive headfirst into the water
            resources field upon graduation, life had other plans when my
            father&apos;s health became a priority.
          </p>
          <p>
            In a twist of fate, I found myself drawn to STEM education, inspired
            by the dedicated educators who instilled in me a love for
            mathematics during my own schooling. For the past six years,
            I&apos;ve dedicated myself to teaching math and actively
            participating in school initiatives, cherishing the opportunity to
            share the joy of numbers with my students.
          </p>
          <p>
            Now, I&apos;m embarking on a new chapter as I make the pivot back to
            engineering, eager to merge my expertise in education with my
            engineering background. My husband and I share a passion for the
            great outdoors, whether we&apos;re hiking with Pixel by our side,
            camping in our trusty pop-up camper, or gliding across serene waters
            on our paddleboards. When we&apos;re not exploring nature, you can
            find us engaging in weekly puzzle nights and trivia challenges with
            friends—because I&apos;m always on the lookout for the next puzzle
            to solve or problem to tackle. Join me on this exciting journey as I
            blend my love for education and engineering into a unique skill set
            ready to make waves in the field.
          </p>
        </div>
      </div>
    </div>
  );
}
