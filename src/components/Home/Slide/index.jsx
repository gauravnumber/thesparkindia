import Carousel from "react-material-ui-carousel";
import Slide from "./Slide";
// import Slide from "@/components/Slide";

const Slides = () => {
  var items = [
    {
      name: "Light Bulbs",
      description: "Get Best Deal with Best Quality",
      buttonText: "UP TO 45% OFF*",
      companyName: "Sindhu Pvt.",
    },
    {
      name: "Shoes",
      description: "Get Best Deal with Best Quality",
      buttonText: "UP TO 30% OFF*",
      companyName: "Mindhu Pvt.",
    },
    {
      name: "LED",
      description: "Get Best Deal with Best Quality and Quantity",
      buttonText: "UP TO 35% OFF*",
      companyName: "Bindhu Pvt.",
    },
    {
      name: "Phone",
      description: "Get Best Deal with Great Best Quality",
      buttonText: "UP TO 40% OFF*",
      companyName: "Aindhu Pvt.",
    },
    {
      name: "TV",
      description: "Get Best Deal with Big TV",
      buttonText: "UP TO 25% OFF*",
      companyName: "Rindhu Pvt.",
    },
  ];

  return (
    <Carousel
      autoPlay={false}
      indicators={false}
      // indicatorIconButtonProps={{
      //   style: {
      //     // padding: "10px", // 1
      //     color: "blue", // 3
      //   },
      // }}
      // indicatorContainerProps={{
      //   style: {
      //     marginTop: -24, // 5
      //   },
      // }}
      // IndicatorIcon={<Home/>} // Previous Example
      // activeIndicatorIconButtonProps={{
      //   style: {
      //     backgroundColor: "red", // 2
      //   },
      // }}
    >
      {items.map((item, i) => (
        <Slide key={i} item={item} />
      ))}
    </Carousel>
  );
};

export default Slides;
