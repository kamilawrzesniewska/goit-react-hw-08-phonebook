import { Circles } from 'react-loader-spinner';

const Loader = () => {
  return (
    <Circles
      height="10"
      width="10"
      color="orange"
      ariaLabel="circles-loading"
      wrapperStyle={{}}
      wrapperClass=""
      visible={true}
    />
  );
};

export default Loader;
