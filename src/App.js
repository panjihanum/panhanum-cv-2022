/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
import "./App.css";
import IMAGES from "./assets/img";
import PDF from "./assets/pdf";
import Background from "./components/Background";

function App() {
  const sosmedDatas = [
    {
      img: IMAGES.SOSMED.LINKEDIN,
      url: "https://www.linkedin.com/in/panji-hanum/",
    },
    {
      img: IMAGES.SOSMED.GITHUB,
      url: "https://github.com/panjihanum",
    },
    {
      img: IMAGES.SOSMED.GMAIL,
      url: "mailto:pan.hanum@gmail.com",
    },
    {
      img: IMAGES.SOSMED.WHATSAPP,
      url: "https://wa.me/+6282113589617",
    },
    {
      img: IMAGES.SOSMED.FACEBOOK,
      url: "https://www.facebook.com/panjihanumz",
    },
  ];

  return (
    <>
      <Background />
      <div className="App h-screen w-screen relative" style={{ zIndex: 1 }}>
        <header className="header p-5 justify-center">
          <span className="gummy text-lg">
            <span className="primary-color">P</span>H
          </span>
        </header>
        {/* START - HOME */}
        <div className="flex flex-row items-center justify-center">
          <div className="flex md:h-[90vh] max-w-7xl flex-row md:flex-col justify-start md:justify-center items-start md:items-center p-10 pt-5 md:pt-10">
            <div className="flex flex-col md:flex-row justify-between w-full">
              {/* START  - Left */}
              <div className="flex flex-start flex-col text-center md:text-left md:flex-col md:pl-10 justify-center">
                <span className="text-2xl font-bold">Hi. I’m</span>
                <span className="text-5xl gummy mt-2">
                  <span className="primary-color">PANJI</span> HANUM
                </span>
                <span className="text-lg mt-5 italic">SOFTWARE ENGINEER</span>
                {/* Sosmed */}
                <div className="flex flex-row mt-10 justify-center md:justify-start">
                  {sosmedDatas.map((sosmedData, index) => (
                    <div
                      key={"SOSMED " + index}
                      className={index !== 0 && "ml-4"}
                    >
                      <a href={sosmedData.url} target="_blank" rel="noreferrer">
                        <img
                          src={sosmedData.img}
                          className="cursor-pointer hover:scale-95 w-100 w-7 h-7 "
                        />
                      </a>
                    </div>
                  ))}
                </div>
              </div>
              {/* START - Middle */}
              <div className="flex flex-1 flex-col items-center my-10 md:my-0 md:mx-20 justify-center">
                <img
                  src={IMAGES.VECTOR.PROGRAMMING}
                  alt="programming"
                  className="w-8/12 md:w-96"
                />
              </div>
              {/* START - Right */}
              <div className="flex flex-start flex-col text-center md:text-left">
                <div className="flex flex-col md:w-50 max-w-sm">
                  <span className="text-sm font-bold primary-color">
                    EXPERT ON
                  </span>
                  <span className="text-2xl font-bold mt-2">
                    Based in Indonesia
                    <br />
                    I’m software engineer.
                  </span>
                  <span className="text-sm my-10">
                    Hi, are u looking for software engineer, to develop app of
                    your business ?<br />
                    let’s shake hands with me.
                  </span>
                  <div className="flex flex-row justify-center md:justify-start">
                    <a
                      className="w-36 flex flex-row font-bold text-sm border-b-2 primary-border-color py-2 justify-center cursor-pointer hover:scale-95"
                      href={PDF.CV}
                      download
                    >
                      <span className="primary-color">DOWNLOAD CV</span>
                      <img
                        src={IMAGES.BUTTON.DOWNLOADPRIMARY}
                        width={15}
                        height={15}
                        alt="download"
                        className="ml-2"
                      />
                    </a>
                  </div>
                </div>
              </div>
              {/* END - Right */}
            </div>
          </div>
        </div>
        {/* END - HOME */}
        {/* START - ABOUT ME */}
        {/* END - ABOUT ME */}
        {/* START - PORTFOLIO */}
        {/* END - PORTFOLIO */}
        {/* START - CONTACT US */}
        {/* END  - CONTACT US */}
      </div>
    </>
  );
}

export default App;
