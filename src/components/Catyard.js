import React from 'react'
import Box from './Box'
import Picture from './Picture'

const Catyard = ({ pictures }) => {
    return (
        // <div className="catyard">
        //     {pictures.map((picture) => {
        //         return <Box url={picture.url} id={picture.id} key={picture.id} />
        //     })}
        // </div>

        <div className="catyard">
            {pictures.map((picture) => {
                return <Box url={picture.url} id={picture.id} key={picture.id} />
            })}
        </div>
    )
}

export default Catyard
