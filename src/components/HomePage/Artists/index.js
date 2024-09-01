import PropTypes from "prop-types";
import Skeleton from "react-loading-skeleton";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { Wrapper, ArtistWrapper, ArtistSkeletonWrapper } from "./styled";
import ArtistCard from "./ArtistCard";

function Artists({ isLoading, artists }) {
  return (
    <Wrapper>
      <ArtistWrapper>
        {isLoading &&
          [1, 2, 3, 4, 5, 6, 7, 8].map((num) => (
            <Skeleton
            wrapper={ArtistSkeletonWrapper}
            key={num}
            height={116}
            width={220}
            borderRadius={25}
            />
          ))}
        <Swiper slidePerView="auto" spaceBetween={20} modules={[Pagination]}>
          {!isLoading &&
            artists?.map((genre) => (
              <SwiperSlide key={genre.id} style={{ width: "auto"}}>
                <ArtistCard name={genre.name} image={genre.picture_medium} />
              </SwiperSlide>
            ))}
        </Swiper>
      </ArtistWrapper>
    </Wrapper>
  );
}

Artists.propTypes = {
  isLoading: PropTypes.bool,
  artists: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
      picture_medium: PropTypes.string,
    }),
  ),
};

export default Artists;