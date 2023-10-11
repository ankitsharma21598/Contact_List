import React, { useEffect } from "react";
// Here we import ToastContainer from ""
import { ToastContainer } from "react-toastify";
import { Route, Routes } from 'react-router-dom';

import Navbar from "./components/Navbar";
import Home from "./components/Home";
import AddContact from "./components/AddContact";
import EditContact from "./components/EditContact";
import { useDispatch } from "react-redux";

const App = () => {
    const dispatch = useDispatch();
    // fetch the user's data from 'https://jsonplaceholder.typicode.com/users/'
    useEffect(() => {
        const data = [];
        const promise = async () => {
            await fetch('https://jsonplaceholder.typicode.com/users/')
                .then((response) => response.json())
                .then((json) => {
                    json.map((contact) => {
                        data.push({
                            id: contact.id,
                            name: contact.name,
                            number: contact.phone,
                            email: contact.email
                        });
                        return contact;
                    })
                });
                // Dispatch fetch contacts with payload
            dispatch({ type: 'FETCH_CONTACTS', payload: data });
        };
        promise();
    }, []);


    return (
        <div className="App">
            <ToastContainer />
            <Navbar />
            <Routes>
                {/* For Home Route */}
                <Route exact path="/" element={<Home />}>

                </Route>
                {/* For Add contact Number */}
                <Route path="/add" element={<AddContact />}>

                </Route>
                {/* For Edit Contact Number */}
                <Route path="/edit/:id" element={<EditContact />}>

                </Route>
            </Routes>
        </div>
    );
}

export default App;