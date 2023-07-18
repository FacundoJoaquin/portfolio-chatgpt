import React, { createContext, useState } from 'react';

export const ItemsContext = createContext();

export const ItemsProvider = ({ children }) => {
	const [showSidebar, setShowSidebar] = useState(true);

	const handleSidebar = () => {
		setShowSidebar(!showSidebar);
	};

	return (
		<ItemsContext.Provider
			value={{ showSidebar, setShowSidebar, handleSidebar }}
		>
			{children}
		</ItemsContext.Provider>
	);
};
