import React from 'react'
import { Col, Card, Row, Carousel } from 'antd';
import Icon from '@antd-design/icons'

function ImageSlider(props) {
    return (
        <div>
            <Carousel autoplay >
                {props.images.map((image, index) => (
                    <div key={index}>
                        <img style={{ width: '100%', maxHeight: '150px' }}
                            src={`https://5000-1nn0vat0r-shoppingmallm-odfhz1hjjkv.ws-us54.gitpod.io/${image}`} />
                    </div>
                ))}
            </Carousel>
        </div>
    )
}

export default ImageSlider
