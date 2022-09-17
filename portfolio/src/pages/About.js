import { Box } from "@mui/material";
import React from "react";
import Slide from '@mui/material/Slide'
import theme from "../style/Theme";
import AcademicTimeLine from "../components/AcademicTimeLine";

// =====import Redux=========
import { connect } from 'react-redux'
import { currentUrl } from "../redux/actions/currentUrl";
import { activeTransition } from "../redux/actions/activeTransition";
import ExperienceTimeLine from "../components/ExperienceTimeLine";
import AvatarCardAbout from "../components/AvatarCardAbout";


class About extends React.Component {
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(currentUrl({ currentUrl: window.location.pathname }))
  }

  handleTransition = () => {
    const { dispatch } = this.props;
    dispatch(activeTransition(false))
  }

  render() {
    const { currentScreen, isTransition } = this.props;
    const { breakpoints: { values } } = theme;
    const currentSlideDirection = currentScreen.width <= values.md3 ? 'up' : 'left';
    return (
      <Box>
        <Slide
          direction={currentSlideDirection}
          in
          appear={isTransition}
          addEndListener={this.handleTransition}
          mountOnEnter
          unmountOnExit>
          <Box
            sx={{
              width: '100%',
              height: '',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <AvatarCardAbout />
            <Box
              sx={{
                width: '100%',
                height: '',
                display: 'flex',
                justifyContent: 'space-evenly',
              }}
            >
              <AcademicTimeLine />
              <ExperienceTimeLine />
            </Box>
          </Box>
        </Slide>
      </Box>
    )
  }
}

const mapStateToProps = (state) => ({
  ...state.themeChange,
  ...state.colorChange,
  ...state.currentScreen,
  ...state.activeTransition,
});

// export default About;

// ======export Redux=======
export default connect(mapStateToProps)(About);
