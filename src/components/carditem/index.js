import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import "./index.css";

function CardsList() {
  const cards = [
    {
      imageUrl:
        "https://3.imimg.com/data3/FY/XT/MY-7795481/reflective-glass-250x250.jpg",
      title: "State of markets",
      description:
        "The market capitalisation of India stocks crossed US$4.5 trillian in january",
    },
    {
      imageUrl:
        "https://bl-i.thgim.com/public/opinion/2446up/article66331164.ece/alternates/FREE_320/Capex.jpg",
      title: "The Central Capex Surge",
      description:
        "The last few years have seen a very substantial step up in capital",
    },
    {
      imageUrl:
        "https://static.businessworld.in/upload/bLKTcp_Tax_graph_01_updated.jpg",
      title: "Direct Taxes and Business Cycle",
      description:
        "The share of direct taxes in total tax collections of the Central government is",
    },
    {
      imageUrl:
        "https://media.istockphoto.com/id/1268065431/vector/online-banking-and-finance-management-concept-digital-bank-transaction-mobile-payments.jpg?s=612x612&w=0&k=20&c=7Z7N8h6OtRefIpS0zmd4gXUQGvNq_8H2A3PQWfymjOY=",
      title: "Banking Monitor",
      description:
        "Credit growth has remained broadly stable in recent weeks of just",
    },
    {
      imageUrl:
        "https://i0.wp.com/www.stockmaniacs.net/wp-content/uploads/2018/09/nifty-50-data.jpg?ssl=1",
      title: "Nifty Shares",
      description:
        "Nifty ended 32 points higher to form an Inside Bar candle on the daily chart on Tuesday",
    },
    {
      imageUrl:
        "https://assets.gqindia.com/photos/6540e2ba4622f7146b12b76b/16:9/w_2560%2Cc_limit/best-time-to-book-flights.jpg",
      title: "About Flights",
      description:
        "Emirates gave a 15-year-old girl travelling to Chennai a transit hotel after she missed her connecting flight in Dubai",
    },
    {
      imageUrl:
        "https://www.hindustantimes.com/ht-img/img/2023/04/11/1600x900/PTI02-09-2023-000257B-0_1676204082697_1676204082697_1681189664755_1681189664755.jpg",
      title: "Vande Bharat Express",
      description:
        "Schedule and timings: The train operates six days a week except Wednesday. The train leaves Gandhinagar at 2:05pm and reaches Mumbai at 8:25pm",
    },
    {
      imageUrl: "https://www.tsrtc.telangana.gov.in/img/buses/pallevelugu.jpg",
      title: "Buses",
      description:
        "The early morning trips will start at 5 am and the evening services will resume at 4 pm and continue until midnight, TSRTC said",
    },
    {
      imageUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsDpxjsVcCN9V98PTMWlLwWZ4JapAbSMW0vve9Aknkpw&s",
      title: "Factories",
      description:
        "India Manufacturing Industries: Number Of Factories data was reported at 249,987.000 Unit in 2022. This records a decrease from the previous number of 250,454.000 Unit for 2021",
    },
    {
      imageUrl:
        "https://blog.webhopers.com/wp-content/uploads/2022/03/Top-IT-Companies-in-Hyderabad-1024x577.png",
      title: "Software Companies",
      description:
        "There are a total of 1469 Software companies in Hyderabad as of March 15, 2024.",
    },
    {
      imageUrl:
        "https://www.ibm.com/blog/wp-content/uploads/2021/06/LafargeHolcim-scaled.jpeg",
      title: "Roads",
      description:
        "Special traffic arrangements have been made in Bengaluru in view of the TCS World 10K Marathon on April 28, 2024 The event will take place from 4 am to 10 am. The public is urged to cooperate",
    },
    {
      imageUrl:
        "https://u4d2z7k9.rocketcdn.me/wp-content/uploads/2021/11/1-1.jpg.webp",
      title: "Bengal Tiger",
      description:
        "From the bengal tiger and one-horned rhinoceros to snow leopard these are just 10 endangered species in India that urgently need",
    },
    {
      imageUrl:
        "data:image/jpeg;base64,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",
      title: "Scotland's Crane",
      description:
        "One of Scotland's rarest birds has paired up with a mate who was born as part of a project to reintroduce the species to the UK.",
    },
    {
      imageUrl:
        "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAFwAXAMBIgACEQEDEQH/xAAbAAABBQEBAAAAAAAAAAAAAAAAAQIDBAUGB//EADYQAAIBAwMCAwYEBAcAAAAAAAECAwAEERIhMQVBEyJRBjJhcYGRQsHh8BShsdEjM0NScoKS/8QAGAEBAQEBAQAAAAAAAAAAAAAAAAECAwT/xAAbEQEBAQEAAwEAAAAAAAAAAAAAARECEiFBMf/aAAwDAQACEQMRAD8A8UoopK2FpKKWgKKMUUBRRRQFFFFAUlLSUDymd08w9BzTaekbSuFhyz52Ue99K1R0e4SNX6jLb2yngTt5/tzVxGPTijhA5Vgh4YjY/WtYWXSlYhr3X674FbiXcbbrcErpwE1+TH/HiteKa5HwCIGlJO2kjbY5rsum+zNrfdKjiW2lW7EZaWXnB7Y/tUlp0y3vYGUwqdRBOnYZrqfZ2I2JCocAeUqPQ1bJE8nmd90G8gAYqDjykD1FV06NeSMwCaVTZnbYZ9BXr3WrGARtMF25Nee+0FxNCkUShkiUanPGSTXTrnizYk6rlZY3hlaKQYdTg0ynSOXdnYkknOTTa4NkopaSoNW36kln0wJYu8d48mZWC8rjgN2qi1y7MWbUWP4icn7nejXHJtKCG/3p+YoeBlTWuHjG2tfzHI+tX2GL4RO5k+m9bXSUtZI8mzWZwTmSRiB8NhWQkSNF4hfBzjTjkV1PSbItAIo28MKNyOcmrJqV1fRvNZqy25Q/AYFb9vFHEocklu+/FY1tLogjWMgkbHHr+zV+OQvEyt+E9qw52I+qXnijwguVJwT868+9rOoxS3t1ZtrGiTG3yrteoa3gl8NfOg1ema829oo3F88sh1Mx3bGNXoa9HNs52LzGW4Ue4xPzFNoorg6CiijFAvIyOamt4Wfz6hGg5Y/veok98bgfE9qdL5mIXdV2AFUa8UtpcNFbiNNYOWkUY1Y9RxWtY3kbW1w1tk+GG3PfauUtXeKZHUcH0rQs5Hs+oyRadUDrpdT+JSKs6ypXRdBv2/h11seFJ+1bFh1U+fVznP07VgtAtpLb26ZKStgP654FQWEry9PlEurUFCMTznit+MZsd1BdxMpMmNLDFcl7R9Nt5tTkMFRdYdT2/Yq30ud5Io4pWLkqMMeTWV1OW4PVtTMXhcBAOw/t+tan5g51hYxHYST+g1aR/Sop7kyosYjjjjU5VUH596S8h/h7qSL0bb5dqirjWyUUtFQLRRRQSIxVWcknGwzxmroLIsCyEB9IGe+P0qlBl5EjO6lgSKkuZvEu2kPAPaqNKxuhJZSx6iHtpBOox+AEE4/maijujNeXRiZtDsWRTttVGym8G7STIC5w2eCp5/lUtsYIZnIk1KWKL64zsaaOr6aIpLWIzsdKEk4OM4OwrHmvCumO4DNqOlmT3lPIODzsR9jVm3lZbCRJW/y8xlhzjOx+e4qGDw5m1XhB8NgpddhMATj5NyK6/NjOKnVHhBiadIrgEY1xuVYGsdsa2KAhc7A8gVNemJrqV7cERsxKhuRUNcrdawUlFFQSUUp5pKC9axi0imuLhCH0YgU92Pf6VQIxT2dnCl2LYGBntSUDKX+tKaTvQbtsUl6XMyyDxguWTv5Ts32x9qqLLmZSMxi4yj4OND5xkfXBptigFteTAnUI9GO2CKilOIdfJ8RW39dOa6S+kqXqaxi5lMYRk1lTkb5HxH3qn/hd1X/0amB8S5lVuJAWPzxnNVAcjNS1Yl1xr7sYPxJNN8TP+nEP+lIBTTWdH//Z",
      title: "Creatures",
      description:
        "An expedition to the Salas y Gomez Ridge off Rapa Nui in the Pacific Ocean documented 160 species that were not previously known to inhabit",
    },
  ];
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    marginCenter: "20px",
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="main-slider-button-container">
      <Slider {...settings} className="slide-container">
        {cards.map((card, index) => (
          <div key={index} className="image-details">
            <img
              src={card.imageUrl}
              alt={card.title}
              style={{ height: "150px", width: "400px" }}
              className="image"
            />

            <h3 className="card-title">{card.title}</h3>
            <p className="card-para">{card.description}</p>
          </div>
        ))}
      </Slider>
      <div className="button-container">
        <button className="button">View More</button>
      </div>
    </div>
  );
}

export default CardsList;
