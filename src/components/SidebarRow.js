import React from 'react';

function SidebarRow({ selected, title, Icon }) {
  return (
    <div>
        <div className='flex flex-row space-x-6 py-4 w-96'>
            <Icon className="text-gray-600" />
            <h2 className="text-gray-900">{title}</h2>
        </div>    
    </div>
  );
}

export default SidebarRow;