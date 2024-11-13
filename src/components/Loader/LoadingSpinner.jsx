import { FallingLines } from 'react-loader-spinner';

const LoadingSpinner = () => (
  <div className='text-center grid place-content-center'>
    <FallingLines
      height="80"
      width="80"
      color="#5CE3FB"
      ariaLabel="falling-circles-loading"
      wrapperStyle={{}}
      wrapperClass=""
      visible={true}
    />
  </div>
);

export default LoadingSpinner;