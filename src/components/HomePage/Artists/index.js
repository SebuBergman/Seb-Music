import PropTypes from "prop-types";
import Skeleton from "react-loading-skeleton";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { Wrapper, ArtistWrapper, ArtistSkeletonWrapper, ArtistLoaderWrapper } from "./styled";
import ArtistCard from "./ArtistCard";

function Artists({ isLoading, artists }) {
  return (
    <Wrapper>
      <ArtistWrapper>
        {isLoading &&
          [...Array(8).keys()].map((num) => (
            <ArtistLoaderWrapper key={num}>
              <Skeleton wrapper={ArtistSkeletonWrapper} key={num} height={95} width={95} circle />
              <Skeleton height={27} />
            </ArtistLoaderWrapper>
          ))}
        <Swiper slidePerView="auto" spaceBetween={20} modules={[Pagination]}>
          {!isLoading &&
            artists?.map((genre) => (
              <SwiperSlide key={genre.id} style={{ width: "auto" }}>
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
