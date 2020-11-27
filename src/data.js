import guitarFinished from "./media/Guitar-finished.jpeg";
import indianRingFinished from "./media/Guitar-finished.jpeg";

export default {
  pages: [
    {
      id: 1,
      title: "About",
      teaserText:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam tempus libero ut magna placerat, ut auctor dui malesuada. Duis lobortis odio metus, nec placerat metus congue id. Ut id magna orci. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam tempus libero ut magna placerat, ut auctor dui malesuada. Duis lobortis odio metus, nec placerat metus congue id. Ut id magna orci.",
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
      teaserText:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam tempus libero ut magna placerat, ut auctor dui malesuada. Duis lobortis odio metus, nec placerat metus congue id. Ut id magna orci. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam tempus libero ut magna placerat, ut auctor dui malesuada. Duis lobortis odio metus, nec placerat metus congue id. Ut id magna orci.",

      teaserImage: {
        url: guitarFinished,
        alt: "Posing with shoe painting",
      },
      artworks: [
        {
          id: 1,
          title: "Fado guitar",
          src: "/artworks/guitar",
          teaserImage: {
            url: guitarFinished,
            alt: "Posing with shoe painting",
          },
          productImages: [
            {
              url: indianRingFinished,
              alt: "Posing with shoe painting",
            },
            {
              url: "../media/Guitar-finished.jpeg",
              alt: "Posing with shoe painting",
            },
          ],
        },
        {
          id: 2,
          title: "Indian ring",
          src: "/artworks/indian-ring",
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
      teaserText: "blabla",
      teaserImage: {
        url: "../media/Guitar-finished.jpeg",
        alt: "Posing with shoe painting",
      },
    },
  ],
};
