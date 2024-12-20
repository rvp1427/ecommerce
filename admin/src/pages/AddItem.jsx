import { useState } from "react";
import InputImage from "../components/InputImage";
import Select from "../components/Select";
import axios from "axios";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const url = "https://ecommerce-backend-efmv.onrender.com/";

function AddItem() {
  const [formdata, setFormdata] = useState({
    name: "",
    description: "",
    category: "Men",
    subCategory: "Topwear",
    price: "",
    sizes: [],
    bestseller: false,
    img1: "",
    img2: "",
    img3: "",
    img4: "",
  });
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();
    const sendForm = new FormData();
    sendForm.append("img1", formdata.img1);
    sendForm.append("img2", formdata.img2);
    sendForm.append("img3", formdata.img3);
    sendForm.append("img4", formdata.img4);
    sendForm.append("name", formdata.name);
    sendForm.append("description", formdata.description);
    sendForm.append("price", formdata.price);
    sendForm.append("sizes", formdata.sizes);
    sendForm.append("bestseller", formdata.bestseller);
    sendForm.append("category", formdata.category);
    sendForm.append("subCategory", formdata.subCategory);

    // const req = await fetch("http://localhost:4000/api/product", {
    //   method: "POST",
    //   body: sendForm,
    //   headers: {
    //     "Content-Type":
    //       "multipart/form-data;boundary=----WebKitFormBoundary7XhiyPhhvA6VBw54",
    //   },
    // });

    // boundary=----WebKitFormBoundary4snlCIHAD0xCt5J7
    const req = await axios.post(`${url}/api/product`, sendForm, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    if (req.data.status === "success") {
      toast.success("product created successfully!");
      // navigate("/list");
    }
  }

  function handleChange(e) {
    const name = e.target.name;
    let value = e.target.value;
    setFormdata((data) => {
      if (e.target.files) {
        value = e.target.files[0];
      }
      if (name === "bestseller") {
        value = !data.bestseller;
      }
      if (value === "false" && !formdata.sizes.includes(name)) {
        return { ...data, sizes: [...data.sizes, name] };
      } else if (value === "true" && formdata.sizes.includes(name)) {
        return { ...data, sizes: data.sizes.filter((item) => item !== name) };
      }
      return { ...data, [name]: value };
    });
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col">
          <label>Upload Image</label>
          <div className="flex gap-4 flex-row">
            <InputImage
              name="img1"
              imgSrc="upload_area.png"
              type="file"
              handleChange={handleChange}
            />

            <InputImage
              name="img2"
              imgSrc="upload_area.png"
              type="file"
              handleChange={handleChange}
            />
            <InputImage
              name="img3"
              imgSrc="upload_area.png"
              type="file"
              handleChange={handleChange}
            />
            <InputImage
              name="img4"
              imgSrc="upload_area.png"
              type="file"
              handleChange={handleChange}
            />
          </div>
        </div>
        <div>
          <label>Product Name</label>
          <InputImage name="name" type="text" handleChange={handleChange} />
        </div>
        <div>
          <label>Product Description</label>
          <InputImage name="description" handleChange={handleChange} />
        </div>
        <div>
          <label>Product Category</label>
          <Select
            options={[
              { tag: "Men", value: "Men" },
              { tag: "Women", value: "Women" },
              { tag: "Kids", value: "Kids" },
            ]}
            name="category"
            handleChange={handleChange}
          />
        </div>
        <div>
          <label>Sub Category</label>
          <Select
            options={[
              { tag: "Topwear", value: "Topwear" },
              { tag: "Bottomwear", value: "Bottomwear" },
              { tag: "Winterwear", value: "Winterwear" },
            ]}
            name="subCategory"
          />
        </div>
        <div>
          <label>Product Price</label>
          <InputImage name="price" type="number" handleChange={handleChange} />
        </div>
        <div>
          <label>Product Sizes</label>
          <div className="flex gap-4">
            <InputImage name="S" type="checkbox" handleChange={handleChange} />
            <InputImage name="M" type="checkbox" handleChange={handleChange} />
            <InputImage name="L" type="checkbox" handleChange={handleChange} />
            <InputImage name="XL" type="checkbox" handleChange={handleChange} />
            <InputImage
              name="XXL"
              type="checkbox"
              handleChange={handleChange}
            />
          </div>
        </div>
        <div>
          <input
            type="checkbox"
            name="bestseller"
            value={formdata.bestseller}
            onChange={handleChange}
            id="bestseller"
          />
          <label htmlFor="bestseller">Add to bestseller</label>
        </div>
        <button className="btn">ADD</button>
      </form>
    </div>
  );
}

export default AddItem;
