import ReservationSidebar from "@/app/components/properties/ReservationSidebar";
import Image from "next/image";

import apiService from "@/app/services/apiService";
import { getUserId } from "@/app/lib/actions";
import Link from "next/link";

const PropertyPage = async ({ params }: { params: { id: string } }) => {
  const property = await apiService.get(`api/properties/${params.id}`);
  const userId = await getUserId();
  console.log(property);

  return (
    <div className="max-w-[1500px] px-6 mx-auto">
      <div className="w-full h-[64vh] mb-4 relative rounded-xl overflow-hidden">
        <Image
          fill
          src="/beach-image2.jpeg"
          alt="hero beach image"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
        <div className="py-6 pr-6 col-span-3">
          <h1 className="mb-4 text-4xl">{property.title}</h1>
          <span className="mb-6 block text-lg text-gray-600">
            {property.guests} guests - {property.bedrooms} bedrooms -{" "}
            {property.bathrooms} bathrooms
          </span>
          <hr />

          <Link
            href={`/landlords/${property.landlord.id}`}
            className="py-6 flex items-center space-x-4"
          >
            {property.landlord.avatar_url && (
              <Image
                src={property.landlord.avatar_url}
                width={50}
                height={50}
                className="rounded-full"
                alt="The user name"
              />
            )}

            <p>
              <strong>{property.landlord.name}</strong> is your host
            </p>
          </Link>

          <hr />
          <p>
            <strong>{property.landlord.name}</strong> is your host
          </p>
          <hr />

          <p className="mt-6 text-lg">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quidem ut
            odit a, consequuntur cumque porro atque magnam et veniam minus
            laborum quaerat ratione unde, consectetur, eligendi blanditiis ab
            ullam nesciunt? Nostrum voluptates porro aut ut, architecto, fuga
            iure maiores et accusantium deserunt nesciunt voluptatem excepturi,
            aliquam quae adipisci at recusandae dolor sed qui sit aperiam. Animi
            accusamus amet et quaerat? Fugit modi sunt veritatis natus ab vel
            esse laudantium odio suscipit doloremque. Fugiat inventore odit
            corporis laborum ullam exercitationem odio nam eaque ex, tempore
            nihil similique tempora quod! Sint, sit! Vero autem architecto
            laboriosam possimus nemo? Eligendi ullam atque deserunt corporis
            nesciunt at minima similique error et totam optio, excepturi hic?
            Amet dolorum illo minima provident corrupti, enim magnam hic!
            Reiciendis, vel non? Perferendis nam illum sint possimus voluptas
            aperiam ratione quo quod eum quam. Odio maiores, quae repellendus
            numquam obcaecati magnam minima similique illum velit quo sapiente
            eum nesciunt?
          </p>
        </div>

        <ReservationSidebar property={property} userId={userId} />
      </div>
    </div>
  );
};

export default PropertyPage;
