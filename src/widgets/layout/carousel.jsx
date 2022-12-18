import { TeamCard } from "../cards";
import { IconButton } from "@material-tailwind/react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export function Carousel({ teamData }) {
    var settings = {
        // dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        pauseOnHover: true
    };

    return (
        <div className="mt-24">
            <Slider {...settings}>
                {teamData.map(({ img, name, position, socials }) => (
                    <div>
                        <TeamCard
                            key={name}
                            img={img}
                            name={name}
                            position={position}
                            socials={
                                <div className="flex items-center gap-2">
                                    {socials.map(({ color, name }) => (
                                        <IconButton key={name} color={color} variant="text">
                                            <i className={`fa-brands text-lg fa-${name}`} />
                                        </IconButton>
                                    ))}
                                </div>
                            }
                        />
                    </div>
                ))}
            </Slider>
        </div>
    );
}

export default Carousel;