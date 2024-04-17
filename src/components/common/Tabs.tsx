import { useState } from "react";


interface Tab {
    title: string;
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
        <div id="tabs" className="">
            {!isLoading &&
                <div className="flex">
                    {tabs.map((tab, index) => (
                        <div
                            key={index}
                            className={`w-1/2 cursor-pointer p-1 px-3 ${index === activeTab ? 'bg-green-400' : 'bg-gray-200 '}`}
                            onClick={() => handleTabClick(index)}
                        >
                            <span className={`text-base font-normal italic ${index === activeTab ? 'text-white' : 'text-black'}`}>{tab.title}</span>
                        </div>
                    ))}
                </div>
            }
            <div id="contentTab" className="w-80">
                {tabs[activeTab].content}
            </div>
        </div>
    );
}

export default Tabs