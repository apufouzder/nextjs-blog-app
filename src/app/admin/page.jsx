import AddBlogPage from "./addBlog/page";
import BlogListPage from "./blogList/page";
import SubscribePage from "./subscribeEmail/page";

export default function Page() {
    return (
        <>
            <AddBlogPage />
            <BlogListPage />
            <SubscribePage />
        </>
    );
}