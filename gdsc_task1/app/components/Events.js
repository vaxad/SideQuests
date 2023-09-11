"use client"
import React, { useEffect, useState } from 'react'
import EventCard from './EventCard'
import useStore from '@/lib/zustand'

export default function Events() {
    const { mode } = useStore()
    const [category, setcategory] = useState('all')
    const sessions = [{
        img: 'codeshastra.png',
        title: 'Code Shastra 8.0',
        date: 'Mar 26-27, 2022',
        description: ''
    },
    {
        img: 'pixelhacks.png',
        title: 'PixelHacks',
        date: 'Nov 29, 2021',
        description: 'Speaker Session / Tech Talk - Virtual'
    },
    {
        img: 'os101.png',
        title: 'Open Source 101',
        date: 'Oct 23, 2021',
        description: 'Speaker Session / Tech Talk - Virtual'
    }
    ]

    const festivals = [{
        img: 'flutter.png',
        title: 'Getting Started With Flutter - Flutter Festival GDSC DJSCE',
        date: 'Mar 1, 2022',
        description: 'Speaker Session / Tech Talk - Virtual'
    },
    {
        img: 'android.png',
        title: 'Android Study Jams 2021 - Session 3',
        date: 'Dec 11, 2021',
        description: 'Android Study Jams: Prior Programming Experience - Virtual'
    },
    {
        img: 'android.png',
        title: 'Android Study Jam Session 2: Build app from scratch',
        date: 'Dec 6, 2021',
        description: 'Android Study Jams: New to Programming - Virtual'
    },
    {
        img: 'android.png',
        title: 'Android Study Jams 2021 - Info Session',
        date: 'Dec 1, 2021',
        description: 'Android Study Jams: New to Programming - Virtual'
    },
    {
        img: 'gcloud.png',
        title: 'A Kickstart to Google Cloud',
        date: 'Sep 27, 2021',
        description: 'Speaker Session / Tech Talk - Virtual'
    },

    ]

    const [events, setevents] = useState(sessions.concat(festivals))
    const cards = events.map((el) => {
        return (
            <EventCard el={el} key={el.title} />
        )
    })
    useEffect(() => {
        if (category === "all") {
            setevents(sessions.concat(festivals))
        } else if (category === "sessions") {
            setevents(sessions)
        } else {
            setevents(festivals)
        }
    }, [category])

    return (
        <div className={`flex w-full lg:px-16 md:px-14 px-5 flex-col gap-10 justify-center items-center ${mode ? 'text-dark' : 'text-light'}`}>
            <ul className=' flex flex-row w-full justify-between items-center rounded-xl'>
                <li onClick={() => { setcategory("all") }} className={`w-full text-center transition-all cursor-pointer py-4 rounded-l-xl ${category === 'all' ? mode ? 'bg-gray-300' : 'bg-zinc-800' : mode ? 'bg-gray-200' : 'bg-zinc-700'} hover:bg-gray-300`}>All</li>
                <li onClick={() => { setcategory("sessions") }} className={`w-full text-center transition-all cursor-pointer py-4  ${category === 'sessions' ? mode ? 'bg-gray-300' : 'bg-zinc-800' : mode ? 'bg-gray-200' : 'bg-zinc-700'} hover:bg-gray-300`}>Sessions</li>
                <li onClick={() => { setcategory("festivals") }} className={`w-full text-center transition-all cursor-pointer py-4 rounded-r-xl  ${category === 'festivals' ? mode ? 'bg-gray-300' : 'bg-zinc-800' : mode ? 'bg-gray-200' : 'bg-zinc-700'} hover:bg-gray-300`}>Festivals</li>
            </ul>
            <div className=' grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10 pb-16'>
                {cards}
            </div>
        </div>
    )
}
