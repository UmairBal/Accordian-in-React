import './styles.css';
import React, { useEffect, useState } from 'react';
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from 'react-icons/bs'




const ImageSlider = ({ url }) => {

    const [images, setImages] = useState([]);
    const [currentSlide, setCurrentSlide] = useState(0);
    const [errorMsg, setErrorMsg] = useState(null);
    const [loading, setLoading] = useState(false)


    async function fetchImages(getUrl) {
        try {
            setLoading(true)
            const response = await fetch(getUrl);
            const data = await response.json();

            if (data) {
                setImages(data)
                setLoading(false)
            }

        }
        catch (e) {
            setErrorMsg(e.message)
            setLoading(false)
        }
    }

    function handlePrevious() {
        setCurrentSlide(currentSlide === 0 ? images.length - 1 : currentSlide - 1)
    }

    function handleNext() {
        setCurrentSlide(currentSlide === images.length - 1 ? 0 : currentSlide + 1)

    }

    useEffect(() => {
        if (url !== '') fetchImages(url);
    }, [url]);

    console.log(images)

    if (loading) {
        return <div>Please Wait ...</div>
    }

    if (errorMsg) {
        return <div>Error Occured during fetching {errorMsg}</div>
    }

    return (
        <div className="container1">
            <BsArrowLeftCircleFill onClick={handlePrevious} className='arrow arrow-left' />
            {
                images ?
                    images.map((imageItem, index) => (
                        <img
                            key={imageItem.id}
                            alt={imageItem.download_url}
                            src={imageItem.download_url}
                            className={currentSlide === index ? "current-image" : "current-image hide-current-image"}
                        />
                    ))
                    : null
            }
            <BsArrowRightCircleFill onClick={handleNext} className='arrow arrow-right' />
            <span className='circle-indicators'>
                {
                    images ?
                        images.map((_, index) => <button key={index} className={currentSlide === index ? 'current-indicator' : "current-indicator hide-current-indicator"}
                        onClick={()=> setCurrentSlide(index)}></button>)
                        : null
                }



            </span>
        </div>
    )
}

export default ImageSlider