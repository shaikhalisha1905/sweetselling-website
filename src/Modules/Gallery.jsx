import React from 'react';
import '../Style/Gallery.css'
import g1 from '../Galleryimg/rasgulla2.jpg'
import g2 from '../Galleryimg/jalebi1.jpeg'
import g3 from '../Galleryimg/rasmalai.jpg'
const Gallery = () => {

    return (

        <section class="campus">
            <h1>Popular Items</h1>
            
            <div class="row">
                <div class="campus-col">
                    <img src={g1} alt='bg1' />
                    <div class="layer"> 
                        <h3>Rasgulla</h3>
                    </div>
                </div>
                &nbsp;&nbsp;&nbsp;&nbsp;
                <div class="campus-col">
                    <img src={g2} alt='bg2'/>
                    <div class="layer">
                        <h3>Jalebi</h3>
                    </div>
                </div>
                &nbsp;&nbsp;&nbsp;&nbsp;
                <div class="campus-col">
                    <img src={g3} alt='bg3'/>
                    <div class="layer">
                        <h3>Rasmalai</h3>
                    </div>
                </div>

                
            </div>
        </section>
    )
}

export default Gallery