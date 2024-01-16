import Alert from 'react-bootstrap/Alert';

const Message = ({ variant, children }) => {
  return (
    <>
      <Alert variant={variant} duration={2000}>
        {children}
      </Alert>
    </>
  )
}
export default Message