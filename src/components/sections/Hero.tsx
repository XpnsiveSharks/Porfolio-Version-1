
const Hero: React.FC = () => {
  return (
    <section
      className="relative pt-25 px-6 pb-10 gap-2 h-screen w-full grid grid-cols-1 text-center justify-center place-items-center md:grid-cols-2"
      role="region"
      aria-label="Hero Section"
    >
      <h1 className="text-custom-primaryText text-size__H1 font-poppins font-bold">
        Code That Connects Users, Data, and Results
      </h1>
      <p className="text-custom-mutedText text-size__bodytext font-nunito">
        From database design to front-end polish, I turn product ideas into
        production-ready code that scales.
      </p>
      <button className="w-50 h-10 font-nunito text-size__size__button font-bold primary-button--hover-transition">
        About
      </button>
      <div
        className="
        w-full 
        h-30 
        rounded-[10px] 
        bg-[url('/images/CustomAvatar.png')] 
        dark:bg-[url('/images/CustomAvatarWithShades.png')]
        bg-[50%_30%] 
        bg-cover 
        transition-shadow 
        duration-300 
        shadow-[0_0_5px_#161b22] 
        hover:shadow-[0_0_30px_#00ffab]"
        role="img"
        aria-label="Hero Image"
      />
    </section>
  );
};
export default Hero;
