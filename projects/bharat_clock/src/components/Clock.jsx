function Clock() {
    const time = new Date();
    const date = time.toLocaleDateString();
    const currentTime = time.toLocaleTimeString();
    return( 
        <p>Current Date: {date} <br /> Current Time: {currentTime} </p>
    );
}
export default Clock;