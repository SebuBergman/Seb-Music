import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import { ButtonText, SectionTitle } from "components/UI/Typography/Typography";
import Button from "components/UI/Button";
import { Wrapper } from "./styled";

function Error({ isErrorPage }) {
  const navigate = useNavigate();

  if (isErrorPage) {
    return (
      <Wrapper>
        <SectionTitle>Page was not found</SectionTitle>
        <Button onClick={() => navigate(0)}>
          <ButtonText>Go back</ButtonText>
        </Button>
      </Wrapper>
    );
  }
}

Error.propTypes = {
  isErrorPage: PropTypes.bool,
};

export default Error;
