import Spinner from 'react-bootstrap/Spinner';

function LoaderComponent() {
    return (
        <div className='spinner'>
            <Spinner animation="border" role="status">
                <span className="visually-hidden">Loading...</span>
            </Spinner>
        </div>
    );
}

export default LoaderComponent;