import ButtonGradient from "./assets/svg/ButtonGradient.jsx";
import IDPOTeachingHeader from "./components/IDPOTeachingHeader.jsx";
import IDPOTeachingMaterials from "./components/IDPOTeachingMaterials.jsx";
import IDPOTeachingPlans from "./components/IDPOTeachingPlans.jsx";

const IDPOTeaching = () => {
    return (
        <>
            <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
                <IDPOTeachingHeader/>
                <IDPOTeachingMaterials/>
                <IDPOTeachingPlans/>
            </div>

            <ButtonGradient/>
        </>
    );
};

export default IDPOTeaching;