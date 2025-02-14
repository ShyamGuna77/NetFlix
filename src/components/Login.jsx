import Header from "./Header"


const Login = () => {
return (
    <div>
        <Header />
        <div className="relative">
            <img
                className="opacity-50"
                src="https://assets.nflxext.com/ffe/siteui/vlv3/f268d374-734d-474f-ad13-af5ba87ef9fc/web/IN-en-20250210-TRIFECTA-perspective_92338d5d-6ccd-4b1a-8536-eb2b0240a55e_large.jpg"
                alt="Background asset"
            />
            <div className="absolute inset-0 bg-black opacity-70"></div>
        </div>
    </div>
);
}

export default Login