import { LineWave, Hourglass } from 'react-loader-spinner';
import { Box } from '@mui/material';

import { boxLoaderStyle } from './styledLoader';

export const Loader = () => {
  return (
    <Box sx={boxLoaderStyle}>
      <StyledLoader>
        <LineWave
          height="100"
          width="100"
          color="#672088"
          ariaLabel="line-wave"
          wrapperStyle={{}}
          wrapperClass=""
          visible={true}
          firstLineColor=""
          middleLineColor=""
          lastLineColor=""
        />
      </StyledLoader>
    </Box>
  );
};

export const LoadAdd = () => (
  <Hourglass
    visible={true}
    height="30"
    width="30"
    ariaLabel="hourglass-loading"
    wrapperStyle={{}}
    wrapperClass=""
    colors={['#ffffff', '#d4d6da']}
  />
);
