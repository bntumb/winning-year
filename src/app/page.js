
import HomePageHeaderSection from "@/design-system/compoments/HomePageHeaderSection/HomePageHeaderSection";
import LabelledContainer from "@/design-system/compoments/LabelledContainer/LabelledContainer";
import EntryDisplay from "@/design-system/compoments/EntryDisplay/EntryDisplay";

export default function Home() {
  return (
    <div>
      <HomePageHeaderSection/>
      <LabelledContainer label={'Wins'} children={'hey'}/>

    </div>
  );
}
