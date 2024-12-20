function AboutDetails() {
  return (
    <div className="space-y-8">
      <div className="line-con mt-5">
        <h2>ABOUT US</h2>
        <div className="line"></div>
      </div>
      <div className="flex flex-full flex-col gap-12 md:flex-row">
        <div className="max-h-[30rem]">
          <img src="/about_img.png" alt="about" className="w-full h-full" />
        </div>
        <div className="space-y-5">
          <p>
            Forever was born out of a passion for innovation and a desire to
            revolutionize the way people shop online. Our journey began with a
            simple idea: to provide a platform where customers can easily
            discover, explore, and purchase a wide range of products from the
            comfort of their homes.
          </p>
          <p>
            Since our inception, we've worked tirelessly to curate a diverse
            selection of high-quality products that cater to every taste and
            preference. From fashion and beauty to electronics and home
            essentials, we offer an extensive collection sourced from trusted
            brands and suppliers.
          </p>
          <h3>Our Mission</h3>
          <p>
            Our mission at Forever is to empower customers with choice,
            convenience, and confidence. We're dedicated to providing a seamless
            shopping experience that exceeds expectations, from browsing and
            ordering to delivery and beyond.
          </p>
        </div>
      </div>
    </div>
  );
}

export default AboutDetails;
