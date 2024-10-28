import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function CreateProductForm() {
  const targetUrl = "http://localhost:4001";
  const navigate = useNavigate();
  const [informationInput, setinformationInput] = useState({
    name: "",
    image: "",
    price: "",
    description: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setinformationInput({ ...informationInput, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post(
        `${targetUrl}/products`,
        informationInput
      );
      console.log("Product created successfully:", response.data);
      navigate("/");
    } catch (error) {
      console.error("Error creating product:", error);
    }
  };

  return (
    <form className="product-form" onSubmit={handleSubmit}>
      <h1>Create Product Form</h1>
      <div className="input-container">
        <label>
          Name
          <input
            id="name"
            name="name"
            type="text"
            placeholder="Enter name here"
            value={informationInput.name}
            onChange={handleInputChange}
          />
        </label>
      </div>
      <div className="input-container">
        <label>
          Image Url
          <input
            id="image"
            name="image"
            type="text"
            placeholder="Enter image url here"
            value={informationInput.image}
            onChange={handleInputChange}
          />
        </label>
      </div>
      <div className="input-container">
        <label>
          Price
          <input
            id="price"
            name="price"
            type="number"
            placeholder="Enter price here"
            value={informationInput.price}
            onChange={handleInputChange}
          />
        </label>
      </div>
      <div className="input-container">
        <label>
          Description
          <textarea
            id="description"
            name="description"
            type="text"
            placeholder="Enter description here"
            value={informationInput.description}
            onChange={handleInputChange}
            rows={4}
            cols={30}
          />
        </label>
      </div>
      <div className="form-actions">
        <button type="submit" >
          Create
        </button>
      </div>
    </form>
  );
}

export default CreateProductForm;
