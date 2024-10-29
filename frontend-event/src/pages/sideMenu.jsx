import { useState } from 'react';

import { useSwipeable } from 'react-swipeable'
import '../pages/styles/sideMenu.css';  // Style the menu here

function SideMenuLayout() {
    const [isOpen, setIsOpen] = useState(false);

    const handlers = useSwipeable({
        onSwipedLeft: () => setIsOpen(false),
        onSwipedRight: () => setIsOpen(true),
    })

    return (
        <div className={`swipe-menu ${isOpen ? 'open' : ''}`} {...handlers}>
            {isOpen && (
                <div>
                    <div>

                    </div>
                </div>
            )}
        </div>
    );
}

export default SideMenuLayout;
