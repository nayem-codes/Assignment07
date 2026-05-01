import { useState } from "react";
import { CallFriendContext } from "./CallFriendContext";
import InstallApps from "../pages/installApps/InstallApps";



const CallFriendProvider = ({ children }) => {
    const [InstallApps, setInstallApps] = useState([]);
    const data = {
        InstallApps,
        setInstallApps,
    };

    return <CallFriendContext.Provider value={data}>{children}</CallFriendContext.Provider>
};

export default CallFriendProvider;