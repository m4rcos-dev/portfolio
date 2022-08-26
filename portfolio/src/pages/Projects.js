import { Box, Typography } from "@mui/material";
import React from "react";
import Slide from '@mui/material/Slide'
import theme from "../style/Theme";

// =====import Redux=========
import { connect } from 'react-redux'
import { currentUrl } from "../redux/actions/currentUrl";

class Projects extends React.Component {
  componentDidMount(){
    const { dispatch } = this.props;
    dispatch(currentUrl({ currentUrl: window.location.pathname}))
  }
  render(){
    const { currentScreen } = this.props;
    const { breakpoints: { values } } = theme;
    const currentSlideDirection = currentScreen.width <= values.md3 ? 'up' : 'left';
    return(
      <Box>
        <Slide direction={currentSlideDirection} in mountOnEnter unmountOnExit>
        <Typography>
          Projects
        </Typography>
        </Slide>
      </Box>
    )
  }
}

// export default Projects;

// ======export Redux=======
export default connect()(Projects);
