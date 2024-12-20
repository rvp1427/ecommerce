function Contact() {
  return (
    <div className="max-w-[50rem] m-auto ">
      <div className="mb-10">
        <div className="line-con">
          <h2>CONTACT US</h2>
          <div className="line"></div>
        </div>
      </div>
      <div className="flex flex-full gap-10 flex-col md:flex-row ">
        <div>
          <img src="/contact_img.png" alt="contact" />
        </div>
        <div className="space-y-5">
          <h3>Our Store</h3>
          <p>
            54709 Willms Station Suite 350, Washington, USA Tel: (415) 555-0132
            Email: admin@forever.com
          </p>
          <h3>Careers at Forever</h3>
          <p>Learn more about our teams and job openings.</p>
          <button className="btn">Explore Jobs</button>
        </div>
      </div>
    </div>
  );
}

export default Contact;
