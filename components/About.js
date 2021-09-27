import Image from "next/dist/client/image";

const About = () => {
  return (
    <div id="about" className="about-container bg-white pb-16">
      <div className="grid grid-rows-auto md:grid-cols-3 xl:grid-cols-4 border-b-2 border-green-600 bg-gray-100 mx-6 md:mx-16 p-6 md:p-16">
        <h1 className=" text-lg md:text-4xl md:col-span-2 xl:col-span-3 md:leading-relaxed">
          Hello, I'm <span className="span line">Mick</span>,<br /> an
          experienced <span className="span2">graphic designer</span> and{" "}
          <span className="span2">dtp-operator.</span> <br />
          Currently on a <span className="span line">journey</span> of becoming
          a <span className="span">web developer</span>.
        </h1>
        <p className="md:order-5 md:col-span-3 xl:col-span-3">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
          excepturi esse dolorem praesentium? Rerum, temporibus. Fugit accusamus
          at quas obcaecati quisquam, expedita labore cumque ratione laboriosam
          porro eligendi, delectus eum necessitatibus, ipsam esse eveniet.
          Repellat laudantium ea libero corrupti dicta. At dolorem impedit
          repudiandae similique, delectus id ab totam ipsum. Recusandae commodi
          quidem, inventore consequuntur assumenda atque modi dicta ipsum. Fugit
          accusamus dolores vel hic molestias perferendis. Maiores minus nobis
          at sequi doloribus dicta harum quia repudiandae, obcaecati tempora in
          iure facilis tempore laborum minima nulla inventore! Sit alias dolor
          repellendus autem veniam perspiciatis nulla a accusantium. Odit ad
          cupiditate corrupti non asperiores sint esse corporis eum laudantium
          similique dolor itaque, reprehenderit natus vero! Nemo blanditiis
          aspernatur dolor at libero vitae doloribus cum! Veniam, perferendis
          dolor. Minima, eum! Cupiditate iure eius eveniet repellat amet tempora
          quae animi, cum molestiae voluptate et iste provident ullam
          perferendis. Quos, temporibus, ipsam incidunt magni rem sit, aliquam
          ut ratione consequuntur quas non ad repudiandae. Adipisci corrupti
          quisquam nam labore ducimus nemo, voluptate dolores minus debitis
          commodi expedita optio natus deserunt excepturi mollitia amet nesciunt
          tempore officiis tempora obcaecati nulla illum id voluptatibus quam.
          Maxime, vero optio. Impedit natus autem voluptate ipsum delectus
          inventore ea?
        </p>
        <div className="portrait md:order-3 xl:order-4">
          <Image
            layout="responsive"
            objectFit="cover"
            src={"/portret/portret_mick_duotoon_2021.jpg"}
            alt={"mick"}
            width={200}
            height={200}
            className={"image"}
          />
        </div>
      </div>
    </div>
  );
};

export default About;
