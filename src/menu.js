function Welcome(props) {
    return (
        <h1>Привет, {props.name}</h1>
    )
}

console.log(typeof(props));
export default Welcome;