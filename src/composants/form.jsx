function LabelParent({labelTitle}){
    return(
        <div>
            <label htmlFor={labelTitle}></label>
            <input type="text" />
        </div>
    )
}
export function Form({TitleForm}){
    return(
        <form action="">
            <h1>{TitleForm}</h1>
            <div>
                <LabelParent
                    labelTitle={'name'}>
                </LabelParent>
                <LabelParent
                    labelTitle={'Password'}
                />
                
            </div>
        </form>
    )
}