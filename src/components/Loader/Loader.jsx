import { ProgressBar } from "react-loader-spinner";

const Loader = () => {
    return (
        <div
            style={{
                height: '100vh',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                fontSize: 40,
                color: '#010101',
            }}
        >
            <ProgressBar
                height="80"
                width="80"
                ariaLabel="progress-bar-loading"
                wrapperStyle={{}}
                wrapperClass="progress-bar-wrapper"
                borderColor='#F4442E'
                barColor='#51E5FF'
            />
        </div>
    );
};

export default Loader;