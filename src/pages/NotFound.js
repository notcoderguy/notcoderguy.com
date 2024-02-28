import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const NotFound = () => {
    const navigate = useNavigate();
    const [lastNavigationTime, setLastNavigationTime] = useState(0);
    const navigationCooldown = 1000;

    useEffect(() => {
        document.title = "Not Found | NotCoderGuy";
    }, []);

    useEffect(() => {
        let scrollIntensity = 0;
        const handleWheel = (event) => {
            const now = Date.now();
            if (now - lastNavigationTime < navigationCooldown) return;
            scrollIntensity += Math.abs(event.deltaY);
            if (scrollIntensity > 300) {
                if (event.deltaY > 0) {
                    navigate('/');
                } else {
                    navigate('/');
                }
                setLastNavigationTime(now);
                scrollIntensity = 0;
            }
        };
        window.addEventListener('wheel', handleWheel, { passive: false });
        return () => {
            window.removeEventListener('wheel', handleWheel);
        };
    }, [navigate, lastNavigationTime]);

    return (
        <div className="grid grid-cols-1 gap-2 mt-2">
            <div className="bg-base-200 rounded-3xl">
                <div className="flex flex-col items-center p-8 my-32 md:my-44 lg:mx-64">
                    <div className="flex flex-col justify-center max-w-xl mx-auto">
                        <div className="items-center justify-center text-center pb-3">
                            <p className="text-7xl font-semibold text-white">Not Found</p>
                        </div>
                        <div className="text-md text-base-content tracking-wider text-center mb-5">
                            <p>
                                This page does not exist. Please check the URL and try again.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NotFound