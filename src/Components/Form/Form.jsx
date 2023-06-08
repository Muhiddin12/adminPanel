import BranchForm from "../BranchForm/BranchForm";
import ProductForm from "../ProductForm/ProductForm";
import { useParams } from "react-router-dom";

function Form() {
  const { slug } = useParams();
  const forms = {
    branches: <BranchForm />,
    products: <ProductForm />,
  };

  return forms[slug];
}

export default Form;
