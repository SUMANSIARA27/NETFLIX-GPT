import { useEffect, useState } from "react";
import { auth } from "../utils/firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { useNavigate } from "react-router-dom";
import { LOGO_URL, PROFILE_LOGO } from "../utils/constant";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((state) => state.user);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => navigate("/"))
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName } = user;
        dispatch(addUser({ email, uid, displayName }));
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });
    return () => unsubscribe();
  }, []);

  return (
    <div className="absolute w-screen z-50 flex justify-between items-center px-8 py-4 bg-gradient-to-b from-black/90 to-transparent">
      
      {/* Logo */}
      <img className="w-32" src={LOGO_URL} alt="logo" />

      {/* Profile Dropdown */}
      <div
        className="relative"
        onMouseEnter={() => setIsOpen(true)}
        onMouseLeave={() => setIsOpen(false)}
      >
        {/* Avatar + chevron */}
        <div className="flex items-center gap-2 cursor-pointer px-3 py-2 rounded-md hover:bg-white/10 transition-all duration-200">
          <img
            className="w-8 h-8 rounded-md object-cover"
            src={PROFILE_LOGO}
            alt="profile"
          />
          {/* Chevron icon */}
          <svg
            className={`w-3 h-3 text-gray-300 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
            viewBox="0 0 12 12"
            fill="none"
          >
            <path d="M2 4l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
        </div>

        {/* Dropdown Menu */}
        {isOpen && (
          <div className="absolute right-0 top-full mt-1 w-52 bg-[#1a1a1a] border border-white/10 rounded-lg overflow-hidden z-50">
            
            {/* User info */}
            <div className="flex items-center gap-3 px-4 py-3 border-b border-white/10">
              <img className="w-8 h-8 rounded-md" src={PROFILE_LOGO} alt="profile" />
              <div>
                <p className="text-white text-sm font-medium leading-tight">
                  {user?.displayName || "User"}
                </p>
                <p className="text-gray-400 text-xs leading-tight">{user?.email}</p>
              </div>
            </div>

            {/* Sign out */}
            <button
              onClick={handleSignOut}
              className="w-full flex items-center gap-3 px-4 py-3 text-gray-300 text-sm hover:bg-white/5 hover:text-white transition-all duration-150 cursor-pointer"
            >
              {/* Sign out icon */}
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M9 21H5a2 2 0 01-2-2V5a2 2 0 012-2h4" />
                <polyline points="16 17 21 12 16 7" />
                <line x1="21" y1="12" x2="9" y2="12" />
              </svg>
              Sign out
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;