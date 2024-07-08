import Image from "next/image";
import authorImg from "../../../assets/apu.png";
import blogImg from "../../../assets/gad2.jpg";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function BlogDetailsPage() {
    return (
        <>
            <Navbar />
            <div className="bg-lightWhite border-t-2 border-t-[#ccc] py-16">
                <div className="container flex flex-col justify-center items-center mx-auto gap-5 ">
                    <h1 className="text-4xl lg:w-3/5 text-center font-semibold">Lorem ipsum dolor sit amet consectetur adipisicing elit?</h1>
                    <Image width={50} src={authorImg} alt="author" />
                </div>
            </div>

            <div className="container mx-auto py-8">
                <div className="lg:w-3/5 mx-auto">
                    <div className="mb-6">
                        <Image src={blogImg} alt="Blog image" />
                    </div>
                    <p className="text-lg">Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem dolores ad pariatur, asperiores quia saepe exercitationem eos eaque veniam, magni ut ullam similique nulla fugiat eum temporibus sequi facere nobis quaerat aliquam sint. Fuga vitae laborum voluptatem nihil corrupti saepe voluptate nesciunt quam id necessitatibus voluptatum quia sunt, consequatur ad! Lorem ipsum dolor sit amet consectetur adipisicing elit. <br /><br /> Quidem rem ratione sed, quos aspernatur neque dolorem magnam pariatur sit similique iure incidunt. Ipsam totam quidem sequi veniam perferendis quis! Porro alias itaque rerum? Autem sequi est at adipisci magnam ratione excepturi, explicabo facilis velit repellendus numquam ex placeat ducimus voluptatem tenetur magni, nisi aliquid eligendi labore tempora facere repudiandae animi nihil. Nobis corrupti ea, ullam iusto labore sint. Impedit, nulla?<br /><br /> Quidem rem ratione sed, quos aspernatur neque dolorem magnam pariatur sit similique iure incidunt. Ipsam totam quidem sequi veniam perferendis quis! Porro alias itaque rerum? Autem sequi est at adipisci magnam ratione excepturi, explicabo facilis velit repellendus numquam ex placeat ducimus voluptatem tenetur magni, nisi aliquid eligendi labore tempora facere repudiandae animi nihil. Nobis corrupti ea, ullam iusto labore sint. Impedit, nulla?<br /><br /> Quidem rem ratione sed, quos aspernatur neque dolorem magnam pariatur sit similique iure incidunt. Ipsam totam quidem sequi veniam perferendis quis! Porro alias itaque rerum? Autem sequi est at adipisci magnam ratione excepturi, explicabo facilis velit repellendus numquam ex placeat ducimus voluptatem tenetur magni, nisi aliquid eligendi labore tempora facere repudiandae animi nihil. Nobis corrupti ea, ullam iusto labore sint. Impedit, nulla?</p>
                </div>
            </div>
            <Footer />
        </>
    );
}