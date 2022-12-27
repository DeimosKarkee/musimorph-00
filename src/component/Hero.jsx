function Hero({
  heading,
  description,
  buttonlink,
  buttontext,
  HeroImg,
  altImgText,
}) {
  return (
    <div className="hero-section">
      <div className="hero grid grid-2--cols">
        <div className="hero-description ">
          <h1 className="heading-primary">{heading}</h1>
          <p className="hero-desc-text">{description}</p>
          <a className="cta hero-cta" href={buttonlink}>
            {buttontext}
          </a>
        </div>
        <div className="hero-img-container">
          <img className="hero-img" src={HeroImg} alt={altImgText} />
        </div>
      </div>
    </div>
  );
}

export default Hero;
