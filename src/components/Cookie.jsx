import CookieConsent from 'react-cookie-consent';

const Cookie = () => {
  return (
    <>
      <CookieConsent
        cookieName="cookies"
        style={{ background: '#000', textAlign: 'left' }}
        buttonStyle={{
          border: '0px solid #000',
          background: 'white',
         
          '&:hover': {
            background: 'white',
          },
        }}
        expires={365}
      >
        This website uses cookies.{' '}
      </CookieConsent>
    </>
  );
};

export default Cookie;
