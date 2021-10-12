const Screen = (props) => (
    <>
        <ul>
        <li>Name - {props.name}</li>
        <li>Movie - {props.movie}</li>
        </ul>
        <button onClick={props.toggleForm}>Back to home</button>
    </>
);
export default Screen;