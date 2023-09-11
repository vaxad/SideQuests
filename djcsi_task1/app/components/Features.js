import React from 'react'

export default function Features() {
    return (
        <div id='features' className=' flex flex-col justify-center items-center min-h-screen w-full overflow-y-hidden' style={{ backgroundColor: '#fcfbff', color: '#1c2235' }}>
            <div className=' flex text-center py-12'>
                <h1 className=' font-extrabold text-3xl lg:text-5xl'>Tons of Features</h1>
            </div>
            <div className=' flex lg:flex-row flex-col justify-center items-center px-5  lg:px-24 pb-10'>
                <div className=' flex justify-center items-center flex-col lg:text-right text-left gap-8 py-4'>
                    <div className=' grid grid-cols-4 w-4/5'>

                        <div className='lg:hidden flex col-span-1  justify-center items-center'>
                            <img src='https://www.gokozo.com/assets/images/Feature%20icons/budget.svg' />
                        </div>
                        <div className=' col-span-3 flex flex-col gap-2'>
                            <h1 className=' font-bold text-lg'>Budget Multiple Projects</h1>
                            <p className=' font-normal text-sm'>Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.</p>
                        </div>
                        <div className='lg:flex hidden col-span-1  justify-center items-center'>
                            <img src='https://www.gokozo.com/assets/images/Feature%20icons/budget.svg' />
                        </div>
                    </div>
                    <div className=' grid grid-cols-4 w-4/5'>

                        <div className=' col-span-1 lg:hidden flex justify-center items-center'>
                            <img src='https://www.gokozo.com/assets/images/Feature%20icons/Approval.svg' />
                        </div>
                        <div className=' col-span-3  flex-col gap-2'>
                            <h1 className=' font-bold text-lg'>Invoice Scan & Auto-Import</h1>
                            <p className=' font-normal text-sm'>Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.</p>
                        </div>
                        <div className=' col-span-1 lg:flex hidden justify-center items-center'>
                            <img src='https://www.gokozo.com/assets/images/Feature%20icons/Approval.svg' />
                        </div>
                    </div>
                    <div className=' grid grid-cols-4 w-4/5'>

                        <div className=' col-span-1 lg:hidden flex justify-center items-center'>
                            <img src='https://www.gokozo.com/assets/images/Feature%20icons/Inventory.svg' />
                        </div>
                        <div className=' col-span-3 flex-col gap-2'>
                            <h1 className=' font-bold text-lg'>Inventory Tracker</h1>
                            <p className=' font-normal text-sm'>Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.</p>
                        </div>
                        <div className=' col-span-1  lg:flex hidden justify-center items-center'>
                            <img src='https://www.gokozo.com/assets/images/Feature%20icons/Inventory.svg' />
                        </div>
                    </div>
                    <div className=' grid grid-cols-4 w-4/5'>

                        <div className=' col-span-1 lg:hidden flex justify-center items-center'>
                            <img src='https://www.gokozo.com/assets/images/Feature%20icons/Invoice.svg' />
                        </div>
                        <div className=' col-span-3  flex-col gap-2'>
                            <h1 className=' font-bold text-lg'>Approval System with Levels</h1>
                            <p className=' font-normal text-sm'>Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.</p>
                        </div>
                        <div className=' col-span-1 lg:flex hidden justify-center items-center'>
                            <img src='https://www.gokozo.com/assets/images/Feature%20icons/Invoice.svg' />
                        </div>
                    </div>
                </div>
                <div className=' flex justify-center items-center h-full'>
                    <img className=' lg:block hidden h-1/2' src='/mockup2.png' />
                </div>
                <div className=' flex justify-center items-center flex-col text-left gap-8 py-4'>

                    <div className=' grid grid-cols-4 w-4/5'>
                        <div className=' col-span-1 flex justify-center items-center'>
                            <img src='https://www.gokozo.com/assets/images/Feature%20icons/Assign.svg' />
                        </div>
                        <div className=' col-span-3 flex flex-col gap-2'>
                            <h1 className=' font-bold text-lg'>Assign Project Members</h1>
                            <p className=' font-normal text-sm'>Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.</p>
                        </div>
                    </div>
                    <div className=' grid grid-cols-4 w-4/5'>
                        <div className=' col-span-1 flex justify-center items-center'>
                            <img src='https://www.gokozo.com/assets/images/Feature%20icons/Dashboard.svg' />
                        </div>
                        <div className=' col-span-3 flex flex-col gap-2'>
                            <h1 className=' font-bold text-lg'>Dashboard</h1>
                            <p className=' font-normal text-sm'>Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.</p>
                        </div>
                    </div>
                    <div className=' grid grid-cols-4 w-4/5'>
                        <div className=' col-span-1 flex justify-center items-center'>
                            <img src='https://www.gokozo.com/assets/images/Feature%20icons/Duplicate.svg' />
                        </div>
                        <div className=' col-span-3 flex flex-col gap-2'>
                            <h1 className=' font-bold text-lg'>Duplicates Detector</h1>
                            <p className=' font-normal text-sm'>Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.</p>
                        </div>
                    </div>
                    <div className=' grid grid-cols-4 w-4/5'>
                        <div className=' col-span-1 flex justify-center items-center'>
                            <img src='https://www.gokozo.com/assets/images/Feature%20icons/Integration.svg' />
                        </div>
                        <div className=' col-span-3 flex flex-col gap-2'>
                            <h1 className=' font-bold text-lg'>Integrations with 3rd Party Tools</h1>
                            <p className=' font-normal text-sm'>Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
