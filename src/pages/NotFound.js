import React, { useEffect } from 'react'

const NotFound = () => {
    useEffect(() => {
        document.title = "Not Found | NotCoderGuy";
    }, []);

    return (
        <div className="grid grid-cols-1 gap-2 mt-2 mb-2">
            <div className="bg-base-200 rounded-3xl transform transition duration-500 ease-in-out">
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