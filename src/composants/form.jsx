function LabelParent({labelTitle}){
    return(
        <div>
            <label>{labelTitle}</label>
            <input type="text" />
        </div>
    )
}
/**
 * A functional component that renders a form with a title and input fields.
 *
 * @param {Object} props - The props object.
 * @param {string} props.TitleForm - The title of the form to be displayed as an <h1>.
 * @returns {JSX.Element} The rendered form component.
 */
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