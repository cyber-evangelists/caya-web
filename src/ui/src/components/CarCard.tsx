import { JSX, SVGProps } from "react";
import { Button } from "@/components/ui/button";
import {
  CardTitle,
  CardHeader,
  CardContent,
  CardFooter,
  Card,
} from "@/components/ui/card";
import {
  CarouselItem,
  CarouselContent,
  Carousel,
} from "@/components/ui/carousel";
import Image from "next/image";

const imageURLs = [
  "https://placehold.co/600x400.webp",
  "https://placehold.co/600x400.webp",
];

export default function Component(props: {
  name: string;
  // imageURLs: string[]
  price: string;
  children?: React.ReactNode;
}) {
  return (
    <Card className="bg-white shadow-md rounded-lg overflow-hidden mb-2 p-3">
      <CardHeader className="flex items-start justify-between p-4">
        <div className="flex items-center gap-2 w-full relative">
          <Image
            alt="User Avatar"
            className="w-10 h-10 rounded-full"
            height="50"
            src="https://i.pravatar.cc/300"
            style={{
              aspectRatio: "50/50",
              objectFit: "cover",
            }}
            width="50"
          />

          <CardTitle>{props.name}</CardTitle>

          <Button size="sm" variant="outline" className="absolute right-3">
            <HeartIcon color="red" className="h-6 w-6" />
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        <Carousel className="w-full md:max-w-full max-w-md overflow-x-scroll">
          <CarouselContent>
            {imageURLs.map((url, index) => (
              <CarouselItem key={url + props.name + index}>
                <div className="p-1 w-full">
                  <Image
                    alt="Car Image"
                    className="aspect-[16/9] w-full overflow-hidden rounded-lg object-cover object-center"
                    height="400"
                    width="600"
                    src={`${url}?text=${props.name}`}
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>

        {/* Description */}
        <div className="">{props.children}</div>
      </CardContent>
      <CardFooter className="flex justify-between items-center px-4 py-2">
        <Button
          className="bg-blue-500 text-white w-3/5 mx-auto"
          size="lg"
          variant="link"
        >
          {props.price}
        </Button>
      </CardFooter>
    </Card>
  );
}

function HeartIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
    </svg>
  );
}
