import { useState } from "react";
import { motion } from "framer-motion";
import { fadeInAnimation } from "../../utils/animationConstants";


interface Tab {
    title: string;
    iconContent: React.ReactNode;
    content: React.ReactNode;
}

interface TabsProps {
    tabs: Tab[];
    isLoading: boolean
}

const Tabs: React.FC<TabsProps> = ({ tabs, isLoading }) => {

    const [activeTab, setActiveTab] = useState(0);

    const handleTabClick = (index: number) => {
        setActiveTab(index);
    };

    return (
        <motion.div id="tabs" className="" {...fadeInAnimation}>
            {!isLoading &&
                <div id="headerTabs" className="flex space-x-1 ">
                    {tabs.map((tab, index) => (
                        <div
                            key={index}
                            className={`w-1/2 flex items-center cursor-pointer rounded-t p-1 px-3 space-x-1 ${index === activeTab ? 'bg-gray-100' : 'bg-green-400'}`}
                            onClick={() => handleTabClick(index)}
                        >
                            <div className={`${index === activeTab ? 'stroke-black' : 'stroke-black'}`}>{tab.iconContent}</div><span className={`${index === activeTab ? 'text-black' : 'text-black'}`}>{tab.title}</span>
                        </div>
                    ))}
                </div>
            }
            <div id="contentTab" className="w-96">
                {tabs[activeTab].content}
            </div>
        </motion.div>
    );
}

export default Tabs