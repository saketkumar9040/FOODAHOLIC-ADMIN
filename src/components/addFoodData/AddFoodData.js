import React, { useState } from "react";
import "./AddFoodData.css";

import { db, storage } from "../../firebase/FirebaseConfig";
import { addDoc, collection } from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import Navbar from "../navbar/Navbar";
import addFoodBackground from "../../assets/add-food-background.jpg"

const AddFoodData = () => {
  const [foodName, setFoodName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState(null);
  const [foodCategory, setFoodCategory] = useState("");
  const [foodType, setFoodType] = useState("");
  const [mealType, setMealType] = useState("");
  const [foodAddOn, setFoodAddOn] = useState("");
  const [foodAddOnPrice, setFoodAddOnPrice] = useState("");

  const [restaurantName, setRestaurantName] = useState("");
  const [restaurantEmail, setRestaurantEmail] = useState("");
  const [restaurantNumber, setRestaurantNumber] = useState("");
  const [restaurantAddressBuilding, setRestaurantAddressBuilding] =
    useState("");
  const [restaurantAddressStreet, setRestaurantAddressStreet] = useState("");
  const [restaurantAddressCity, setRestaurantAddressCity] = useState("");
  const [restaurantAddressPincode, setRestaurantAddressPincode] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    // if(restaurantAddressPincode!==6){
    //   alert("Pincode should be 6 digit");
    //   setRestaurantAddressPincode("");
    //   return;
    // }
    // if(restaurantNumber!==10){
    //   alert("Mobile Number should be 10 digit");
    //   return;
    // }

    if (image === null) {
      alert("please select an image");
      return;
    } else {
      try {
        const imageRef = ref(
          storage,
          `FoodImages/${Date.now() + image.name}`
        );
        await uploadBytes(imageRef, image);

        alert("Image uploaded successfully");
        const uploadedImage = await getDownloadURL(imageRef);
        console.log(uploadedImage);
        const foodData = {
          foodName,
          description,
          price,
          foodImageUrl: uploadedImage,
          foodImageName: imageRef.name,
          foodCategory,
          foodType,
          mealType,
          foodAddOn,
          foodAddOnPrice,
          restaurantName,
          restaurantNumber,
          restaurantEmail,
          restaurantAddressBuilding,
          restaurantAddressStreet,
          restaurantAddressCity,
          restaurantAddressPincode,
          id: new Date().getTime().toString(),
        };
        try {
          const docRef = await addDoc(collection(db, "foodData"), foodData);
          console.log(docRef.id);
          alert("data added successfully", docRef.id);
          window.location.reload(true); // to refresh page after data is added
        } catch (error) {
          alert("Error adding Document", error);
        }
      } catch (error) {
        alert("cannot upload image", error.message);
      }
    }
  };

  return (
    <>
      <Navbar />
      <div className="main-container" style={{ backgroundImage:`url(${addFoodBackground})`,
    backgroundRepeat:"no-repeat",backgroundSize:"cover",height:"100%"}}>
        <div className="title">Add Food Data</div>
        <form className="form-container">
          <label className="text">Food Name</label>
          <input
            type="text"
            name="food_name"
            className="input-box"
            onChange={(e) => setFoodName(e.target.value)}
          />
          <br />
          <label className="text">Food Description</label>
          <input
            type="text"
            name="food_description"
            className="input-box"
            onChange={(e) => setDescription(e.target.value)}
          />
          <br />
          <div className="outerContainer">
            <div className="innerContainer">
              <label className="text">Food Price</label>
              <input
                type="number"
                name="food_price"
                className="input-box"
                onChange={(e) => setPrice(e.target.value)}
              />
            </div>
            <div className="innerContainer">
              <label className="text">Food Type</label>
              <select
                name="food_type"
                onChange={(e) => {
                  setFoodType(e.target.value);
                }}
              >
                <option value="null">Select Food Type</option>
                <option value="veg">Veg</option>
                <option value="non-veg">Non-Veg</option>
              </select>
            </div>
          </div>
          <br />
          <div className="outerContainer">
            <div className="innerContainer">
              <label className="text">Add-On Name</label>
              <input
                type="text"
                name="food_addon_name"
                className="input-box"
                onChange={(e) => setFoodAddOn(e.target.value)}
              />
            </div>
            <div className="innerContainer">
              <label className="text">Add-On Price</label>
              <input
                type="text"
                name="food_addon_price"
                className="input-box"
                onChange={(e) => setFoodAddOnPrice(e.target.value)}
              />
            </div>
          </div>
          <br />
          <div className="outerContainer">
            <div className="innerContainer">
              <label className="text">Food Image</label>
              <input
                type="file"
                name="food_image"
                className="input-file"
                onChange={(e) => setImage(e.target.files[0])}
              />
            </div>
          </div>
          <br />
          <div className="outerContainer">
            <div className="innerContainer">
              <label className="text">Food Category</label>
              <select
                name="food_category"
                onChange={(e) => setFoodCategory(e.target.value)}
              >
                <option value="null">Select Food Category</option>
                <option value="indian">Indian</option>
                <option value="chinese">Chinese</option>
                <option value="italian">Italian</option>
                <option value="mexican">Mexican</option>
                <option value="american">American</option>
              </select>
            </div>
            <div className="innerContainer">
              <label className="text">Meal Type</label>
              <select
                name="meal_type"
                onChange={(e) => setMealType(e.target.value)}
              >
                <option value="null">Select Meal Type</option>
                <option value="starters">Starters</option>
                <option value="breakfast">Breakfast</option>
                <option value="lunch">Lunch</option>
                <option value="dinner">Dinner</option>
                <option value="liquid">Liquid</option>
              </select>
            </div>
          </div>
          <br />
          <label className="text">Restaurant Name</label>
          <input
            type="text"
            name="restaurant_name"
            className="input-box"
            onChange={(e) => setRestaurantName(e.target.value)}
          />
          <br />
          <div className="outerContainer">
            <div className="innerContainer">
              <label className="text">Restaurant Building Number/Name</label>
              <input
                type="text"
                name="restaurant_address_building"
                className="input-box"
                onChange={(e) => setRestaurantAddressBuilding(e.target.value)}
              />
            </div>
            <div className="innerContainer">
              <label className="text">Restaurant Street/Area Number</label>
              <input
                type="text"
                name="restaurant_address_city"
                className="input-box"
                onChange={(e) => setRestaurantAddressStreet(e.target.value)}
              />
            </div>
          </div>
          <br />
          <div className="outerContainer">
            <div className="innerContainer">
              <label className="text">Restaurant City</label>
              <input
                type="text"
                name="restaurant_address_city"
                className="input-box"
                onChange={(e) => setRestaurantAddressCity(e.target.value)}
              />
            </div>
            <div className="innerContainer">
              <label className="text">Restaurant Pincode</label>
              <input
                type="text"
                name="restaurant_address_pincode"
                className="input-box"
                onChange={(e) => setRestaurantAddressPincode(e.target.value)}
              />
            </div>
          </div>
          <br />
          <div className="outerContainer">
            <div className="innerContainer">
              <label className="text">Restaurant Number</label>
              <input
                type="number"
                name="restaurant_number"
                className="input-box"
                onChange={(e) => setRestaurantNumber(e.target.value)}
              />
            </div>
            <div className="innerContainer">
              <label className="text">Restaurant Email</label>
              <input
                type="email"
                name="restaurant_email"
                className="input-box"
                onChange={(e) => setRestaurantEmail(e.target.value)}
              />
            </div>
          </div>
          <br />

          <div className="buttonContainer">
            <button type="submit" className="button" onClick={handleSubmit}>
              Add Food
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default AddFoodData;
