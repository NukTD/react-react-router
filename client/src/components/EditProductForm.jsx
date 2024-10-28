import { useEffect, useState } from "react";
import axios from "axios";
import { useParams,useNavigate } from "react-router-dom";

function EditProductForm() {
  const navigate=useNavigate();
  const {productId} = useParams();
  const [editInfor, setEditInfor] = useState({
    name: "",
    image: "",
    price: "",
    description: "",
  });

  const fetchData = async () => {
    try {
      const result = await axios.get(
        `http://localhost:4001/products/${productId}`
      );
      console.log(result.data.data);
      setEditInfor(result.data.data); // ตั้งค่า editInfor ด้วยข้อมูลที่ได้จาก API
    } catch (error) {
      console.log(error);
    }
  };

  const updateData = async (event) => {
    event.preventDefault();
    try {
      const result = await axios.put(
        `http://localhost:4001/products/${productId}`,
        editInfor
      );
      console.log(result.data.data);
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };


  useEffect(() => {
    fetchData();
  }, [productId]);

  const handlingInputChange = (event) =>{
    const {name,value}= event.target;
    setEditInfor({...editInfor,[name]:value})
  }


  
  return (
    <form className="product-form" onSubmit={updateData}>
      <h1>Edit Product Form</h1>
      <div className="input-container">
        <label>
          Name
          <input
            id="name"
            name="name"
            type="text"
            placeholder="Enter name here"
            value={editInfor.name}
            onChange={handlingInputChange}
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
            value={editInfor.image}
            onChange={handlingInputChange}
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
            value={editInfor.price}
            onChange={handlingInputChange}
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
            value={editInfor.description}
            onChange={handlingInputChange}
            rows={4}
            cols={30}
          />
        </label>
      </div>
      <div className="form-actions">
        <button type="submit">Update</button>
      </div>
    </form>
  );
}

export default EditProductForm;
