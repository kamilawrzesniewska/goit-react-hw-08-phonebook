import CookieConsent from 'react-cookie-consent';

const CookieConfirmation = () => {
  return (
    <>
      <CookieConsent
        location="bottom"
        cookieName="cookies"
        style={{ background: 'yellow' }}
        buttonText="Confirm"
        buttonStyle={{
          border: '2px solid yellow',
          borderRadius: '10px',
          outline: 'none',
          background: 'violet',
          padding: '5px',
          color: 'yellow',
          boxShadow: '0px 0px 3px 0px rgba(255, 255, 255, 0.7)',
        }}
        expires={365}
      >
        We use cookies to improve the user's browsing experience.
      </CookieConsent>
    </>
  );
};

export default CookieConfirmation;
