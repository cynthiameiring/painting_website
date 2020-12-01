import guitarFinished from "./media/Guitar-finished.jpeg";
import indianRingFinished from "./media/flower.jpg";
import shoe from "./media/shoe.jpg";
import video from "./media/video.jpg";
import guitar1 from "./media/guitar-detail1.jpg";
import guitar2 from "./media/guitar-detail2.jpg";
import guitar3 from "./media/guitar-detail3.jpeg";
import guitar4 from "./media/guitar-detail4.jpg";
import guitar5 from "./media/guitar-detail5.jpeg";

export default {
  pages: [
    {
      id: 1,
      title: "About",
      teaserText:
        "The journey in the world of art started in 2018. With a great passion for photorealism, Cynthia started creating works in acrylic and oil paint. It was only in 2020 when she completey switched to colour pencils. Based in the Netherlands, she loves to work on projects where every detail matters. To make a painting as realistic as possible is always the main goal.",
      teaserImage: {
        url: "../media/shoe-cropped.jpg",
        alt: "Posing with shoe painting",
      },
    },
    {
      id: 2,
      title: "Contact",
      teaserText: "blabla",
      teaserImage: {
        url: "../media/Guitar-finished.jpeg",
        alt: "Posing with shoe painting",
      },
    },
    {
      id: 3,
      title: "Recent artworks",
      teaserText: "",
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
              url: guitarFinished,
              alt: "Indian ring detail picture1",
            },
            {
              url: "../media/Guitar-finished.jpeg",
              alt: "Indian ring detail picture2",
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
      teaserText: "blabla",
      teaserImage: {
        url: "../media/Guitar-finished.jpeg",
        alt: "Posing with shoe painting",
      },
    },
    {
      id: 5,
      title: "Gallery",
      // teaserText:
      //   "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam tempus libero ut magna placerat, ut auctor dui malesuada. Duis lobortis odio metus, nec placerat metus congue id. Ut id magna orci. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam tempus libero ut magna placerat, ut auctor dui malesuada. Duis lobortis odio metus, nec placerat metus congue id. Ut id magna orci.",
      //
      teaserText: "Get a glimp of the process behind the projects",
      teaserImage: {
        url: "../media/Guitar-finished.jpeg",
        alt: "Posing with shoe painting",
      },
    },
  ],
};
