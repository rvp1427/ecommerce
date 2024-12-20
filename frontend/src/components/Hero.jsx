function Hero() {
  return (
    <div className="flex items-center border-2 flex-wrap">
      <div className="w-1/2 text-center flex-grow space-y-3 ">
        <div className="line-con">
          <div className="line"></div>
          <h3>OUR BESTSELLERS</h3>
        </div>
        <h1>Latest Arrivals</h1>
        <div className="line-con">
          <h3>SHOP NOW</h3>
          <div className="line"></div>
        </div>
      </div>
      <img src="/hero_img.png" alt="" className="basis-96 w-1/2 flex-grow" />
    </div>
  );
}

export default Hero;
