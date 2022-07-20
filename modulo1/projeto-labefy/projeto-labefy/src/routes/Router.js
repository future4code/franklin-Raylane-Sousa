import React from 'react'
import {Routes, Route} from 'react-router-dom'
import { CreatePlaylist } from '../Pages/CreatePlaylist/CreatePlaylist'
import { DetailTrack } from '../Pages/DetailPlaylist/DetailTrack'
import { PlaylistsPage } from '../Pages/PlaylistsPage/PlaylistsPage'



export const Router = () => {
    return (
        
            <Routes>
                <Route path={"/create"} element={<CreatePlaylist/>}/>    

                <Route path={"/"} element={<PlaylistsPage/>}/>  

                <Route path={":id/tracks"} element={<DetailTrack/>}/>
                                

            </Routes>

    )
}
