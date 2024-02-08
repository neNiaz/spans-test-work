import Header from "@/shared/components/header/header.tsx";
import Footer from "@/shared/components/footer/footer.tsx";
import Content from "@/shared/components/content/content.tsx";
import { FadeInComponent } from "@/shared/components/fade-in/fade-in.tsx";

const MainPage = () => {
  return (
    <>
      <FadeInComponent>
        <Header />
        <Content />
        <Footer />
      </FadeInComponent>
    </>
  );
};

export default MainPage;
