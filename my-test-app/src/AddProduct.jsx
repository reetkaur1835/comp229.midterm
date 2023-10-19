import React, { useState } from "react";

export default function Multiple() {
    const [formData, setFormData] = useState({
        name: "",
        description: "",
        category: "",
        quantity: "",
        price: ""
    });

    const handleChange = (event) => {
        const { name, value} = event.target;
        setFormData((prevFormData) => ({...prevFormData, [name]: value}));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        alert(
            `Name: ${formData.name}, 
            Description: ${formData.description}, 
            Category: ${formData.category},
            Quantity: ${formData.quantity},
            Price: ${formData.price}`            
        );
        console.log(
            `Name: ${formData.name}, 
            Description: ${formData.description}, 
            Category: ${formData.category},
            Quantity: ${formData.quantity},
            Price: ${formData.price}`            
        )
    };

    return (
        <form onSubmit={handleSubmit}>
          <label>Name:</label>
          <input
            type="text"
            name="name"
            id="name"
            value={formData.name}
            onChange={handleChange}
          />
        <hr></hr>
          <label>Description:</label>
          <input
            type="text"
            name="description"
            id="description"
            value={formData.description}
            onChange={handleChange}
          />
        <hr></hr>
        <label>Category:</label>
          <input
            type="text"
            name="category"
            id="category"
            value={formData.category}
            onChange={handleChange}
          />
        <hr></hr>
          <label>Quantity:</label>
          <input
            type="number"
            name="quantity"
            id="quantity"
            value={formData.quantity}
            onChange={handleChange}
          />
        <hr></hr>
          <label>Price:</label>
          <input
            type="number"
            name="price"
            id="price"
            value={formData.price}
            onChange={handleChange}
          />
        <hr></hr>
          <button type="submit">
            Submit
          </button>

          <button>
            Cancel
          </button>
        </form>    
    );
}