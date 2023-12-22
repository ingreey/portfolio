function Coinvise() {
  const backgroundImageStyle = {
    backgroundImage: "url(/coinvise/cv.jpeg)",
    backgroundPosition: "left",
  };
  return (
    <div
      className="text-[#fafafa] p-4 w-full h-full rounded-xl bg-opacity-40 bg-cover hover:bg-opacity-100 transition-all duration-300"
      style={backgroundImageStyle}
    >
      Coinvise
    </div>
  );
}

export default Coinvise;
