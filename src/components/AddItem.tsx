import React from 'react'
import EleShopNavBar from './EleShopNavBar'
import "../css/my-mar-stu.css";

export default function AddItem() {
  return (
    <div>

<div>
      <EleShopNavBar />
      <form  className="stu-add-mar">
       
        <div className="form-group">
          <label>Item Name</label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter Item Name"
          />
        </div>
        <div className="form-group">
          <label>Brand</label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter Brand "
          />
        </div>
        <div className="form-group">
          <label>Price</label>
          <input
            type="text"
            className="form-control"

            placeholder="Enter Price"
          />
        </div>
        <div className="form-group">
          <label>Image Url</label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter image "
          />
        </div>
        <div className="form-group">
          <label>Type</label>
          <input
            type="text"
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
  )
}
