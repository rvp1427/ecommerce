function Footer() {
  return (
    <div className="flex gap-10 mt-20 pt-10 border-t-2">
      <div className="w-2/3">
        <img src="/logo.png" alt="logo" className="h-12" />
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
        </p>
      </div>
      <div className="w-1/3">
        <h3>COMPANY</h3>
        <ul>
          <li>Home</li>
          <li>About us</li>
          <li>Delivery</li>
          <li>Privacy policy</li>
        </ul>
      </div>
      <div className="w-1/3">
        <h3>GET IN TOUCH</h3>
        <p>+1-000-000-0000</p>
        <p>greatstackdev@gmail.com</p>
        <ul className="flex">
          <li>
            <i className="bx bxl-instagram"></i>
          </li>
          <li>
            <i className="bx bx-envelope"></i>
          </li>
          <li>
            <i className="bx bxl-meta"></i>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Footer;
