import { LineWave } from 'react-loader-spinner';

import { StyledLoader } from './loader.module';

const Loader = () => {
  return (
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
  );
};

export default Loader;
