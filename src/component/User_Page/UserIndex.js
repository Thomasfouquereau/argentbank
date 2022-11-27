import React, { useEffect } from "react";
import axios from "axios";
import UserAccount from "./User_Account_Page/UserAccount";
import UserName from "./User_Account_Page/UserName";
import Style from "./User_Account_Page/UserAccount.module.css";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addFirstName } from "../../Store";
import { addLastName } from "../../Store";

export default function UserIndex() {
  const navigate = useNavigate()
  const tokenLocalStorage = localStorage.getItem('token');
  const body = {};
  const dispatch = useDispatch();
  const createFirstName = (firstName) => {
    dispatch(addFirstName(firstName));
    console.log(addFirstName(firstName))
  };
  const createLastName = (lastName) => {
    dispatch(addLastName(lastName));
  };

  useEffect(() => {
    axios.post('http://localhost:3001/api/v1/user/profile', body, {
      headers: {
        'Authorization': `Bearer ${tokenLocalStorage}`
      }
    })
      .then(function (response) {
        console.log(response);
        const firstName = response.data.body.firstName;
        const lastName = response.data.body.lastName;
        createFirstName(firstName);
        createLastName(lastName);
      })
      .catch(function (error) {
        console.log(error);
        if (error.response.status === 401) {
          navigate('/error401', { replace: true })
        }
      });
  }, [])
  return (
    <div className={Style.userPage}>
      <UserName />
      <UserAccount />
    </div>
  );
}