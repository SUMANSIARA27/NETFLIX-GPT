import { useEffect, useState } from "react";
import { auth } from "../utils/firebase";
import {onAuthStateChanged, signOut}from "firebase/auth";
import {useDispatch} from "react-redux";
import {addUser, removeUser} from "../utils/userSlice";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const [isHovered, setIsHovered] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleClick =()=>{
    // dispatch(removeUser());
   
   signOut(auth).then(() => {
    navigate("/")
}).catch((error) => {
  console.log(error);
  
});
  }
  
  
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName } = user;
        dispatch(addUser({ email: email, uid: uid, displayName: displayName }));
        navigate("/browse")
      } else {
        dispatch(removeUser());
        navigate("/")
      }
    });
  }, []);

  return (
    <div className="w-screen flex justify-between px-8 w-screen py-2 absolute bg-linear-to-b from-black">
      <img
        className="w-44"
        src="https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production_2026-04-27/consent/87b6a5c0-0104-4e96-a291-092c11350111/019ae4b5-d8fb-7693-90ba-7a61d24a8837/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
        alt="logo"
      />
      <div
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <img
          className="w-10 my-5 h-10 cursor-pointer "
          src="https://wallpapers.com/images/hd/netflix-profile-pictures-1000-x-1000-qo9h82134t9nv0j0.jpg"
          alt="user icon"
        />
        {isHovered && (
          <div onClick={handleClick}  className="absolute top-20 right-2 opacity-12 bg-black bg-opacity-80 text-white text-sm px-4 py-2 rounded cursor-pointer hover:bg-opacity-100">
            Sign Out
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
