function Loading({message}){
return(
    <>
    <div className="loading">
        <div className="spinner">

        </div>
        <p>{message||"Chargement..."}</p>

    </div>
    </>
);
}
export default Loading;