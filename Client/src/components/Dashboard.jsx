import React, { useState, Suspense, lazy } from 'react';
import { Link, useLocation } from 'react-router-dom'
const Search = lazy(() => import('../assets/helper/search'));

const Dashboard = ({ children }) => {
    const Tabs = [
        {
            file: "Intensity",
            path: "/dashboard/intensity"
        },
        {
            file: "Likelihood",
            path: "/dashboard/Likelihood"
        },
        {
            file: "Topics",
            path: "/dashboard/Topics"
        }
    ];
    const location = useLocation();
    const [Ismobile, setMobile] = useState(false);
    const handleMobile = () => {
        setMobile((prev) => !prev);
    }
    const handleClose=()=>
        {
            setMobile((prev)=>!prev);
        };
    return (
        <div className='h-screen'>
                    <div className='h-14 p-4 border-2 flex items-center justify-between rounded-sm shadow-xl'> 
                        <div>
                            <Suspense fallback={<div>..loading</div>}>
                                <Search />
                            </Suspense>
                        </div>
                        <div>
                            <div className='relative'>
                                <button className='border-2 w-10 h-10 flex justify-center items-center rounded-full bg-primary text-secondary text-xl'>
                                    p
                                </button>
                                <div className='w-2 h-2 border-2 border-green-500 bg-green-500 rounded-full absolute top-7 right-3'></div>
                            </div>
                        </div>
                    </div>
                    <div className='mt-8'>
                       <div>{(children)}</div>
                    </div>
        </div>
    )
}

export default Dashboard