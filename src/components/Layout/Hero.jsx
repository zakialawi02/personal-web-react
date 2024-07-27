import SosialMedia from "../Element/Sosial/SosialMedia";

const Hero = () => {
  return (
    <section id="home" className="bg-primary">
      <div className="container h-[90vh] flex items-center justify-center gap-3 lg:px-24 flex-col md:flex-row">
        <div className="order-1 w-full p-3 text-light md:w-1/2 md:-order-1">
          <div>
            <h3 className="text-lg">Hello, my name is</h3>
            <h1 className="text-3xl font-bold">Ahmad Zaki Alawi</h1>
            <h4 className="text-xl">
              And Im a..... &#160;<span id="type1"></span>
            </h4>
            <p className="text-[0.9rem]">Things turn out best for those who make the best of the way things turn out.</p>
            <SosialMedia></SosialMedia>
          </div>
        </div>
        <div className="flex items-center justify-center w-full p-4 md:w-1/2">
          <div className="p-2 max-w-[75%] m-auto block relative">
            <img src="public/assets/img/about.png" alt="Profile Photo" className="w-full p-2 animate-floatingImg" />
            <span className="welcome-thumb-1">
              <img className="welcome-animation" src="public/assets/img/follow.gif" alt="" />
            </span>
            <span className="welcome-thumb-2">
              <img className="welcome-animation" src="public/assets/img/ig_like.gif" alt="" />
            </span>
            <span className="welcome-thumb-3">
              <img className="welcome-animation" src="public/assets/img/cool.png" alt="" />
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
