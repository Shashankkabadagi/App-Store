import React from 'react'

const TabItem = ({displayText,tabId,changedTab,isActive}) => {
    
    const tabAction=()=>{
        changedTab(tabId)
    }

    return (
        <div >
        <button className={`border-2 font-semibold border-gray-600 rounded-lg p-1 shadow-md ${isActive === true ? 'bg-gray-600' :''}`} onClick={tabAction}>
            {displayText}
            </button>
        </div>
    )
}

export default TabItem
