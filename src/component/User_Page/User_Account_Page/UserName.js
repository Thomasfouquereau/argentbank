import axios from "axios";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import Style from "./UserAccount.module.css";
import { addFirstName,addLastName  } from "../../../Store";
import { useDispatch } from "react-redux";

export default function UserPage() {
    const getFirstName = useSelector(state => state.user.firstName);
    const getLastName = useSelector(state => state.user.lastName);
    const getFullName = useSelector(state => state.user.firstName + ' ' + state.user.lastName);
    const [isDisplay, setIsDisplay] = useState(false);
    const [firstName, setFirstName] = useState(getFirstName);
    const [lastName, setLastName] = useState(getLastName);
    const body = {};
    const handleFirstNameChange = (event) => {
        setFirstName(event.target.value);
    };
    const handleLastNameChange = (event) => {
        setLastName(event.target.value);
    };
    const tokenLocalStorage = localStorage.getItem('token');
    const dispatch = useDispatch();
    const createFirstName = (firstName) => {
        dispatch(addFirstName(firstName));
      };
      const createLastName = (lastName) => {
        dispatch(addLastName(lastName));
      };
    const saveButton = () => {
        axios.put('http://localhost:3001/api/v1/user/profile', {
            firstName: firstName,
            lastName: lastName
        }, {
            headers: {
                'Authorization': `Bearer ${tokenLocalStorage}`
            }
        })
            .then(function (response) {
               return axios.post('http://localhost:3001/api/v1/user/profile', body, {
                    headers: {
                      'Authorization': `Bearer ${tokenLocalStorage}`
                    }
                  })
                    .then(function (response) {
                      const firstName = response.data.body.firstName;
                      const lastName = response.data.body.lastName;
                      createFirstName(firstName);
                      createLastName(lastName);
                    })
            })
            .catch(function (error) {
                console.log(error);
            })
        setIsDisplay(false)
    }
    return (
        <div className={Style.header}>
            <h1>Welcome back<br />{getFullName}!</h1>
            <button className={Style.editButton} onClick={() => setIsDisplay(!isDisplay)}>Edit Name</button>
            <h2 className={Style.srOnly}>Accounts</h2>
            <div className={Style.editName} style={{ display: isDisplay ? "block" : "none" }}>
                <div className={Style.editInput}>
                    <input type="text" onChange={handleFirstNameChange} placeholder={firstName} />
                    <input type="text" onChange={handleLastNameChange} placeholder={lastName} />
                </div>
                <div className={Style.buttonEditName}>
                    <button onClick={saveButton} >Save</button>
                    <button >Cancel</button>
                </div>
            </div>
        </div>
    );
}