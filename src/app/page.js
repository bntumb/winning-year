
import HomePageHeaderSection from "@/design-system/compoments/HomePageHeaderSection/HomePageHeaderSection";
import LabelledContainer from "@/design-system/compoments/LabelledContainer/LabelledContainer";
import EntryDisplay from "@/design-system/compoments/CardContainer/CardContainer";
import AddButton from "@/design-system/compoments/AddButton/AddButton";

export default function Home() {
  return (
    <>
    

    <div className="pageLayout">
      

      <LabelledContainer label={'Wins'} children={'hey'}/>
      <AddButton primary={true} label={'Add a Win'}/>
    </div>
    </>
    
  );
}
