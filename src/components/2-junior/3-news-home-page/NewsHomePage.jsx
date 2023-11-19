import BottomArticles from "./BottomArticles";
import FeaturedArticle from "./FeaturedArticle";
import NewArticles from "./NewArticles";
import TopNav from "./TopNav";

const NewsHomePage = () => {
  return (
    <main className="container w-screen min-h-screen bg-OffWhite px-6 py-8 md:px-[10.313rem] md:py-[5.375rem] font-Inter flex flex-col gap-8 items-center">
      <TopNav />
      <section className="flex flex-col lg:flex-row gap-7">
        <FeaturedArticle />
        <NewArticles />
      </section>
      <BottomArticles />
    </main>
  );
};

export default NewsHomePage;
