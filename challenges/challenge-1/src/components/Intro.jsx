const Intro = (props) => {
  return (
    <div className="intro">
      <h1>{props.name}</h1>
      <p className="description">
        A fullstack developer. Flow zone is achieved fast when working with
        codes. When not working, I like to do creative activities like knitting,
        drawing. I also like creative games like Minecraft and Sims 4.
      </p>
    </div>
  );
};

export default Intro;
