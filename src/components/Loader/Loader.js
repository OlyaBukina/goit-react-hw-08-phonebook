import { ThreeDots } from 'react-loader-spinner';

export const Loader = () => {
  return (
    <>
      <ThreeDots
        color="#96ac92"
        strokeWidth="5"
        animationDuration="0.75"
        width="56"
        height="30"
        visible={true}
        wrapperStyle={{ justifyContent: 'center' }}
      />
    </>
  );
};
