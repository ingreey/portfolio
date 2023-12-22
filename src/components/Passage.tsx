function Passage() {
  const backgroundImageStyle = {
    backgroundImage: "url(/passage/passage.png)",
    backgroundPosition: "left",
  };
  return (
    <div
      className="text-[#fafafa] p-4 w-full h-full rounded-xl bg-opacity-40 bg-cover hover:bg-opacity-100 transition-all duration-300"
      style={backgroundImageStyle}
    >
      Passage
    </div>
  );
}

export default Passage;
