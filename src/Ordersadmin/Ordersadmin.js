import React, { useEffect, useState } from 'react';
import Navbar from '../Navbar/Navbar.jsx';
import "./Ordersadmin.css";

const API_BASE = "https://diy-service.onrender.com";

export default function Ordersadmin() {
  const [orders, setOrders] = useState([]);
  const [filteredOrders, setFilteredOrders] = useState([]);
  const [selectedDate, setSelectedDate] = useState("");

  useEffect(() => {
    getOrders();
  }, []);

  const getOrders = async () => {
    const res = await fetch(API_BASE + '/orders', {
      method: 'GET',
      headers: {
        "Content-Type": "application/json"
      }
    });
    const data = await res.json();
    setOrders(data);
    setFilteredOrders(data);
  };

  const handleDateFilter = (event) => {
    const selectedDate = event.target.value;
    setSelectedDate(selectedDate);
    if (selectedDate !== "") {
      const filtered = orders.filter(order => order.createdAt.includes(selectedDate));
      setFilteredOrders(filtered);
    } else {
      setFilteredOrders(orders);
    }
  };

  return (
    <div className='Ordersadmin'>
      <div className='datefilter'>
          <h4>Filter Orders by Date:</h4>
          <input
            type="date"
            value={selectedDate}
            onChange={handleDateFilter}
          />
        </div>
        <Navbar />
      <div className='Ordersbox'>
        {filteredOrders.map(order => (
          <div key={order._id} className='itemcard'>
            <h6>Username: {order.username}</h6>
            <h6>Selected Items:</h6>
            <ul>
              {order.SelectedItems.map(item => (
                <li key={item._id}>
                  {item.itemName} - {item.itemCost} - Quantity: {item.quantity}
                </li>
              ))}
            </ul>
            <p>Created At: {order.createdAt}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
