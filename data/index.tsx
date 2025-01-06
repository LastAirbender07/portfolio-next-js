import { link } from "fs";
import { url } from "inspector";
import {
  Blocks,
  Contact,
  GraduationCap,
  Home,
  MessageSquareQuote,
} from "lucide-react";
import Image from "next/image";

export const navItems = [
  { name: "About", link: "#about", icon: <Home /> },
  { name: "Projects", link: "#projects", icon: <Blocks /> },
  { name: "Courses", link: "#courses", icon: <MessageSquareQuote /> },
  { name: "Achievements", link: "#achievements", icon: <GraduationCap /> },
  { name: "Contact", link: "#contact", icon: <Contact /> },
];

export const gridItems = [
  {
    id: 1,
    title: "I prioritize client collaboration, fostering open communication ",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "I'm very flexible with time zone communications",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "/b4.svg",
  },
  {
    id: 3,
    title: "My tech stack",
    description: "I constantly try to improve",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Tech enthusiast with a passion for development.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title: "Currently building a Vigilance Application",
    description: "The Inside Scoop",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Do you want to start a project together?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "Secure Vigil Web Application",
    des: "Full-fledged web application for automated vulnerability detection, providing not only detection but also detailed mitigation strategies and reports.",
    img: "/p1.svg",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/fm.svg"],
    link: "https://github.com/Gokkulamoorthy?tab=repositories",
  },
  {
    id: 2,
    title: "SysLog ForensiKit",
    des: "Streamlined system log analysis by improving data retrieval efficiency and reducing troubleshooting time with clear visualizations and intuitive features.",
    img: "/p2.svg",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/stream.svg", "/c.svg"],
    link: "https://github.com/Gokkulamoorthy?tab=repositories",
  },
  {
    id: 3,
    title: "ML & DL Solutions for Malicious URL Detection",
    des: "Designed innovative feature extraction techniques and advanced deep learning models, achieving a minimum accuracy of 95% on a diverse dataset exceeding 10 terabytes.",
    img: "/p3.svg",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/c.svg"],
    link: "https://github.com/Gokkulamoorthy?tab=repositories",
  },
];

export const courses = [
  {
    quote:
      "Acquired hands-on experience in configuring lab environments, exploiting vulnerabilities (SQL injection, XSS, file upload, and code execution), and using tools like Maltego, BeEF, and Meterpreter for reconnaissance and exploitation. Strengthened expertise in analyzing HTTP requests, bypassing authentication mechanisms, and securing web applications against advanced cyber threats.",
    name: "Ethical Hacking",
    title: "GUVI Geek Networks",
    img: "https://static.vecteezy.com/system/resources/previews/041/731/250/non_2x/ethical-hacker-icon-illustration-vector.jpg",
  },
  {
    quote:
      "Gained expertise in the fundamentals of computer networks, cyber threats, and security classifications, including attacks like phishing, MITM, DoS, and SQL injection. Implemented critical defense measures such as risk management, incident response, and security controls, along with practical exposure to cyber forensics.",
    name: "Cyber Security & Ethical Hacking for Beginners",
    title: "GUVI Geek Networks",
    img: "https://cdn-icons-png.flaticon.com/512/1086/1086644.png",
  },
  {
    quote:
      "Assessed network security frameworks, including VPNs, firewalls, IDS/IPS, and countermeasures for threats like reconnaissance, access, and advanced persistent attacks. Addressed OWASP Top 10 vulnerabilities such as SQL injection, broken authentication, and XSS by adopting robust security measures to mitigate web application threats and browser exploitation.",
    name: "Cyber Security & Ethical Hacking for Advance",
    title: "GUVI Geek Networks",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/Kali-dragon-icon.svg/2048px-Kali-dragon-icon.svg.png",
  },
  {
    quote:
      "Mastered TOR network usage, including installation, security features, and PGP encryption for secure communication. Explored blockchain technology, Bitcoin wallet creation, and navigation of dark web platforms such as markets, directories, and forums while ensuring anonymity.",
    name: "Dark Web",
    title: "GUVI Geek Networks",
    img: "https://play-lh.googleusercontent.com/amvDjjQDKeTlM3KaE12Xm_Z94cbgP08f-k5Ur8kBfkV5PB_dNTbUGHFgc9kb0pVmnQ",
  },
];

export const companies = [
  {
    id: 1,
    name: "cloudinary",
    img: "/cloud.svg",
    nameImg: "/cloudName.svg",
  },
  {
    id: 2,
    name: "appwrite",
    img: "/app.svg",
    nameImg: "/appName.svg",
  },
  {
    id: 3,
    name: "HOSTINGER",
    img: "/host.svg",
    nameImg: "/hostName.svg",
  },
  {
    id: 4,
    name: "stream",
    img: "/s.svg",
    nameImg: "/streamName.svg",
  },
  {
    id: 5,
    name: "docker.",
    img: "/dock.svg",
    nameImg: "/dockerName.svg",
  },
];

export const achievements = [
  {
    id: 1,
    title: "President of the AMIGOS",
    desc: "Spearheaded strategic planning and execution of initiatives as President of the AMIGOS Game Dev Club.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "Student Coordinator",
    desc: "Acted as Student Coordinator for ACN’22 & ‘23 and Amrita Pongal’23, managing PR strategies, event promotions, and collaborations.",
    className: "md:col-span-2",
    thumbnail: "/exp2.svg",
  },
  {
    id: 3,
    title: "Organisational Head",
    desc: "Led the organization and execution of National level events - ACN’23 and Tantrotsav’23",
    className: "md:col-span-2",
    thumbnail: "/exp3.svg",
  },
  {
    id: 4,
    title: "Game Development Workshop",
    desc: "Conducted a game development workshop providing hands-on training and fostering skill enhancement.",
    className: "md:col-span-2",
    thumbnail: "/exp4.svg",
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
    link: "https://github.com/Gokkulamoorthy",
  },
  {
    id: 2,
    img: "https://img.icons8.com/ios_filled/512/FFFFFF/instagram-new.png",
    link: "https://www.instagram.com/s.r.gokkulamoorthy/"
  },
  {
    id: 3,
    img: "/link.svg",
    link: "https://www.linkedin.com/in/gokkulamoorthy/"
  },
];

const eduDetails = [
  {
    id: 1,
    firstLine: "7th Ranked university in India by NIRF 2024, Amrita is a NAAC A++ grade university spread across 9 campuses in 5 states.",
    desc: "Gained a profound understanding  about advanced security protocols, cryptographic techniques, and the intricacies of ethical hacking. The coursework deepened my knowledge of network security, malware analysis, and vulnerability assessments, enabling me to identify and mitigate potential threats.",
    img: "https://scontent.fmaa2-1.fna.fbcdn.net/v/t39.30808-6/312024007_585866156669094_5816331640671048446_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=cc71e4&_nc_ohc=9BoweRYJ6vgQ7kNvgHmo78w&_nc_zt=23&_nc_ht=scontent.fmaa2-1.fna&_nc_gid=AdQh-hbfq7DdwJmGTj6Mp9J&oh=00_AYCtGLVScQrozw-CFvQ4jRyTyUC-syE8kPBovhd9ukyuOw&oe=67814A77",
  },
  {
    id: 2,
    firstLine: "NMHSS is a Day cum Residential School, Recognised by Govt. of Tamilnadu with 30 years of Excellence, located in Krishnagiri, Tamil Nadu.",
    desc: "This was a transformative period that laid the foundation for my academic and personal growth. It provided me with a strong grasp of core subjects, particularly in science and mathematics, fostering my analytical and logical thinking skills.",
    img: "https://assets.aceternity.com/macbook.png",
  }
]


const DummyContent = () => {
  return (
    <>
      {eduDetails.map((item, _) => {
        return (
          <div
            key={item.id}
            className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4"
          >
            <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
              <span className="font-bold text-neutral-700 dark:text-neutral-200">
                {item.firstLine}
              </span>{" "}
              {item.desc}
            </p>
            <Image
              src={item.img}
              alt={item.img}
              height="500"
              width="500"
              className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain"
            />
          </div>
        );
      })}
    </>
  );
};


export const education = [
  {
    id: 1,
    category: "Amrita Vishwa Vidyapeetham",
    title: "B.Tech in Cyber Security",
    src: "https://scontent.fmaa2-1.fna.fbcdn.net/v/t39.30808-6/312024007_585866156669094_5816331640671048446_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=cc71e4&_nc_ohc=9BoweRYJ6vgQ7kNvgHmo78w&_nc_zt=23&_nc_ht=scontent.fmaa2-1.fna&_nc_gid=AdQh-hbfq7DdwJmGTj6Mp9J&oh=00_AYCtGLVScQrozw-CFvQ4jRyTyUC-syE8kPBovhd9ukyuOw&oe=67814A77",
    content: <DummyContent />,
  },
  {
    id: 2,
    category: "Nalanda Matric Higher Secondary School",
    title: "Higher Secondary",
    src: "https://cdn.pixabay.com/photo/2014/08/13/20/16/school-417612_640.jpg",
    content: <DummyContent />,
  }
];


export const skills = [
  {
    title: "Cyber Security",
    link: "https://en.wikipedia.org/wiki/Cybersecurity"
  },
  {
    title: "Game Dev",
    link: "https://en.wikipedia.org/wiki/Game_development"
  },
  {
    title: "Python",
    link: "https://www.python.org/"
  },
  {
    title: "Wireshark",
    link: "https://www.wireshark.org/"
  },
  {
    title: "Unity Engine",
    link: "https://unity.com/"
  },
  {
    title: "HTML",
    link: "https://developer.mozilla.org/en-US/docs/Web/HTML"
  },
  {
    title: "CSS",
    link: "https://developer.mozilla.org/en-US/docs/Web/CSS"
  },
  {
    title: "JavaScript",
    link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript"
  },
  {
    title: "Burp Suite",
    link: "https://portswigger.net/burp"
  },
  {
    title: "Nmap",
    link: "https://nmap.org/"
  },
  {
    title: "Metasploit",
    link: "https://www.metasploit.com/"
  },
  {
    title: "Kali Linux",
    link: "https://www.kali.org/"
  },
  {
    title: "hping3",
    link: "http://www.hping.org/"
  },
  {
    title: "Ettermap",
    link: "https://ettercap.github.io/ettercap/"
  },
  {
    title: "MySQL",
    link: "https://www.mysql.com/"
  },
  {
    title: "Leadership",
    link: "https://en.wikipedia.org/wiki/Leadership"
  },
  {
    title: "Teamwork",
    link: "https://en.wikipedia.org/wiki/Teamwork"
  },
  {
    title: "Creativity",
    link: "https://en.wikipedia.org/wiki/Creativity"
  }
];
