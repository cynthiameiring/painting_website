import posingWithShoe from "./media/shoe-cropped.jpg";
import guitarFinished from "./media/Guitar-finished.jpeg";
import guitar1 from "./media/guitar-detail1.jpg";
import guitar2 from "./media/guitar-detail2.jpg";
import guitar3 from "./media/guitar-detail3.jpeg";
import guitar4 from "./media/guitar-detail4.jpg";
import guitar5 from "./media/guitar-detail5.jpeg";
import indianRingFinished from "./media/indian_ring/indianring_finished.JPG";
import indianRing1 from "./media/indian_ring/indianring_detail1.JPG";
import indianRing2 from "./media/indian_ring/indianring_detail2.JPG";
import indianRing3 from "./media/indian_ring/indianring_detail3.JPG";
import indianRing4 from "./media/indian_ring/indianring_detail4.JPG";
import indianRing5 from "./media/indian_ring/indianring_detail5.JPG";
import indianRing6 from "./media/indian_ring/indianring_detail6.JPG";
import indianRing7 from "./media/indian_ring/indianring_detail7.JPG";

export default {
  pages: [
    {
      id: 1,
      title: "About",
      teaserText:
        "The journey in the world of art started in 2018. In a small studio and with a painting starter kit, the first brush strokes became a fact. With a great passion for photorealism and being inspired by other contemporary artists, Cynthia started creating works in acrylic and oil paint. It was only in 2020 when a complete switch to colour pencils was made. Things got more serious and more time was spend to in creating the first pieces. Based in the Netherlands, she loves to work on projects where every detail matters. To make a painting as realistic as possible is always the main goal. Spending hours and hours and putting layer on layer to get the vibrance, values and details just right.",
      teaserImage: {
        url: posingWithShoe,
        alt: "Posing with shoe painting",
      },
    },
    {
      id: 2,
      title: "Contact",
      teaserText:
        "Do you have questions or are you interested in purchasing one of the available arworks? Please send an email to get the pricelist, shipping information and other information. Also the possibility of framing the piece can be discussed. Please contact me by sending an email to: ",
      teaserImage: {
        url: "../media/Guitar-finished.jpeg",
        alt: "Posing with shoe painting",
      },
    },
    {
      id: 3,
      title: "Selected artworks",
      teaserText:
        "A selection of artworks I worked on recently. Some small works, some big works, some are available and some are not. They are all made with colour pencils on thick acid-free paper and each one took between 50 and 100 hours to create. Please check them out below and if you are interested in purchasing one of the artworks, feel free to contact me by sending an email to: hello@cynthiameiring.com.",
      teaserImage: {
        url: guitarFinished,
        alt: "Posing with shoe painting",
      },
      artworks: [
        {
          id: 1,
          title: "Fado guitar",
          status: "Sold",
          teaserImage: {
            url: guitarFinished,
            alt: "Posing with shoe painting",
          },
          productImages: [
            {
              url: guitar3,
              alt: "Posing with shoe painting",
            },
            {
              url: guitar4,
              alt: "Posing with shoe painting",
            },
            {
              url: guitar1,
              alt: "Posing with shoe painting",
            },
            {
              url: guitar2,
              alt: "Posing with shoe painting",
            },
            {
              url: guitar5,
              alt: "Posing with shoe painting",
            },
          ],
          productDetails: [
            "Certificate of Authentication is included",
            "Size without frame: 595 x 840 mm (A1)",
            "Acid free, 300 gr/m2 paper",
            "White wooden frame, size: 700 x 975 x 30 mm",
            "A layer of fixative spray is applied to protect the artwork",
            "Material used: Caran d'Ache Luminance colour pencils",
          ],
        },
        {
          id: 2,
          title: "Indian ring",
          status: "Available",
          teaserImage: {
            url: indianRingFinished,
            alt: "Indian ring main picture",
          },
          productImages: [
            {
              url: indianRing1,
              alt: "Indian ring detail picture1",
            },
            {
              url: indianRing2,
              alt: "Indian ring detail picture2",
            },
            {
              url: indianRing3,
              alt: "Indian ring detail picture1",
            },
            {
              url: indianRing4,
              alt: "Indian ring detail picture2",
            },
            {
              url: indianRing5,
              alt: "Indian ring detail picture1",
            },
            {
              url: indianRing6,
              alt: "Indian ring detail picture2",
            },
            {
              url: indianRing7,
              alt: "Indian ring detail picture1",
            },
          ],
          productDetails: [
            "Certificate of Authentication is included",
            "Size without frame: 595 x 840 mm (A1)",
            "Acid free, 300 gr/m2 paper",
            "White wooden frame, size: 700 x 975 x 30 mm",
            "A layer of fixative spray is applied to protect the artwork",
            "Material used: Caran d'Ache Luminance colour pencils",
          ],
        },
      ],
    },
    {
      id: 4,
      title: "Process",
      teaserText:
        "Creating a photorealistic drawing doesn't only involve a lot of patience and hours and hours of drawing. It's a whole process to come from a blank piece of paper to a realistic drawing which almost comes to life. From finding an interesting object to draw, creating a usefull reference picture to drawing the outlines, colouring and framing the final drawing.",
      teaserImage: {
        url: "../media/Guitar-finished.jpeg",
        alt: "Posing with shoe painting",
      },
    },
    {
      id: 5,
      title: "Gallery",
      teaserText:
        "Finished, unfinished and work in progress... This photo gallery gives a glimp of the projects I enjoyed working on the most. It shows a bit of the progress and how every object arises from the paper. Step by step as it is a slow process, but.. a very enjoyable one! Every detail matters, every scribble with the pencil is important to make the final drawing as photorealistic as possible. If you would like to see more about the process I follow, click ",
      teaserImage: {
        url: "../media/Guitar-finished.jpeg",
        alt: "Posing with shoe painting",
      },
    },
  ],
};
