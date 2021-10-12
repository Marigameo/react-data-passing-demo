const Form = ({ setName, setMovie, toggleForm }) => (
    <div className="form-container">
        <input type="text" onChange={(e) => setName(e.target.value)} placeholder="Enter your name"/>
        <br/><br/>
        <input type="text" onChange={(e) => setMovie(e.target.value)} placeholder="Your favourite movie"/>
        <br/><br/>
        <button onClick={toggleForm}>Submit</button>
    </div>
);
export default Form;