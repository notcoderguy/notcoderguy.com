import React, { useEffect } from 'react'

const NotFound = () => {
    useEffect(() => {
        document.title = "Not Found | NotCoderGuy";
    }, []);

    return (
        <div className="flex flex-col justify-center items-center flex-1 py-12 sm:px-6 lg:px-8">
            <div className="flex flex-col justify-around">
                <div className="space-y-6">
                    <div className="flex items-center justify-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="flex flex-col justify-center max-w-xl mx-auto">
                            <div className="items-center justify-center text-center pb-5">
                                <p className="text-7xl font-semibold text-white">Not Found</p>
                            </div>
                            <div className="text-sm text-gray-400 tracking-wider text-center">
                                <p>
                                    This page does not exist. Please check the URL and try again.
                                </p>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NotFound