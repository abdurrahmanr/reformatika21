import Fade from "react-reveal/Fade";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Link() {
  return (
    <div
      id="bg"
      className="w-full h-1/2 pb-16 flex  flex-col items-center justify-center text-center gap-10"
    >
      <Fade>
        <h1 className="text-red-700 p-10">Registrasi</h1>
      </Fade>
      <p className="text-white" data-aos="zoom-in">
        Pastikan kehadiranmu di Reformatika 2021!
      </p>
      <a
        href="http://reformatika21-regist.rf.gd/"
        target={"_blank"}
        className="transition px-3 py-2 pad ease-in-out delay-150 bg-red-600 hover:-translate-y-1 hover:scale-110 hover:bg-red-800 duration-300 rounded-lg font-bold text-white"
        data-aos="fade-up"
      >
        Klik di Sini
      </a>
    </div>
  );
}
