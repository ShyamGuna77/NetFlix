import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { removeUser } from "../utils/UserSlice";

const Header = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleSignOut = async () => {
        try {
            await signOut(auth);
            dispatch(removeUser());
            navigate("/"); 
        } catch (error) {
            console.error("Error signing out:", error);
        }
    };

    return (
        <div className="absolute z-10 w-full left-0 top-0 px-28 py-2 bg-gradient-to-b from-black flex items-center justify-between">
            <img
                className="w-48"
                src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
                alt="Netflix"
            />
            <div className="relative group">
                <img
                    className="w-10 h-10 cursor-pointer"
                    src="https://occ-0-6247-2164.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABdpkabKqQAxyWzo6QW_ZnPz1IZLqlmNfK-t4L1VIeV1DY00JhLo_LMVFp936keDxj-V5UELAVJrU--iUUY2MaDxQSSO-0qw.png?r=e6e"
                    alt="User Icon"
                />
                <button 
                    className="absolute right-0 ml-8 mt-2 w-18 bg-red-500 text-white text-center font-bold text-sm rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    onClick={handleSignOut}
                >
                    Sign Out
                </button>
            </div>
        </div>
    );
};

export default Header;
