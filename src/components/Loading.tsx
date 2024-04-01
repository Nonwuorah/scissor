
const Loading = (props:{isLoading:boolean, message:string})=>{

    return (

        <div className={`loadingScrim ${props.isLoading?"show":"hide"}`}>
            <p className="loadingMessage">{props.message}</p>
        </div>
    );

}

export default Loading;