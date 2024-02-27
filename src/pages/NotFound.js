import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const NotFound = () => {
    const navigate = useNavigate();

    useEffect(() => {
        document.title = "Not Found | NotCoderGuy";
    }, []);

    useEffect(() => {
        const handleWheel = (event) => {
          if (event.deltaY > 0) { 
            navigate('/');
          } else if (event.deltaY < 0) {
            navigate('/');
          }
        };
    
        window.addEventListener('wheel', handleWheel, { passive: false });
    
        return () => window.removeEventListener('wheel', handleWheel);
      }, [navigate]);

    return (
        <div className="grid grid-cols-1 gap-2 mt-2 mb-2">
            <div className="bg-base-200 rounded-3xl transition-all duration-500 ease-in-out">
                <div className="flex flex-col items-center p-8 my-44 mx-64">
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