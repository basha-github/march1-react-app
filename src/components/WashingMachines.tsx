import React, { useEffect, useState } from "react";
import NavBar from "./NavBar";
import axios from "axios";
import EleShopNavBar from "./EleShopNavBar";

interface ShopItem{
  name:string,
  brand:string,
  price:number,
  imgeUrl:string,
  
}

export default function WashingMachines() {
  const [shopData, setShopData] = useState<ShopItem[]>([]);
  useEffect(() => {
    axios
      .get("http://localhost:8080/varun/shop/get/all?type=Wash")
      .then((res) => {
        console.log("res--->"+res.data);
        setShopData(res.data);
      });
  }, []);

  return (
    <div>
      <EleShopNavBar />

      <table className="table">
        <thead>
          <tr>
            <th scope="col">ImgUrl</th>

            <th scope="col">Brand</th>
            <th scope="col">Name</th>
            <th scope="col">Price</th>
          </tr>
        </thead>
        <tbody>
          {shopData.map((eachRec) => (
            <tr>
              <th>

               <img src= {eachRec.imgeUrl} /> 
              </th>

              <th>{eachRec.brand}</th>
              <td>{eachRec.name}</td>
              <td>{eachRec.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
