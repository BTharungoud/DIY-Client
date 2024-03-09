import React,{useEffect,useState} from 'react'
import "./Menupage.css"
import Navbar from '../Navbar/Navbar';
const API_BASE = "https://diy-service.onrender.com"

export default function Menupage() {
    const [menu, setMenu] = useState([]);
    const [popupActive, setPopupActive] = useState(false);
    const [newMenu, setNewMenu] = useState("");
    // const [boolean,setBoolean]=useState(false);

    useEffect(() => {
            GetMenu();
    }, [menu]);

    const GetMenu = () => {  
        fetch(API_BASE + "/menu")
            .then(res => res.json())
            .then(data => setMenu(data))
            .catch(err => console.log("Error: ", err));
    }   

    const Itemavaliablity = async (id) => {
        console.log(id);
        const data = await fetch(API_BASE + "/menu/admin/"+id,{
            method:"PUT"
        }) 

        setMenu(menu => menu.map(item => {
            if (item._id === data._id) {
                item.avaliablity = data.avaliablity;
            }
            return item;
        }));
    }

    const deleteMenu = async id => {
        const data  = await fetch(API_BASE + "/menu/admin", {
            method: "DELETE",
            headers : {
                "Content-Type": "application/json"
            },
            body:JSON.stringify({
                id:id
            })
        })
        // setBoolean(true);
        setMenu(menu => menu.filter(item => item._id !== data._id));
    }

    const addMenu = async () => {
        let item = newMenu.split("@")
        const itemName = item[0];
        const itemCost = Number(item[1]);
        const data = await fetch(API_BASE + "/menu/admin", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                itemName:itemName,
                itemCost:itemCost
            })
        })

        setMenu(menu => [...menu, data]);
        setPopupActive(false);
        setNewMenu("");
    }




	return (
		<div className="Menu">
            <Navbar/>
            <h4>Here is the Menu,update if required.</h4>
            <div>
            <div className="menu">
                {menu.map(item => (

                <div className={
                    "item " + (item.avaliablity ? "" : "is-complete")} 
                    key={item._id} onClick={() => Itemavaliablity(item._id)}>

                    <div className="checkbox"></div>

                    <div className="text">{ item.itemName }  cost = ₹{item.itemCost}\-</div>

                    <div className="deleteItem" onClick={() => deleteMenu
                    (item._id)}><b>🗑</b></div>
                </div>
                ))}
                {
                    menu.length === 0 ? (
                        <div className="no-menu">No items for the day!</div>
                    ) : ''
                }
            </div>
            </div>

            <div className="addPopup" onClick={() => setPopupActive(true)}>Add new item</div>
            {popupActive ? (
                <div className="popup">
                    <div className="closePopup" onClick={() => setPopupActive
                    (false)}>x</div>
                        <div className="content">
                            <h3>Add Item</h3>
                            <h6>Ex:- "ItemName"@"ItemCost".</h6>
                            <input type="text" 
                            className='add-item-input'
                            onChange={e => setNewMenu(e.target.value)} 
                            value={newMenu}/>
                        <div className="button" onClick={addMenu}>Add to menu</div>

                        </div>
                </div>
            ) : ''}     
        </div>
	);
}
