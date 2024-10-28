import axios from "axios";
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

function ViewProductPage() {
  const { productId } = useParams(); //  ดึง param จาก url
  const navigate = useNavigate();
  const [productinfor, setProductInfor] = useState(null);

  //  fetchData เรียกข้อมูลจาก server
  const fetchData = async () => {
    try {
      const result = await axios.get(
        `http://localhost:4001/products/${productId}`
      );
      setProductInfor(result.data.data); // อัปเดตข้อมูลโดยตรงด้วย result.data
      console.log(result.data.data);
    } catch (error) {
      console.error("Error fetching product data:", error);
    }
  };

  // เรียกใช้ fetchData เมื่อ productId เปลี่ยนแปลง
  useEffect(() => {
    fetchData();
  }, [productId]);

  // แสดงข้อความโหลดข้อมูลขณะรอ
  if (!productinfor) {
    return <p>Loading product data...</p>;
  }

  return (
    <div>
      <h1>View Product Page</h1>
      <div className="view-product-container">
        <h2>Name : {`${productinfor.name}`}</h2>
        <p>{`${productinfor.price} THB`}</p>
        <p>{`${productinfor.description}`}</p>
      </div>
      <button onClick={() => navigate("/")}>Back to Home</button>
    </div>
  );
}

export default ViewProductPage;
