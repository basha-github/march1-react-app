import React, { useState } from "react";
import EleShopNavBar from "./EleShopNavBar";
import "../css/my-mar-stu.css";

export default function AddItem() {
  const [name, setName] = useState();
  const [brand, setBrand] = useState();
  const [price, setPrice] = useState();
  const [imageUrl, setImageUrl] = useState();
  const [itemType, setItemType] = useState();

  const getName = (e: any) => {
    setName(e.target.value);
  };

  const getBrand = (e: any) => {
    setBrand(e.target.value);
  };

  const getPrice = (e: any) => {
    setPrice(e.target.value);
  };
  const getImageUrl = (e: any) => {
    setImageUrl(e.target.value);
  };

  const getItemType = (e: any) => {
    setItemType(e.target.value);
  };

  const saveItem = (e: FormDataEvent) => {
    e.preventDefault();

    console.log("name--->"+name);
    console.log("brand--->"+brand);
    console.log("price--->"+price);
    console.log("imge--->"+imageUrl);
    console.log("type--->"+itemType);

  };

  return (
    <div>
      <div>
        <EleShopNavBar />
        <form onSubmit={saveItem} className="stu-add-mar">
          <div className="form-group">
            <label>Item Name</label>
            <input
              type="text"
              onChange={getName}
              className="form-control"
              placeholder="Enter Item Name"
            />
          </div>
          <div className="form-group">
            <label>Brand</label>
            <input
              type="text"
              onChange={getBrand}
              className="form-control"
              placeholder="Enter Brand "
            />
          </div>
          <div className="form-group">
            <label>Price</label>
            <input
              type="text"
              onChange={getPrice}
              className="form-control"
              placeholder="Enter Price"
            />
          </div>
          <div className="form-group">
            <label>Image Url</label>
            <input
              type="text"
              onChange={getImageUrl}
              className="form-control"
              placeholder="Enter image "
            />
          </div>
          <div className="form-group">
            <label>Type</label>
            <input
              type="text"
              onChange={getItemType}
              className="form-control"
              placeholder="Enter Type"
            />
          </div>

          <br />
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
