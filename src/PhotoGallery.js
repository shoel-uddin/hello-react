import React from 'react'
import PhotoCard from './PhotoCard'



const data = [
    
    {
         title: "On the Wall",
        url: '/onTheWall.jpg',
        description: 'On the wall of the mountain'
    },
    {
        // title: '50 Cal',
        url: '/50cal.jpg',
        description:'Shooting the 50 to dispose'
    },
   
]

function PhotoGallery() {
    return (
        <>
        <div className="gallery">
            {
                data.map(i => <PhotoCard
                    title={i.title}
                    url={i.url}
                    description={i.description}
                    />  )
            }
            
        </div>
        </>
    )
}

export default PhotoGallery;