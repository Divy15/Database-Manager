import { DBRegisterNavbarButton } from "./Constants"
import { useFormView } from "./FormViewContext"

export const DBRegisterNavbar = () => {

    const {openForm} = useFormView();

    return(
        <>
        <div>
            <div className="flex justify-between">
                {DBRegisterNavbarButton.map((item,index) => (
                    <div key={index} className="m-4">
                        <button className={item.classname}
                        onClick={() => openForm(item.openFormName, true)}>
                            {item.name}
                        </button>
                    </div>
                ))}
            </div>
        </div>
        </>
    )
}