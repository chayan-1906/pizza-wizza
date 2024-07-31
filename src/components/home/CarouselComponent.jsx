import {Carousel} from "react-responsive-carousel";
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const imageProps = ['photo-1481931098730-318b6f776db0', 'photo-1508736793122-f516e3ba5569?', 'photo-1576458088443-04a19bb13da6'];

function CarouselComponent() {
    return (
        <Carousel autoPlay infiniteLoop showStatus={false} emulateTouch showThumbs={false} axis={'horizontal'}>
            {
                imageProps.map((image, index) => (
                    <div key={index} style={{maxHeight: '36rem'}} className={'object-center brightness-50'}>
                        {/*<img src={'https://source.unsplash.com/random/900x600?pizza'} alt={'pizza'} className={''}/>*/}
                        <img src={`https://images.unsplash.com/${image}`} alt={'pizza'} className={''}/>
                    </div>
                ))
            }
        </Carousel>
    );
}

export default CarouselComponent;
