import { DBConnectionForm } from "@/Component/DBRegister/DBConnectionForm";
import { DBRegisterNavbar } from "@/Component/DBRegister/DBRegisterNavbar";
import { useFormView } from "@/Component/DBRegister/FormViewContext";


export const DatabaseRegistry = () => {

  const { isFormOpen, formName } = useFormView();

  return (
    <>
    <div>
      <div>
        <DBRegisterNavbar />
      </div>
    </div>

    { isFormOpen && formName === "DBConnection" ? (
    <div>
      <DBConnectionForm />
    </div>
    ) : null}
    </>
  );

};
