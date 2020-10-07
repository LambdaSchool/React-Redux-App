import React, {useEffect} from "react";
import { Image, Dimmer, Loader } from "semantic-ui-react";
import { connect } from "react-redux";
import { fetchPexelImage } from "../store/actions/pexelsAction";

function PexelsImage(props) {
    useEffect(() => {
        props.fetchPexelImage()
    },[])

  return (
    <>
      {props.isImageLoading ? (
        <Dimmer active inverted>
          <Loader>Loading...</Loader>
        </Dimmer>
      ) : (
        <div>
          <Image src={props.cityImage} alt={props.altImageInfo} />
        </div>
      )}
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    cityImage: state.pexelsReducer.cityImage,
    altImageInfo: state.pexelsReducer.altImageInfo,
    isImageLoading: state.pexelsReducer.isImageLoading,
  };
};

export default connect(mapStateToProps, { fetchPexelImage })(PexelsImage);
