import { FaCog, FaUser, FaWallet } from "react-icons/fa";
import Card from "./Card";
import Setting from "./Setting";
import Wallet from "./Wallet";
import { useState } from "react";
import { FaCableCar } from "react-icons/fa6";
import About from "./About";

const tabsData = [
  {
    id: "profile",
    icon: <FaUser className="text-xl" />,
    label: "Profile",
    content: (
      <Card />
    ),
  },
  {
    id: "wallet",
    icon: <FaWallet className="text-xl" />,
    label: "Wallet",
    content: <Wallet />,
  },
  {
    id: "settings",
    icon: <FaCog className="text-xl" />,
    label: "Settings",
    content: <Setting />,
  },
  {
    id: "about",
    icon: <FaCableCar className="text-xl" />,
    label: "About",
    content: <About />,
  }
];

const Tabs = () => {
    const [activeTab,setActiveTab] = useState(tabsData[0].id)
  return (
    <div className="mt-[3rem] p-4">
      <div className="flex border-b border-gray-200">
        {tabsData.map(tab =>
            <button key={tab.id} className={`flex text-center py-2 px-4 font-medium text-sm  ${activeTab === tab.id? 'border-2' : 'text-gray-600'}`} onClick={()=>setActiveTab(tab.id)}>
                <div className="flex items-center justify-center space-x-2">
                    {tab.icon}
                    <span>{tab.label}</span>
                </div>
            </button>
        )}
      </div>

      <div className="mt-4 p-4 rounded-lg">
        {tabsData.find(tab => tab.id === activeTab)?.content}
      </div>
    </div>
  )
}

export default Tabs;