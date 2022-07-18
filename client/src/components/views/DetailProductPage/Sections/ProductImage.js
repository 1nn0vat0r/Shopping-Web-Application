import React, { useState, useEffect } from 'react'
import ImageGallery from 'react-image-gallery';

function ProductImage(props) {

    const [Images, setImages] = useState([])

    useEffect(() => {

        if (props.detail.images && props.detail.images.length > 0) {
            let images = []

            props.detail.images.map(item => {
                images.push({
                    original: `https://5000-1nn0vat0r-shoppingmallm-odfhz1hjjkv.ws-us54.gitpod.io/${item}`,
                    thumbnail: `https://5000-1nn0vat0r-shoppingmallm-odfhz1hjjkv.ws-us54.gitpod.io/${item}`
                })
            })
            setImages(images)
        }

    }, [props.detail])

    return (
        <div>
            <ImageGallery items={Images} />
        </div>
    )
}

export default ProductImage
