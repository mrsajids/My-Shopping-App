import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getUserDetails } from "../action/userAction";

const ProfileDetail = () => {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState("");

    const navigate = useNavigate()
    const dispatch = useDispatch();
  const userDetails = useSelector((state) => state.userDetails);
  const { loading, error, user } = userDetails;
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  useEffect(() => {
    if (!userInfo) {
        navigate("/login");
    } else {
      if (user) {
        dispatch(getUserDetails(userInfo._id));
      } else {
        // setName(user.name);
        // setEmail(user.email);
    }
}

  }, [navigate, userInfo, user, dispatch]);

  return (
    <>
ProfileDetail
    </>
  )
}
export default ProfileDetail