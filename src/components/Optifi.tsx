function Optifi() {
  const backgroundImageStyle = {
    backgroundImage: "url(/optifi/optifi.jpeg)",
    backgroundPosition: "85%",
  };
  return (
    <div
      className="text-[#fafafa] p-4 w-full h-full rounded-xl bg-opacity-40 bg-cover hover:bg-opacity-100 transition-all duration-300"
      style={backgroundImageStyle}
    >
      Optifi
    </div>
  );
}

export default Optifi;
