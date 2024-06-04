import ButtonGradient from "./assets/svg/ButtonGradient.jsx";
import IDPOHeader from "./components/IDPOHeader.jsx";
import IDPOMaterials from "./components/IDPOMaterials.jsx";
import IDPOSupplementary from "./components/IDPOSupplementary.jsx";

const IDPO = () => {
    return (
        <>
            <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
                <IDPOHeader/>
                <IDPOMaterials/>
                <IDPOSupplementary/>
            </div>

            <ButtonGradient/>
        </>
    );
};

export default IDPO;