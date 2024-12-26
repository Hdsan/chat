import PropTypes from 'prop-types';
const formatDate = (dateString) => {
    const options = {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false
    };
    return new Date(dateString).toLocaleString('pt-BR', options);
};


const MessageComponent = ({ message, username }) => {
    return (
        <div
            className={`chat-message ${message.sender == username ? 'user-message' : 'other-message'}`}
        >
            <h2>{message.sender}</h2>
            {message.content}
            <div className='vertical-spacing'>
                {formatDate(message.timestamp)}
            </div>
        </div>
    );
};

MessageComponent.propTypes = {
    message: PropTypes.shape({
        content: PropTypes.string.isRequired,
        sender: PropTypes.string.isRequired,
        timestamp: PropTypes.string.isRequired
    }).isRequired,
    username: PropTypes.string.isRequired
};

export default MessageComponent;
