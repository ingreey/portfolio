function Coindeed() {
  const backgroundImageStyle = {
    backgroundImage: "url(/coindeed/coindeed-image.jpeg)",
    backgroundPosition: "center",
  };
  return (
    <div
      className="p-4 w-full h-full rounded-xl bg-opacity-40 bg-cover hover:bg-opacity-100 transition-all duration-300"
      style={backgroundImageStyle}
    >
      Coindeed
    </div>
  );
}

export default Coindeed;
